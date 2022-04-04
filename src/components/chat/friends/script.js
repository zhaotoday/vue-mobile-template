import Alias from "./alias";

export default {
  components: {
    "cc-alias": Alias,
  },
  emits: ["alias-updated"],
  props: {
    chatType: {
      type: String,
      default: "OneToOne",
    },
    hasAlias: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default: () => [{}],
    },
  },
  setup(props, context) {
    const showAlias = ({ friendUserId, alias, index }) => {
      context.refs.alias.show({ friendUserId, alias, index });
    };

    const onAliasOk = ({ alias, index }) => {
      context.emit("alias-updated", { alias, index });
    };

    return {
      showAlias,
      onAliasOk,
    };
  },
};
