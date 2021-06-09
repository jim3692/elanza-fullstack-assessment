module.exports = {
  careRequests: {
    _index: 0,
    get newIndex () {
      return ++this._index
    },
    data: []
  }
}
