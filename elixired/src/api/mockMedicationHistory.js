// http://localhost:4000/api/v1/med_history/fills?lookup[patient][first_name]=TIMOTHY&lookup[patient][last_name]=STEINBERG&lookup[patient][middle_name]=R&lookup[patient][gender]=M&lookup[patient][street_address]=614%20ZACHARY%20LANE&lookup[patient][city]=ATLANTA&lookup[patient][state]=GA&lookup[patient][zipcode]=30303&lookup[patient][date_of_birth]=1963-12-15&lookup[patient][patient_id]=3&lookup[provider]=&lookup[request_source]=teladoc_tas

const medHistory = {
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
          "Number": "6518659191"
        }
      }
    },
    "Patient": {
      "PatientRelationship": "1",
      "Name": {
        "MiddleName": "R",
        "LastName": "STEINBERG",
        "FirstName": "TIMOTHY"
      },
      "Gender": "M",
      "DateOfBirth": {
        "Date": "1963-12-15"
      },
      "Address": {
        "ZipCode": "30303",
        "State": "GA",
        "City": "ATLANTA",
        "AddressLine1": "614 ZACHARY LANE"
      }
    },
    "MedicationDispensed": [
      {
        "WrittenDate": {
          "Date": "2017-01-28"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-01-28"
        },
        "HistorySource": {
          "SourceReference": "12612",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 12  for 126 on 20120128",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-01-29"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-01-29"
        },
        "HistorySource": {
          "SourceReference": "12611",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 11  for 126 on 20120129",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-01-30"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-01-30"
        },
        "HistorySource": {
          "SourceReference": "12610",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 10  for 126 on 20120130",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-01-31"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-01-31"
        },
        "HistorySource": {
          "SourceReference": "12609",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 9   for 126 on 20120131",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-01"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-01"
        },
        "HistorySource": {
          "SourceReference": "12608",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 8   for 126 on 20120201",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-02"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-02"
        },
        "HistorySource": {
          "SourceReference": "12607",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 7   for 126 on 20120202",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-03"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-03"
        },
        "HistorySource": {
          "SourceReference": "12606",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 6   for 126 on 20120203",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-04"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-04"
        },
        "HistorySource": {
          "SourceReference": "12605",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 5   for 126 on 20120204",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-05"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-05"
        },
        "HistorySource": {
          "SourceReference": "12604",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 4   for 126 on 20120205",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-06"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-06"
        },
        "HistorySource": {
          "SourceReference": "12603",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 3   for 126 on 20120206",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-07"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-07"
        },
        "HistorySource": {
          "SourceReference": "12602",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 2   for 126 on 20120207",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      },
      {
        "WrittenDate": {
          "Date": "2017-02-08"
        },
        "Refills": {
          "Value": "11",
          "Qualifier": "R"
        },
        "Quantity": {
          "Value": "30",
          "UnitSourceCode": "AC",
          "PotencyUnitCode": "C38046",
          "CodeListQualifier": "87"
        },
        "Prescriber": {
          "Name": {
            "MiddleName": "Y",
            "LastName": "HATEM",
            "FirstName": "DAVID"
          },
          "CommunicationNumbers": {
            "Communication": [
              {
                "Qualifier": "FX",
                "Number": "5088561769"
              },
              {
                "Qualifier": "TE",
                "Number": "5088562731"
              }
            ]
          },
          "Address": {
            "ZipCode": "016550000",
            "State": "MA",
            "City": "WORCESTER",
            "AddressLine1": "UMASS MED CTR 55 LAKE AVE"
          }
        },
        "Pharmacy": {
          "StoreName": "UNKNOWN",
          "Identification": {
            "NCPDPID": "9990001"
          }
        },
        "LastFillDate": {
          "Date": "2017-02-08"
        },
        "HistorySource": {
          "SourceReference": "12601",
          "Source": {
            "SourceQualifier": "P2",
            "SourceDescription": "UNKNOWN",
            "Reference": {
              "IDValue": "9990001",
              "IDQualifier": "D3"
            }
          },
          "FillNumber": "2"
        },
        "DrugDescription": "MED 1   for 126 on 20120208",
        "DrugCoded": {
          "ProductCodeQualifier": "ND",
          "ProductCode": "00008084181"
        },
        "Directions": "TAKE 1 TABLET EVERY DAY",
        "DaysSupply": "30"
      }
    ],
    "BenefitsCoordination": {
      "ExpirationDate": {
        "Date": "2017-07-21"
      },
      "EffectiveDate": {
        "Date": "2015-07-14"
      },
      "Consent": "Y"
    }
  }
};

class MedicationHistoryApi {
  static fetchMedicationHistoryRecords(memberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject('Simulation random failure');
        }
        resolve(Object.assign({}, medHistory, memberId));
      }, 1000);
    });
  }
}

export default MedicationHistoryApi;
