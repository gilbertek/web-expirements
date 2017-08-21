import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { GenericDrug } from '../../../src/lib/FormularyDrug';
import AlternateMedication from '../../../src/components/Formulary/AlternateMedication';

describe('<AlternateMedication /> Component', () => {
  const data = {
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
  const medication = new GenericDrug(data);

  it('renders the medication name', () => {
    const wrapper = shallow(<AlternateMedication medication={medication} />);

    expect(wrapper.text()).toMatch(medication.getName());
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('tr').length).toBe(1);
  });
});
