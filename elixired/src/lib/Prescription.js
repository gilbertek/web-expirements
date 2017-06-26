import Pharmacy from './Pharmacy';
import {
  titlelize
} from './Utils';

class Prescription {
  constructor(data = {}) {
    Object.assign(this, {
      daysSupply:      data.DaysSupply,
      directions:      data.Directions,
      drugCoded:       data.DrugCoded,
      drugDescription: data.DrugDescription,
      historySource:   data.HistorySource,
      lastFillDate:    data.LastFillDate,
      pharmacy:        new Pharmacy(data.Pharmacy),
      prescriber:      data.Prescriber,
      quantity:        data.Quantity,
      refills:         data.Refills
    });
  }

  getTitle() {
    return titlelize(this.drugDescription);
  }

  getLastFillDate() {
    return new Date(this.lastFillDate.Date).toLocaleDateString();
  }

  getDaysSupply() {
    return this.daysSupply;
  }

  getQuantity() {
    return this.quantity.Value;
  }

  getRefillCount() {
    return this.refills.Value;
  }

  getPharmacyName() {
    return titlelize(this.pharmacy.name);
  }

  getPharmacyNCPID() {
    return titlelize(this.pharmacy.identification);
  }
}
export default Prescription;
