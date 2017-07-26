class DoseForm {
  constructor(arg = {}) {
    Object.assign(this, {
      dose_form_abbr:        arg.dose_form_abbr,
      dose_form_code:        arg.dose_form_code,
      dose_form_description: arg.dose_form_description
    });
  }
}

export default DoseForm;
