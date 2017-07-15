// http://localhost:4000/api/v1/formulary/00071080524?lookup[patient][first_name]=BRUCE&lookup[patient][last_name]=WAYNE&lookup[patient][gender]=M&lookup[patient][street_address]=1174%20BACON%20STREET%20BLVD&lookup[patient][city]=MINNEAPOLIS&lookup[patient][zipcode]=55419&lookup[patient][state]=MN&lookup[patient][date_of_birth]=1946-02-06&lookup[patient][patient_id]=7&lookup[provider]=&lookup[request_source]=teladoc_tas

const result = {
  "payers": [
    {
      "plan": {
        "formulary": {
          "formulary_id": null,
          "coverage_id": null,
          "copay_id": null,
          "alternative_id": null
        },
        "account": {
          "plan_number": "",
          "plan_name": "",
          "pbm_name": "PBMF",
          "pbm_id": "T00000000021633",
          "member_id": "ZZQ 88-1  0011-248",
          "group_number": "F000000",
          "group_name": "GROUPF"
        }
      },
      "formulary_status_text": "Unknown",
      "formulary_status": "U",
      "errors": [

      ],
      "displayable_coverage_details": [

      ]
    }
  ],
  "drug": {
    "product_strength": {
      "product_strength_description": "300 mg",
      "product_strength_code": 3386
    },
    "product_route": {
      "route_description": "oral",
      "route_code": 2426,
      "route_abbr": "PO"
    },
    "otc_prescription": "prescription",
    "obsolete": false,
    "ndc": {
      "unit_dose_code": "N",
      "source_id": 112,
      "repackaged": false,
      "outer_package_size": 0.0,
      "otc_status": "prescription",
      "orange_book_id": 7075,
      "obsolete_date": null,
      "ndc_formatted": "00071-0805-24",
      "ndc_code": "00071080524",
      "main_multum_drug_code": 1257,
      "inner_package_size": 100.0,
      "inner_package_desc_code": 0,
      "inner_package_desc": null,
      "gbo": "brand",
      "brand_code": 2269
    },
    "multum_drug_id": {
      "pregnancy_abbr": "C",
      "max_therapeutic_duplication": 1,
      "is_single_ingredient": false,
      "half_life": 6.0,
      "empirically": "No",
      "drug_synonym_id": 12968,
      "drug_id": "d03182"
    },
    "mmdc": {
      "product_strength_code": 3386,
      "principal_route_code": 2426,
      "main_multum_drug_code": 1257,
      "j_code_description": "",
      "j_code": "",
      "drug_id": "d03182",
      "dose_form_code": 2440,
      "csa_schedule": "0"
    },
    "med_supply": false,
    "ingredients": [
      {
        "ingredient_strength": {
          "strength_num_unit": {
            "unit_id": 678,
            "unit_description": "milligram(s)",
            "unit_abbr": "mg"
          },
          "strength_num_amount": 300.0,
          "strength_denom_unit": {
            "unit_id": 684,
            "unit_description": "each",
            "unit_abbr": "ea"
          },
          "strength_denom_amount": 1.0,
          "ingredient_strength_code": 6504
        },
        "active_ingredient": {
          "active_ingredient_code": 4770,
          "active_ingredient": "gabapentin"
        }
      }
    ],
    "generic_equivalent": {
      "route_name": "oral",
      "route_code": 2426,
      "route_abbr": "PO",
      "repackaged": false,
      "product_strength_code": 3386,
      "otc_status": "prescription",
      "ndc_formatted": "00143-9993-01",
      "ndc": "00143999301",
      "main_multum_drug_code": 1257,
      "gbo": "generic",
      "drug_strength": "300 mg",
      "drug_name": "Gabapentin",
      "dose_form_code": 2440,
      "dose_form_abbr": "CAP",
      "dose_form": "capsule",
      "brand_code": 60712
    },
    "equivalent_ndcs": [
      "00071080524",
      "00071080540",
      "00247183420",
      "00247183430",
      "49999025700",
      "52959043400",
      "52959043402",
      "52959043420",
      "52959043430",
      "52959043435",
      "52959043445",
      "52959043460",
      "52959043490",
      "54569457701",
      "55289057010",
      "55289057030",
      "55289057060",
      "63874062901",
      "63874062904",
      "63874062910",
      "63874062914",
      "63874062918",
      "63874062921",
      "63874062928",
      "63874062930",
      "63874062940",
      "63874062950",
      "63874062960",
      "63874062990",
      "67544009553"
    ],
    "drug_strength": "300 mg",
    "drug_name": {
      "is_obsolete": false,
      "drug_synonym_id": 2269,
      "drug_name": "Neurontin"
    },
    "drug_category": {
      "multum_category_id": 347,
      "category_name": "gamma-aminobutyric acid analogs"
    },
    "dose_form": {
      "dose_form_description": "capsule",
      "dose_form_code": 2440,
      "dose_form_abbr": "CAP"
    },
    "brand_generic": "brand"
  }
};
