module.exports = function (doc) {
  return !doc.deletedAt; // không đánh index cho các bản ghi bị xóa mềm
};
