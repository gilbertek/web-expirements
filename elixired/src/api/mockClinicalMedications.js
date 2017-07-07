const clinicalMeds = {
  "clinical_medications": [
    {
      "actively_taking_flag": "Y",
      "clinical_medication_id": 1,
      "created_at": "2017-06-22T12:26:53-05:00",
      "created_by": 248,
      "created_by_type": "Member",
      "daw_flag": null,
      "drug_code": "00071037324",
      "drug_frequency": "1",
      "drug_name": "Benadryl",
      "drug_quantity": "1",
      "drug_supply": null,
      "drug_type_code": "DRUGTYPE_NDC",
      "formulary_flag": null,
      "generic_flag": null,
      "service_date": null,
      "errors": {}
    },
    {
      "actively_taking_flag": "Y",
      "clinical_medication_id": 2,
      "created_at": "2017-06-22T12:26:53-05:00",
      "created_by": 248,
      "created_by_type": "Provider",
      "daw_flag": null,
      "drug_code": "00071037324",
      "drug_frequency": "1",
      "drug_name": "Benadryl",
      "drug_quantity": "1",
      "drug_supply": null,
      "drug_type_code": "DRUGTYPE_NDC",
      "formulary_flag": null,
      "generic_flag": null,
      "service_date": null,
      "errors": {}
    }
  ]
};

class ClinicalMedicationApi {
  static fetchClinicalMedications(memberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject('Simulation random failure');
        }
        resolve(Object.assign({}, clinicalMeds, memberId));
      }, 1000);
    });
  }
}

export default ClinicalMedicationApi;
