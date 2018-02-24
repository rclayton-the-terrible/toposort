class UnknownNodeError extends Error {
  constructor(node) {
    super(`Found unknown node. Make sure to provided all involved nodes. Unknown node: ${node}`);
    this.data = { node };
  }
}

module.exports = UnknownNodeError;
