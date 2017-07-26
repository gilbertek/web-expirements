class DoseForm {
  constructor(arg = {}) {
    Object.assign(this, {
      dose_form_abbr:        arg.dose_form_abbr,
      dose_form_code:        arg.dose_form_code,
      dose_form_description: arg.dose_form_description
    });
  }
}

class DrugCategory {
  constructor(arg = {}) {
    Object.assign(this, {
      category_name:      arg.category_name,
      multum_category_id: arg.multum_category_id
    });
  }
}

class Drug {
  constructor(arg = {}) {
    Object.assign(this, {
      drug_name:       arg.drug_name,
      drug_synonym_id: arg.drug_synonym_id,
      is_obsolete:     arg.is_obsolete
    });
  }
}

class GenericDrug {
  constructor(arg = {}) {
    Object.assign(this, {
      brand_code:            arg.brand_code,
      dose_form:             arg.dose_form,
      dose_form_abbr:        arg.dose_form_abbr,
      dose_form_code:        arg.dose_form_code,
      drug_name:             arg.drug_name,
      drug_strength:         arg.drug_strength,
      gbo:                   arg.gbo,
      main_multum_drug_code: arg.main_multum_drug_code,
      ndc:                   arg.ndc,
      ndc_formatted:         arg.ndc_formatted,
      otc_status:            arg.otc_status,
      product_strength_code: arg.product_strength_code,
      repackaged:            arg.repackaged,
      route_abbr:            arg.route_abbr,
      route_code:            arg.route_code,
      route_name:            arg.route_name,
    });
  }
}

class MMDC {
  constructor(arg = {}) {
    Object.assign(this, {
      csa_schedule:          arg.csa_schedule,
      dose_form_code:        arg.dose_form_code,
      drug_id:               arg.drug_id,
      j_code:                arg.j_code,
      j_code_description:    arg.j_code_description,
      main_multum_drug_code: arg.main_multum_drug_code,
      principal_route_code:  arg.principal_route_code,
      product_strength_code: arg.product_strength_code
    });
  }
}

class MultumDrug {
  constructor(arg = {}) {
    Object.assign(this, {
      drug_id:                     arg.drug_id,
      drug_synonym_id:             arg.drug_synonym_id,
      empirically:                 arg.empirically,
      half_life:                   arg.half_life,
      is_single_ingredient:        arg.is_single_ingredient,
      max_therapeutic_duplication: arg.max_therapeutic_duplication,
      pregnancy_abbr:              arg.pregnancy_abbr
    });
  }
}

class NDC {
  constructor(arg = {}) {
    Object.assign(this, {
      brand_code:              arg.brand_code,
      gbo:                     arg.gbo,
      inner_package_desc:      arg.inner_package_desc,
      inner_package_desc_code: arg.inner_package_desc_code,
      inner_package_size:      arg.inner_package_size,
      main_multum_drug_code:   arg.main_multum_drug_code,
      ndc_code:                arg.ndc_code,
      ndc_formatted:           arg.ndc_formatted,
      obsolete_date:           arg.obsolete_date,
      orange_book_id:          arg.orange_book_id,
      otc_status:              arg.otc_status,
      outer_package_size:      arg.outer_package_size,
      repackaged:              arg.repackaged,
      source_id:               arg.source_id,
      unit_dose_code:          arg.unit_dose_code
    });
  }
}

class ProductRoute {
  constructor(arg = {}) {
    Object.assign(this, {
      route_abbr:        arg.route_abbr,
      route_code:        arg.route_code,
      route_description: arg.route_description
    });
  }
}

class ProductStrength {
  constructor(arg = {}) {
    Object.assign(this, {
      product_strength_code:        arg.product_strength_code,
      product_strength_description: arg.product_strength_description
    });
  }
}

class FormularyDrug {
  constructor(data = {}) {
    Object.assign(this, {
      brand_generic:      data.brand_generic,
      dose_form:          new DoseForm(data.dose_form),
      drug_category:      new DrugCategory(data.drug_category),
      drug_strength:      data.drug_strength,
      drug_name:          new Drug(data.drug_name),
      equivalent_ndcs:    data.equivalent_ndcs,
      generic_equivalent: new GenericDrug(data.generic_equivalent),
      ingredients:        data.ingredients,
      med_supply:         data.med_supply,
      mmdc:               new MMDC(data.mmdc),
      multum_drug:        new MultumDrug(data.multum_drug_id),
      ndc:                new NDC(data.ndc),
      obsolete:           data.obsolete,
      otc_prescription:   data.otc_prescription,
      product_route:      new ProductRoute(data.product_route),
      product_strength:   new ProductStrength(data.product_strength)
    });
  }
}

export default FormularyDrug;
