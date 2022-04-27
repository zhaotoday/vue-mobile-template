import EventEmitter from "eventemitter2";
import socket from "plus-websocket";
import { keyMirror } from "jt-helpers";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";

export const Ws = class extends EventEmitter {
  events = keyMirror({
    open: null,
    error: null,
    close: null,
    ping: null,
    pingOk: null,
    createChat: null,
    createChatOk: null,
    getChats: null,
    getChatsOk: null,
    markChatRead: null,
    markChatReadOk: null,
    createMessage: null,
    createMessageOk: null,
    getMessages: null,
    getMessagesOk: null,
  });

  connected = false;

  constructor({ url }) {
    super();

    this.url = url;
    this.connect();
    this.listenEvents();
  }

  connect() {
    this.socket = socket.connectSocket({
      url: this.url,
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

  send({ event, data }) {
    data.headers = useAuth().getHeaders();

    if (data.chatId) data.chatId = +data.chatId;

    if (data.fromUserId) data.fromUserId = +data.fromUserId;

    if (data.toUserId) data.toUserId = +data.toUserId;

    this.socket.send({ data: JSON.stringify({ event, data }) });
  }
};
