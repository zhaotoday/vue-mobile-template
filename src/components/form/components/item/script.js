export default {
  props: {
    label: String,
    prop: String,
  },
  setup(props, { parent }) {
    return {
      form: parent.form,
    };
  },
};
