import Mitt from "mitt";
import dayjs from "dayjs";
import socket from "plus-websocket";
import { useConsts } from "@/composables/use-consts";
import { useHelpers } from "@/composables/use-helpers";
import { useAuth } from "@lr/composables/use-auth";

const { keyMirror } = useHelpers();

export const Ws = class extends Mitt {
  events = keyMirror({
    open: null,
    error: null,
    close: null,
    ping: null,
    createChat: null,
    getChatList: null,
    markChatRead: null,
    createMessage: null,
    getMessages: null,
    newMessage: null,
  });

  connected = false;

  constructor() {
    super();

    this.connect();
    this.listenEvents();
  }

  connect() {
    this.socket = socket.connectSocket({
      url: useConsts().WsUrl,
      complete: () => {},
    });
  }

  reconnect() {
    this.close();
    this.connect();
    this.listenEvents();
  }

  close() {
    this.socket.close();
  }

  ready(cb) {
    if (this.connected) {
      cb();
    } else {
      this.on("open", () => {
        cb();
      });
    }
  }

  listenEvents() {
    this.socket.onOpen(() => {
      this.connected = true;
      this.emit("open");
    });

    this.socket.onError((error) => {
      this.connected = false;
      this.emit("error", error);
    });

    this.socket.onClose((res) => {
      this.connected = false;
      this.emit("close", res);
    });

    this.socket.onMessage((res) => {
      const { event, data } = JSON.parse(res.data);
      this.emit(event, data);
    });
  }

  formatTime(dateTime) {
    const day = dayjs().format("YYYY-MM-DD");
    const diffDay = dayjs(dateTime).format("YYYY-MM-DD");
    const days = dayjs(day).diff(dayjs(diffDay), "day");
    const date = days
      ? {
          0: "",
          1: "昨天",
          2: "前天",
        }[days] || dayjs(dateTime).format("YY/MM/DD")
      : "";
    const time = dayjs(dateTime).format("HH:mm");

    return date ? date + " " + time : time;
  }

  send({ event, data }) {
    data.headers = useAuth().getHeaders();
    data.schoolId = useConsts().SchoolConfig.id;

    if (data.chatId) data.chatId = +data.chatId;
    if (data.fromUserId) data.fromUserId = +data.fromUserId;
    if (data.toUserId) data.toUserId = +data.toUserId;

    this.socket.send({ data: JSON.stringify({ event, data }) });
  }
};
