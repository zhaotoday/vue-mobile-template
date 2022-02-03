import { addArrayItem, deleteArrayItem } from "jt-helpers";

export const useBem = () => {
  const button = {
    big: {
      $: ["c-button", "h88", "u-br8", "fs32"],
    },
    middle: {
      $: ["c-button", "h76", "u-br8", "fs32"],
    },
    small: {},
  };

  const box = {
    $: ["c-box", "u-ml30", "u-mr30", "u-br10", "bg-white"],
    elements: {
      body: ["c-box__body"],
    },
    modifiers: {},
    components: {
      title: ["c-title c-title--md fs34"],
    },
  };

  return {
    add: addArrayItem,
    remove: deleteArrayItem,
    button,
    box,
  };
};
