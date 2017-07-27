import expect from 'expect';
import { GenericDrug } from '../../src/lib/FormularyDrug';

describe('GenericDrug', () => {
  const props = {
    brand_code: 42628,
    dose_form: 'tablet',
    dose_form_abbr: 'TAB',
    dose_form_code: 2475,
    drug_name: 'Lovastatin',
    drug_strength: '20 mg',
    gbo: 'generic',
    main_multum_drug_code: 1614,
    ndc: '00093057606',
    ndc_formatted: '00093-0576-06',
    otc_status: 'prescription',
    product_strength_code: 3169,
    repackaged: false,
    route_abbr: 'PO',
    route_code: 2426,
    route_name: 'oral'
  };

  it('returns a GenericDrug Object', () => {
    const subject = new GenericDrug(props);

    expect(subject).toBeA(GenericDrug);
  });
});
