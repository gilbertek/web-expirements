class Pharmacy {
  constructor(data = {}) {
    Object.assign(this, {
      name:           data.StoreName,
      identification: data.Identification.NCPDPID
    });
  }
}
export default Pharmacy;
