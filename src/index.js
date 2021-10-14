export const filenameToUrl = (filename, options) => {
  filename = filename || '';
  options = options || {
    replace: ''
  };
  const len = filename.length;
  if (len === 0) {
    return filename;
  }

  const r = new RegExp('[!"#$%&\'()+,/:;<=>?@\\[\\]^`{|}~]');
  let result = '';
  for (let i = 0; i < len; i++) {
    result += filename.substr(i, 1).replace(r, options.replace);
  }
  return result;
};
