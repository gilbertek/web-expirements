class api {
  static addUser (name, email, number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: 'New User Added'})
      }, 10)
    })
  }
}
export default api
