const medHistory = [
  {
  "Message": {
    "xmlns": "http://www.surescripts.com/messaging",
    "version": "010",
    "release": "006",
    "Header": {
      "To": {
        "value": "T00000000022370",
        "Qualifier": "ZZZ"
      },
      "TestMessage": "1",
      "TertiaryIdentifier": "FIL",
      "SentTime": "2017-06-09T09:40:17",
      "SenderSoftware": {
        "SenderSoftwareVersionRelease": "CURRENT",
        "SenderSoftwareProduct": "Message Processing",
        "SenderSoftwareDeveloper": "Surescripts"
      },
      "Security": {
        "Sender": {
          "SecondaryIdentification": "PYK2PKUOPX"
        },
        "Receiver": {}
      },
      "RelatesToMessageID": "l3-nS8XsSLh-APbIAfGWi1AdEWq9KKG9bOw",
      "MessageID": "275062936",
      "From": {
        "value": "S00000000000001",
        "Qualifier": "ZZZ"
      }
    },
    "Body": {
      "RxHistoryResponse": {
        "Response": {
          "Approved": {
            "ApprovalReasonCode": "AQ"
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
            "MiddleName": "A",
            "LastName": "DOCKENDORF",
            "FirstName": "TAD"
          },
          "Gender": "M",
          "DateOfBirth": {
            "Date": "1975-07-05"
          },
          "Address": {
            "ZipCode": "82001",
            "State": "WY",
            "City": "CHEYENE",
            "AddressLine1": "32 RANCH PASS"
          }
        },
        "MedicationDispensed": [
          {
            "WrittenDate": {
              "Date": "2016-08-07"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "3",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-04"
            },
            "HistorySource": {
              "SourceReference": "F20045",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CHLORDIAZEPOXIDE 25 MG CAP BRR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00555015902",
              "DEASchedule": "C48677"
            },
            "Directions": "TAKE 1 CAPSULE BY MOUTH 3 TIMES A DAY",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-12"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "1",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "ALVE",
                "FirstName": "ANTONIO"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177876301"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6172548500"
                  }
                ]
              },
              "Address": {
                "ZipCode": "021350000",
                "State": "MA",
                "City": "BRIGHTON",
                "AddressLine1": "11 HENSHAW ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-05"
            },
            "HistorySource": {
              "SourceReference": "F20044",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "TIZANIDINE HCL 4 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093516051"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH AT BEDTIME AS NEEDED FOR MUSCLE SPASM",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-08"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "1",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-06"
            },
            "HistorySource": {
              "SourceReference": "F20043",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "TIZANIDINE HCL 4 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093516051"
            },
            "Directions": "TAKE 1 TABLET AT BEDTIME AS NEEDED FOR MUSCLE SPASMS",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-07"
            },
            "HistorySource": {
              "SourceReference": "F20042",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "GLYCOPYRROLATE 2 MG TABLET UTR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00677193201"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS FOR ABDOMINAL CRAMPS/SWEATING",
            "DaysSupply": "2"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "6",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "WILSON",
                "FirstName": "REBECCA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083348810"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083348830"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016050000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "279 LINCOLN ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 302",
              "Identification": {
                "NCPDPID": "2221113"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-08"
            },
            "HistorySource": {
              "SourceReference": "F20041",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 302",
                "Reference": {
                  "IDValue": "2221113",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "04"
            },
            "DrugDescription": "METFORMIN HCL 850 MG TABLETMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378024001"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH TWICE A DAY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-08"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "J",
                "LastName": "ANTKOWIAK",
                "FirstName": "DANUTA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088451841"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088426502"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015455639",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "604 MAIN ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-09"
            },
            "HistorySource": {
              "SourceReference": "F20040",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "DIFLUNISAL 500 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093075506"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH TWICE A DAY AS NEEDED",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-07"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-10"
            },
            "HistorySource": {
              "SourceReference": "F20039",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "HYDROXYZINE PAM 50 MG CAP BRR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00555030202"
            },
            "Directions": "TAKE 1 CAPSULE BY MOUTH 3 TIMES A DAY (NAUSEA/ANXIETY)",
            "DaysSupply": "2"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-07"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "2",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-11"
            },
            "HistorySource": {
              "SourceReference": "F20038",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CYCLOBENZAPRINE 10 MG TABLEMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378075110"
            },
            "Directions": "TAKE 1/2 TABLETS BY MOUTH EVERY 8 HOURS AS NEEDED FOR MUSCLE SPASM",
            "DaysSupply": "2"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-12"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "3",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "ALVE",
                "FirstName": "ANTONIO"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177876301"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6172548500"
                  }
                ]
              },
              "Address": {
                "ZipCode": "021350000",
                "State": "MA",
                "City": "BRIGHTON",
                "AddressLine1": "11 HENSHAW ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-12"
            },
            "HistorySource": {
              "SourceReference": "F20037",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "NABUMETONE 750 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093101601"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS AS NEEDED FOR MUSCLE ACHES",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-08"
            },
            "Refills": {
              "Value": "3",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "45",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "GALLO",
                "FirstName": "HEATHER"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088456571"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088420057"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "604 MAIN STREET"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-13"
            },
            "HistorySource": {
              "SourceReference": "F20036",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "03"
            },
            "DrugDescription": "TERCONAZOLE 0.4% CREAM TAR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "51672130406"
            },
            "Directions": "USE 1 APPLICATORFUL AT BEDTIME FOR 7 NIGHTS",
            "DaysSupply": "7"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "11",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "HAZEN",
                "FirstName": "DEBORAH"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088453332"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088455550"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "555 MAIN ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-14"
            },
            "HistorySource": {
              "SourceReference": "F20035",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "03"
            },
            "DrugDescription": "METFORMIN HCL 500 MG TABLETMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378023405"
            },
            "Directions": "TAKE 1 TABLET TWICE DAILY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-15"
            },
            "HistorySource": {
              "SourceReference": "F20034",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CYCLOBENZAPRINE 10 MG TABLEMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378075110"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS AS NEEDED FOR MUSCLE SPASM",
            "DaysSupply": "2"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "3",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-16"
            },
            "HistorySource": {
              "SourceReference": "F20033",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CHLORDIAZEPOXIDE 25 MG CAP BRR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00555015902",
              "DEASchedule": "C48677"
            },
            "Directions": "TAKE 1 CAPSULE BY MOUTH 3 TIMES A DAY AS NEEDED FOR ANXIETY",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "V",
                "LastName": "CHITRE",
                "FirstName": "HARSHAD"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083636669"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083636665"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016080000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "20 WORCESTER BLVD"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-17"
            },
            "HistorySource": {
              "SourceReference": "F20012",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "02"
            },
            "DrugDescription": "BUDEPRION SR 150 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093550201"
            },
            "Directions": "TAKE 1 TABLET TWICE DAILY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-12"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "2",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "ALVE",
                "FirstName": "ANTONIO"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177876301"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6172548500"
                  }
                ]
              },
              "Address": {
                "ZipCode": "021350000",
                "State": "MA",
                "City": "BRIGHTON",
                "AddressLine1": "11 HENSHAW ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-18"
            },
            "HistorySource": {
              "SourceReference": "F20032",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "DOXEPIN 50 MG CAPSULE MYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378425001"
            },
            "Directions": "TAKE 2 CASPULES BY MOUTH AT BEDTIME AS NEEDED FOR INSOMNIA",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-09"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "6",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "E",
                "LastName": "BESSETTE",
                "FirstName": "ROBERT"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083683123"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083683122"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016040000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "20 WORCESTER CENTER BLVD"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-19"
            },
            "HistorySource": {
              "SourceReference": "F20031",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CIPROFLOXACIN HCL 500 MG TARAN",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "63304071001"
            },
            "Directions": "TAKE 1 TABLET TWICE A DAY AS NEEDED FOR DIARRHEA",
            "DaysSupply": "3"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-08"
            },
            "Refills": {
              "Value": "0",
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
                "LastName": "BLANCO",
                "FirstName": "JUNE"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088456571"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088420057"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "604 MAIN STREET"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-20"
            },
            "HistorySource": {
              "SourceReference": "F20030",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "DURADRIN CAPSULE BRR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00555036402",
              "DEASchedule": "C48677"
            },
            "Directions": "TAKE 1 TO 2 CAPSULES EVERY 4 HOURS AS NEEDED (MAX 8CAPS/24HRS)",
            "DaysSupply": "4"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-09"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "TODD",
                "FirstName": "TRACEY"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "7813764242"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "7813761771"
                  }
                ]
              },
              "Address": {
                "ZipCode": "018010000",
                "State": "MA",
                "City": "WOBURN",
                "AddressLine1": "3 BALDWIN GREEN COMMON #104"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-21"
            },
            "HistorySource": {
              "SourceReference": "F20029",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "GLYCOPYRROLATE 2 MG TABLET UTR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00677193201"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "3",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "DAMATO",
                "FirstName": "TINA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083348810"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083348830"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016050000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "279 LINCOLN STREET"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 302",
              "Identification": {
                "NCPDPID": "2221113"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-22"
            },
            "HistorySource": {
              "SourceReference": "F20028",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 302",
                "Reference": {
                  "IDValue": "2221113",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "02"
            },
            "DrugDescription": "DICLOFENAC SOD EC 50 MG TABWAT",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00591033860"
            },
            "Directions": "TAKE 1 TABLET TWICE DAILY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-29"
            },
            "Refills": {
              "Value": "47",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "473",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "TING",
                "FirstName": "DAVID"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "UNKNOWN"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "UNKNOWN"
                  }
                ]
              },
              "Address": {
                "ZipCode": "89134",
                "State": "NV",
                "City": "LAS VEGAS",
                "AddressLine1": "BOSTON DENTAL"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-23"
            },
            "HistorySource": {
              "SourceReference": "F20027",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "PERIOGARD 0.12% ORAL RINSE",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00126027116"
            },
            "Directions": [
              "& SPIT 1/2 OZ. 3 TIMES A DAY",
              "SWISH"
            ],
            "DaysSupply": "10"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-07"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "10",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "N",
                "LastName": "BLINDER",
                "FirstName": "BORIS"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5087671757"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088524646"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016050000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "580 LINCOLN ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-24"
            },
            "HistorySource": {
              "SourceReference": "F20026",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "OXYCODONE W/APAP 5/325 TAB MCK",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00406051201",
              "DEASchedule": "C48675"
            },
            "Directions": "TAKE 1 TABLET EVERY 6 TO 8 HOURS AS NEEDED",
            "DaysSupply": "2"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-25"
            },
            "HistorySource": {
              "SourceReference": "F20025",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CYCLOBENZAPRINE 10 MG TABLEMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378075110"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS AS NEEDED",
            "DaysSupply": "2"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-29"
            },
            "Refills": {
              "Value": "45",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "45",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "TEH",
                "FirstName": "CYNTHIA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "UNKNOWN"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "UNKNOWN"
                  }
                ]
              },
              "Address": {
                "ZipCode": "89128",
                "State": "NV",
                "PlaceLocationQualifier": "AD2",
                "City": "LAS VEGAS",
                "AddressLine2": "STE 110",
                "AddressLine1": "2440 PROFESSIONAL CT"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-26"
            },
            "HistorySource": {
              "SourceReference": "F20024",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "LEVOXYL 75 MCG TABLET",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "52604507501"
            },
            "Directions": "TAKE 1/2 TABLET ORALLY EVERY DAY",
            "DaysSupply": "90"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-09"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "90",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "BROWNLOW",
                "FirstName": "BETH"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "9783694280"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "9783693272"
                  }
                ]
              },
              "Address": {
                "ZipCode": "017423302",
                "State": "MA",
                "City": "CONCORD",
                "AddressLine1": "414 POWDERMILL RD"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-27"
            },
            "HistorySource": {
              "SourceReference": "F20023",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "ADDERALL 15 MG TABLET SHI",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "54092037501",
              "DEASchedule": "C48675"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH 3 TIMES A DAY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-08"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-28"
            },
            "HistorySource": {
              "SourceReference": "F20022",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "FLEXERIL 5 MG TABLET MCN",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "50580028010"
            },
            "Directions": "TAKE 1 TABLET EVERY 8 HOURS AS NEEDED",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "2",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-29"
            },
            "HistorySource": {
              "SourceReference": "F20021",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "DOXEPIN 50 MG CAPSULE MYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378425001"
            },
            "Directions": "TAKE 1 TO 2 CAPSULES BY MOUTH AT BEDTIME AS NEEDED",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-28"
            },
            "Refills": {
              "Value": "15",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "5",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "SEGGEV",
                "FirstName": "JORAM"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "UNKNOWN"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "UNKNOWN"
                  }
                ]
              },
              "Address": {
                "ZipCode": "89128",
                "State": "NV",
                "City": "LAS VEGAS",
                "AddressLine1": "3150 N. TENAYA WY. #515"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-30"
            },
            "HistorySource": {
              "SourceReference": "F20020",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "03"
            },
            "DrugDescription": "PATANOL 0.1% EYE DROPS",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00065027105"
            },
            "Directions": "INSTILL 2 DROPS EVERY 12 HOURS IN TO AFFECTED EYE(S)",
            "DaysSupply": "10"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-12"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "3",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "ALVE",
                "FirstName": "ANTONIO"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177876301"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6172548500"
                  }
                ]
              },
              "Address": {
                "ZipCode": "021350000",
                "State": "MA",
                "City": "BRIGHTON",
                "AddressLine1": "11 HENSHAW ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-08-31"
            },
            "HistorySource": {
              "SourceReference": "F20019",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CYCLOBENZAPRINE 10 MG TABLEMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378075110"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS AS NEEDED",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-09"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "3",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "TODD",
                "FirstName": "TRACEY"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "7813764242"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "7813761771"
                  }
                ]
              },
              "Address": {
                "ZipCode": "018010000",
                "State": "MA",
                "City": "WOBURN",
                "AddressLine1": "3 BALDWIN GREEN COMMON #104"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-01"
            },
            "HistorySource": {
              "SourceReference": "F20018",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "CHLORDIAZEPOXIDE 25 MG CAP BRR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00555015902",
              "DEASchedule": "C48677"
            },
            "Directions": "TAKE 1 CAPSULE BY MOUTH 3 TIMES A DAY",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-28"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "5",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "HOUCHIN",
                "FirstName": "KENNETH"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "UNKNOWN"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "UNKNOWN"
                  }
                ]
              },
              "Address": {
                "ZipCode": "89117",
                "State": "NV",
                "PlaceLocationQualifier": "AD2",
                "City": "LAS VEGAS",
                "AddressLine2": "7135 W. SAHARA AVE.STE 100"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-02"
            },
            "HistorySource": {
              "SourceReference": "F20017",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "TIMOLOL 0.5% GEL/SOLUTION",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "61314022505"
            },
            "Directions": "INSTILL 1 DROP IN EACH EYE EVERY DAY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "6",
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
                "LastName": "WILSON",
                "FirstName": "REBECCA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083348810"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083348830"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016050000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "279 LINCOLN ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 302",
              "Identification": {
                "NCPDPID": "2221113"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-03"
            },
            "HistorySource": {
              "SourceReference": "F20016",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 302",
                "Reference": {
                  "IDValue": "2221113",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "05"
            },
            "DrugDescription": "PROTONIX 40 MG TABLET EC WYE",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00008084181"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY DAY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "1",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "90",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "A",
                "LastName": "FAHEY",
                "FirstName": "DAVID"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088420989"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088425594"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "26 JULIO DR"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-04"
            },
            "HistorySource": {
              "SourceReference": "F20015",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "01"
            },
            "DrugDescription": "MECLIZINE 12.5 MG TABLET PAR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "49884003401"
            },
            "Directions": "TAKE 1 TABLET 3 TIMES A DAY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-07"
            },
            "Refills": {
              "Value": "0",
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
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-05"
            },
            "HistorySource": {
              "SourceReference": "F20014",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "PRECARE PRENATAL CAPLET TRX",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "64011011819"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY DAY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-06"
            },
            "HistorySource": {
              "SourceReference": "F20013",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "NABUMETONE 750 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093101601"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS AS NEEDED",
            "DaysSupply": "2"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "V",
                "LastName": "CHITRE",
                "FirstName": "HARSHAD"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083636669"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083636665"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016080000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "20 WORCESTER BLVD"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-07"
            },
            "HistorySource": {
              "SourceReference": "F20012",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "01"
            },
            "DrugDescription": "BUDEPRION SR 150 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093550201"
            },
            "Directions": "TAKE 1 TABLET TWICE DAILY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "1",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-08"
            },
            "HistorySource": {
              "SourceReference": "F20011",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "TIZANIDINE HCL 4 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093516051"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH AT BEDTIME AS NEEDED FOR MUSCLE SPASM",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-25"
            },
            "Refills": {
              "Value": "37",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "378",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "SCHWARTZ",
                "FirstName": "JERRY"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "UNKNOWN"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "UNKNOWN"
                  }
                ]
              },
              "Address": {
                "ZipCode": "89119",
                "State": "NV",
                "City": "LAS VEGAS",
                "AddressLine1": "2110 E FLAMINGO"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-09"
            },
            "HistorySource": {
              "SourceReference": "F20010",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "05"
            },
            "DrugDescription": "CHOLESTYRAMINE POWDER",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00185094097"
            },
            "Directions": "1 TO 2 SCOOPS PER DAY FOR DIARRHEA",
            "DaysSupply": "21"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "V",
                "LastName": "CHITRE",
                "FirstName": "HARSHAD"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083636669"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083636665"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016080000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "20 WORCESTER BLVD"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-10"
            },
            "HistorySource": {
              "SourceReference": "F20009",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "05"
            },
            "DrugDescription": "BUDEPRION SR 150 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093550201"
            },
            "Directions": "TAKE 1 TABLET TWICE DAILY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "I",
                "LastName": "STARR",
                "FirstName": "JEROME"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083345331"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5087541707"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016050000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "67 BELMONT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-11"
            },
            "HistorySource": {
              "SourceReference": "F20008",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "01"
            },
            "DrugDescription": "METFORMIN HCL 500 MG TABLETMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378023405"
            },
            "Directions": "TAKE 1 TABLET TWICE DAILY WITH MEALS",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-29"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "5",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "EELLS",
                "FirstName": "JAMES"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "UNKNOWN"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "UNKNOWN"
                  }
                ]
              },
              "Address": {
                "ZipCode": "89102",
                "State": "NV",
                "City": "LAS VEGAS",
                "AddressLine1": "UMC"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-12"
            },
            "HistorySource": {
              "SourceReference": "F20007",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "LEVAQUIN 750 MG TABLET",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00045153020"
            },
            "Directions": "TAKE 1 TABLET ORALLY EVERY DAY",
            "DaysSupply": "5"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-08"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-13"
            },
            "HistorySource": {
              "SourceReference": "F20006",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "NABUMETONE 750 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093101601"
            },
            "Directions": "TAKE 1 TABLET EVERY 8 HOURS AS NEEDED FOR MUSCLE ACHES",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-09"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "TODD",
                "FirstName": "TRACEY"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "7813764242"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "7813761771"
                  }
                ]
              },
              "Address": {
                "ZipCode": "018010000",
                "State": "MA",
                "City": "WOBURN",
                "AddressLine1": "3 BALDWIN GREEN COMMON #104"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-14"
            },
            "HistorySource": {
              "SourceReference": "F20005",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "NABUMETONE 750 MG TABLET TEV",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00093101601"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY 8 HOURS",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-08"
            },
            "Refills": {
              "Value": "0",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "4",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "KISHORE",
                "FirstName": "PUNYAMURTULA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "6177340994"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "6173836405"
                  }
                ]
              },
              "Address": {
                "ZipCode": "024451401",
                "State": "MA",
                "City": "BROOKLINE",
                "AddressLine1": "11 KENT ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 137",
              "Identification": {
                "NCPDPID": "2222242"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-15"
            },
            "HistorySource": {
              "SourceReference": "F20004",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 137",
                "Reference": {
                  "IDValue": "2222242",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "HYDROXYZINE PAM 50 MG CAP BRR",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00555030202"
            },
            "Directions": "TAKE 1 CAPSULE 3 TIMES A DAY FOR NAUSEA/ANXIETY",
            "DaysSupply": "1"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "6",
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
                "LastName": "WILSON",
                "FirstName": "REBECCA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083348810"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083348830"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016050000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "279 LINCOLN ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 302",
              "Identification": {
                "NCPDPID": "2221113"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-16"
            },
            "HistorySource": {
              "SourceReference": "F20003",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 302",
                "Reference": {
                  "IDValue": "2221113",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "05"
            },
            "DrugDescription": "ALLOPURINOL 300 MG TABLET MYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378018105"
            },
            "Directions": "TAKE 1 TABLET BY MOUTH EVERY DAY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-06"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "28",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "O",
                "LastName": "FOURNIER",
                "FirstName": "PHILLIP"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083342040"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088562818"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016550002",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "U MASS MED CTR"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-17"
            },
            "HistorySource": {
              "SourceReference": "F20002",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "00"
            },
            "DrugDescription": "LEVORA-28 TABLET",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "52544027928"
            },
            "Directions": "TAKE 1 TABLET EVERY DAY",
            "DaysSupply": "28"
          },
          {
            "WrittenDate": {
              "Date": "2016-07-04"
            },
            "Refills": {
              "Value": "3",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "DAMATO",
                "FirstName": "TINA"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5083348810"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5083348830"
                  }
                ]
              },
              "Address": {
                "ZipCode": "016050000",
                "State": "MA",
                "City": "WORCESTER",
                "AddressLine1": "279 LINCOLN STREET"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 302",
              "Identification": {
                "NCPDPID": "2221113"
              }
            },
            "LastFillDate": {
              "Date": "2016-09-18"
            },
            "HistorySource": {
              "SourceReference": "F20001",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 302",
                "Reference": {
                  "IDValue": "2221113",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "02"
            },
            "DrugDescription": "MISOPROSTOL 200 MCG TABLET",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00172443149"
            },
            "Directions": "TAKE 1 TABLET TWICE A DAY WITH DICLOFENAC",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "16",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "A",
                "LastName": "FAHEY",
                "FirstName": "DAVID"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088420989"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088425594"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "26 JULIO DR"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2017-04-05"
            },
            "HistorySource": {
              "SourceReference": "F20095",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "04"
            },
            "DrugDescription": "FLONASE 0.05% NASAL SPRAY",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00173045301"
            },
            "Directions": "USE AS DIRECTED",
            "DaysSupply": "25"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "16",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "A",
                "LastName": "FAHEY",
                "FirstName": "DAVID"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088420989"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088425594"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "26 JULIO DR"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2017-05-06"
            },
            "HistorySource": {
              "SourceReference": "F20095",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "04"
            },
            "DrugDescription": "FLONASE 0.05% NASAL SPRAY",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00173045301"
            },
            "Directions": "USE AS DIRECTED",
            "DaysSupply": "25"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-11"
            },
            "Refills": {
              "Value": "11",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "60",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "LastName": "HAZEN",
                "FirstName": "DEBORAH"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088453332"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088455550"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "555 MAIN ST"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2017-06-07"
            },
            "HistorySource": {
              "SourceReference": "F20096",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "03"
            },
            "DrugDescription": "METFORMIN HCL 500 MG TABLETMYL",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00378023405"
            },
            "Directions": "TAKE 1 TABLET TWICE DAILY",
            "DaysSupply": "30"
          },
          {
            "WrittenDate": {
              "Date": "2016-08-10"
            },
            "Refills": {
              "Value": "5",
              "Qualifier": "R"
            },
            "Quantity": {
              "Value": "16",
              "UnitSourceCode": "AC",
              "PotencyUnitCode": "C38046",
              "CodeListQualifier": "87"
            },
            "Prescriber": {
              "Name": {
                "MiddleName": "A",
                "LastName": "FAHEY",
                "FirstName": "DAVID"
              },
              "CommunicationNumbers": {
                "Communication": [
                  {
                    "Qualifier": "FX",
                    "Number": "5088420989"
                  },
                  {
                    "Qualifier": "TE",
                    "Number": "5088425594"
                  }
                ]
              },
              "Address": {
                "ZipCode": "015450000",
                "State": "MA",
                "City": "SHREWSBURY",
                "AddressLine1": "26 JULIO DR"
              }
            },
            "Pharmacy": {
              "StoreName": "CVS Pharmacy # 8",
              "Identification": {
                "NCPDPID": "2201515"
              }
            },
            "LastFillDate": {
              "Date": "2017-06-08"
            },
            "HistorySource": {
              "SourceReference": "F20095",
              "Source": {
                "SourceQualifier": "P2",
                "SourceDescription": "CVS Pharmacy # 8",
                "Reference": {
                  "IDValue": "2201515",
                  "IDQualifier": "D3"
                }
              },
              "FillNumber": "04"
            },
            "DrugDescription": "Flonase 50 mcg/actuation nasal spray,suspension",
            "DrugCoded": {
              "ProductCodeQualifier": "ND",
              "ProductCode": "00173045301"
            },
            "Directions": "USE AS DIRECTED",
            "DaysSupply": "25"
          }
        ],
        "BenefitsCoordination": {
          "ExpirationDate": {
            "Date": "2017-06-16"
          },
          "EffectiveDate": {
            "Date": "2015-06-09"
          },
          "Consent": "Y"
        }
      }
    }
  }
}
];

class MedicationHistoryApi {
  static fetchMedicationHistoryRecords(memberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject('Simulation random failure');
        }
        resolve(Object.assign({}, medHistory[0], memberId));
      }, 1000);
    });
  }
}

export default MedicationHistoryApi;
