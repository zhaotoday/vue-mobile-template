import { useIm } from "../../../../composables/use-im";

export default {
  props: {
    index: {
      type: Number,
      default: -1,
    },
    playIndex: {
      type: Number,
      default: -1,
    },
    fileId: {
      type: Number,
      default: 0,
    },
  },
  emits: ["play-index-change"],
  setup(props, context) {
    const { getFileUrl } = useIm();

    const innerAudioContext = uni.createInnerAudioContext();

    innerAudioContext.onStop(() => {
      context.emit("play-index-change", -1);
    });

    innerAudioContext.onEnded(() => {
      context.emit("play-index-change", -1);
    });

    const play = () => {
      if (props.playIndex === props.index) {
        innerAudioContext.stop();
      } else {
        innerAudioContext.src = getFileUrl(props.fileId);
        innerAudioContext.play();
        context.emit("play-index-change", props.index);
      }
    };

    return {
      play,
    };
  },
};
