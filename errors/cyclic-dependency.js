class CyclicDependencyError extends Error {
  constructor(node) {
    super(`Bidirectional relationship found for node: ${JSON.stringify(node)}.`);
    this.data = { node };
  }
}

module.exports = CyclicDependencyError;
