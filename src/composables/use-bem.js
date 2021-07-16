import helpers from "jt-helpers";

export const useBem = () => {
  const button = {
    big: {
      $: ["c-button", "h76", "u-br8", "fs32"],
    },
    middle: {},
    small: {},
  };

  return {
    add: helpers.addArrayItem,
    remove: helpers.deleteArrayItem,
    button,
  };
};
