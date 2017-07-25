// 20170714120315
// http://localhost:4000/api/v1/formulary?lookup[patient][first_name]=CHENIN%20BLANC&lookup[patient][last_name]=AUBAINE&lookup[patient][gender]=F&lookup[patient][street_address]=927%20OFFICIONADO%20BLVD&lookup[patient][city]=MINNEAPOLIS&lookup[patient][zipcode]=55419&lookup[patient][state]=MN&lookup[patient][date_of_birth]=1954-09-01&lookup[patient][patient_id]=10&lookup[drug_name]=Crestor&lookup[dose_form]=tablet&lookup[drug_strength]=20+mg&lookup[provider]=&lookup[request_source]=teladoc_tas

const result = {
  "payers": [
    {
      "preferred_ndcs": [

      ],
      "plan": {
        "formulary": {
          "formulary_id": "FSL101",
          "coverage_id": null,
          "copay_id": null,
          "alternative_id": "ALT101"
        },
        "account": {
          "plan_number": "001",
          "plan_name": "25",
          "pbm_name": "PBMF",
          "pbm_id": "T00000000021633",
          "member_id": "ZZQ-88-10011-245",
          "group_number": "D000000",
          "group_name": "HONEYWELL"
        }
      },
      "formulary_status_text": "Non Formulary",
      "formulary_status": "1",
      "errors": [

      ],
      "displayable_coverage_details": [

      ],
      "displayable_alternatives": [
        {
          "record_type": "ADT",
          "preference_level": 5,
          "ndc": "00093057606",
          "drug_details": {
            "route_name": "oral",
            "route_code": 2426,
            "route_abbr": "PO",
            "repackaged": false,
            "product_strength_code": 3169,
            "otc_status": "prescription",
            "ndc_formatted": "00093-0576-06",
            "ndc": "00093057606",
            "main_multum_drug_code": 1614,
            "gbo": "generic",
            "drug_strength": "20 mg",
            "drug_name": "Lovastatin",
            "dose_form_code": 2475,
            "dose_form_abbr": "TAB",
            "dose_form": "tablet",
            "brand_code": 42628
          }
        },
        {
          "record_type": "ADT",
          "preference_level": 4,
          "ndc": "00071015523",
          "drug_details": {
            "route_name": "oral",
            "route_code": 2426,
            "route_abbr": "PO",
            "repackaged": false,
            "product_strength_code": 2814,
            "otc_status": "prescription",
            "ndc_formatted": "00071-0155-23",
            "ndc": "00071015523",
            "main_multum_drug_code": 5362,
            "gbo": "brand",
            "drug_strength": "10 mg",
            "drug_name": "Lipitor",
            "dose_form_code": 2475,
            "dose_form_abbr": "TAB",
            "dose_form": "tablet",
            "brand_code": 6419
          }
        }
      ]
    }
  ],
  "drug": {
    "product_strength": {
      "product_strength_description": "20 mg",
      "product_strength_code": 3169
    },
    "product_route": {
      "route_description": "oral",
      "route_code": 2426,
      "route_abbr": "PO"
    },
    "otc_prescription": "prescription",
    "obsolete": false,
    "ndc": {
      "unit_dose_code": "U",
      "source_id": 157,
      "repackaged": false,
      "outer_package_size": 0.0,
      "otc_status": "prescription",
      "orange_book_id": 7075,
      "obsolete_date": null,
      "ndc_formatted": "00310-0752-39",
      "ndc_code": "00310075239",
      "main_multum_drug_code": 8898,
      "inner_package_size": 100.0,
      "inner_package_desc_code": 0,
      "inner_package_desc": null,
      "gbo": "brand",
      "brand_code": 46321
    },
    "multum_drug_id": {
      "pregnancy_abbr": "X",
      "max_therapeutic_duplication": 1,
      "is_single_ingredient": false,
      "half_life": 19.0,
      "empirically": "No",
      "drug_synonym_id": 46317,
      "drug_id": "d04851"
    },
    "mmdc": {
      "product_strength_code": 3169,
      "principal_route_code": 2426,
      "main_multum_drug_code": 8898,
      "j_code_description": "",
      "j_code": "",
      "drug_id": "d04851",
      "dose_form_code": 2475,
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
          "strength_num_amount": 20.0,
          "strength_denom_unit": {
            "unit_id": 684,
            "unit_description": "each",
            "unit_abbr": "ea"
          },
          "strength_denom_amount": 1.0,
          "ingredient_strength_code": 6289
        },
        "active_ingredient": {
          "active_ingredient_code": 17536,
          "active_ingredient": "rosuvastatin calcium"
        }
      }
    ],
    "generic_equivalent": {
      "route_name": "oral",
      "route_code": 2426,
      "route_abbr": "PO",
      "repackaged": false,
      "product_strength_code": 3169,
      "otc_status": "prescription",
      "ndc_formatted": "00093-7572-98",
      "ndc": "00093757298",
      "main_multum_drug_code": 8898,
      "gbo": "generic",
      "drug_strength": "20 mg",
      "drug_name": "Rosuvastatin Calcium",
      "dose_form_code": 2475,
      "dose_form_abbr": "TAB",
      "dose_form": "tablet",
      "brand_code": 107656
    },
    "equivalent_ndcs": [
      "00310075239",
      "00310075290",
      "00310075295",
      "49999099290",
      "54569567200",
      "54569567202",
      "54868508500",
      "54868508501",
      "54868508502",
      "55289093230"
    ],
    "drug_strength": "20 mg",
    "drug_name": {
      "is_obsolete": false,
      "drug_synonym_id": 46321,
      "drug_name": "Crestor"
    },
    "drug_category": {
      "multum_category_id": 173,
      "category_name": "HMG-CoA reductase inhibitors (statins)"
    },
    "dose_form": {
      "dose_form_description": "tablet",
      "dose_form_code": 2475,
      "dose_form_abbr": "TAB"
    },
    "brand_generic": "brand"
  }
};

class DrugSearchApi {
  static fetchDrugByName(query) {
    console.log(query)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, result));
      }, 10);
    });
  }
}

export default DrugSearchApi;
