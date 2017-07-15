// http://localhost:4000/api/v1/med_history/claims?lookup[patient][first_name]=DAVID&lookup[patient][last_name]=THROWER&lookup[patient][middle_name]=M&lookup[patient][gender]=M&lookup[patient][street_address]=64%20VIOLET%20LANE&lookup[patient][city]=HOWEY%20IN%20THE%20HILLS&lookup[patient][state]=FL&lookup[patient][zipcode]=34737&lookup[patient][date_of_birth]=1933-02-22&lookup[patient][patient_id]=8&lookup[provider]=&lookup[request_source]=teladoc_tas

const claims = [
  {
    "RxHistoryResponse": {
      "Response": {
        "Approved": {

        }
      },
      "Prescriber": {
        "Name": {
          "LastName": "JONSON",
          "FirstName": "TIM"
        },
        "Identification": {
          "NPI": "1245319599"
        },
        "CommunicationNumbers": {
          "Communication": {
            "Qualifier": "TE",
            "Number": "6516589210"
          }
        }
      },
      "Patient": {
        "Name": {
          "MiddleName": "M",
          "LastName": "THROWER",
          "FirstName": "DAVID"
        },
        "Gender": "M",
        "DateOfBirth": {
          "Date": "1933-02-22"
        },
        "Address": {
          "ZipCode": "34737",
          "State": "FL",
          "City": "HOWEY IN THE HILLS",
          "AddressLine1": "64 VIOLET LANE"
        }
      },
      "MedicationDispensed": [
        {
          "Quantity": {
            "Value": "30",
            "UnitSourceCode": "AC",
            "PotencyUnitCode": "C48542",
            "CodeListQualifier": "87"
          },
          "LastFillDate": {
            "Date": "2017-06-01"
          },
          "HistorySource": {
            "SourceReference": "985Q5B87",
            "Source": {
              "SourceQualifier": "P2",
              "SourceDescription": "CVS",
              "Reference": {
                "IDValue": "5497586",
                "IDQualifier": "D3"
              }
            },
            "FillNumber": "02"
          },
          "DrugDescription": "AMITRIPTYLINE/CHLORDIAZEPOXIDE ORAL TABLET 25-10MG",
          "DrugCoded": {
            "ProductCodeQualifier": "ND",
            "ProductCode": "00364215801",
            "DrugDBCodeQualifier": "SCD",
            "DrugDBCode": "856792",
            "DEASchedule": "C48677"
          },
          "DaysSupply": "30"
        }
      ],
      "BenefitsCoordination": {
        "PayerIdentification": {
          "PayerID": "T00000000021633"
        },
        "PBMMemberID": "ZZQ%PBM-UID-888877222-%VVVVAAAA10011XX-XX261L",
        "ExpirationDate": {
          "Date": "2017-07-21"
        },
        "EffectiveDate": {
          "Date": "2015-07-14"
        },
        "Consent": "Y"
      }
    }
  }
];
