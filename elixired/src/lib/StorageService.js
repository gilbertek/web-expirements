class StorageService {
  constructor () {
    this.storage = window.localStorage
  }

  getRecordByKey (key) {
    const serializedData = this.storage.getItem(key)
    return serializedData === false ? false : JSON.parse(serializedData)
  }

  saveRecord (key, data) {
    this.storage.setItem(key, JSON.stringify(data))
  }

  removeRecordByKey (key) {
    this.storage.removeItem(key)
  }
}

export default new StorageService()
