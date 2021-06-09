export const h5Copy = (content) => {
  if (!document.queryCommandSupported("copy")) {
    return false;
  }

  const textarea = document.createElement("textarea");

  textarea.value = content;
  textarea.readOnly = "readOnly";

  document.body.appendChild(textarea);

  textarea.select(); // 选择对象
  textarea.setSelectionRange(0, content.length); // 核心

  const result = document.execCommand("copy"); // 执行浏览器复制命令

  textarea.remove();

  return result;
};
