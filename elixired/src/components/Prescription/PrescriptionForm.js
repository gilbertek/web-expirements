import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dosage from './Dosage';

class PrescriptionForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper'>
        <form className='prescription-form'>
          <h3>New Prescription</h3>

          <ul className='stacked-field'>
            <li>
              <label htmlFor='drugField'>Drug</label>
              <input type='text'
                name='drugField'
                placeholder='Lisinopril'
                className='field-long' />
            </li>
            <li>
              <label htmlFor='myQuickRxField'>My Quick Rx</label>
              <select id='myQuickRxField'>
                <option value='1'>Some Drug</option>
              </select>
            </li>
          </ul>

          <div className='group-field'>
            <div className='substitution-wrapper'>
              <input type='checkbox'
                id='allowSubstitutionField' />
              <label className='label-inline'
                htmlFor='allowSubstitutionField'>
                Allow Substitution
              </label>
            </div>
            <a href='#'>Manual Entry</a>
          </div>

          <div>
            <fieldset>
              <legend>Directions</legend>

              <label><span>Take</span>
              <input type='text'
                className='quantity-field'
                placeholder='Qty'
                name='quantityField'  />
              <select className='unit-field'
                name='unitField'>
                <option value='0'>Unit</option>
              </select>
              <select className='direction-field'
                name='dorectionField'>
                <option value='0'>Directions</option>
                <option value='1'>1 Every 2 minute</option>
              </select>
              <input type='text'
                className='free-text-field'
                name='freeTextField'  />
            </label>
          </fieldset>

          <div className='form-field'>
            <a href='#'
              className='form-field--right'>
              Reset</a>
          </div>
        </div>

        <br />
        <br />

        <div className='inline-field'>
          <div className='stacked-field'>
            <label htmlFor='totalQtyField'>Total Qty</label>
            <input type='text'
              name='totalQtyField'
              placeholder='Lisinopril' />
          </div>

          <div>&nbsp;</div>
          <div className='stacked-field'>
            <label htmlFor='dosageField'>&nbsp;</label>
            <select className='dosage-field'
              name='dosageField'>
              <option value='0'>Applicator</option>
              <option value='1'>Intra</option>
            </select>
          </div>
        </div>

        <br />
        <br />

        <div className='inline-field'>
          <label className='full-width'><span>Refills</span>

            <input type='text'
              className='refills-qty-field'
              placeholder='Qty'
              name='refillsQtyField'  />

            <select className='refills-route-field'
              name='unitField'>
              <option value='0'>Unit</option>
            </select>
          </label>
        </div>

        <ul className='stacked-field'>
          <li>
            <label htmlFor='pharmacyNotes'>Note for Pharmacy</label>
            <textarea id='pharmacyNotes'
              placeholder='Notes...' />
          </li>

          <li>
            <input type='checkbox'
              id='confirmField' />
            <label className='label-inline'
              htmlFor='confirmField'>
              I confirm that the above prescription(s) and instructions are corrent.
            </label>
          </li>

          <li>
            <input type='checkbox'
              id='addToQuickRxField'/>
            <label className='label-inline'
              htmlFor='addToQuickRxField'>
              Add to My QuickRx
            </label>
          </li>
        </ul>

        <div className='group-field action-field'>
          <input className='button-primary'
            type='submit'
            value='Start Over' />
          <input className='button-primary'
            type='submit'
            value='Submit Prescription' />
        </div>



        {/* <div className='form-field'> */}
          {/*   <strong>Drug and Drug Form</strong> */}
          {/*   <span>Lisinopril oral Tablet</span> */}
          {/* </div> */}
        {/*  */}
        {/* <strong>Drug Information</strong> */}
        {/* <table> */}
          {/*   <thead> */}
            {/*     <tr> */}
              {/*       <th>Generic/Brand</th> */}
              {/*       <th>OTC/Prescription</th> */}
              {/*       <th>Medical Supply?</th> */}
              {/*     </tr> */}
            {/*   </thead> */}
          {/*   <tbody> */}
            {/*     <tr> */}
              {/*       <td>Generic</td> */}
              {/*       <td>Prescription</td> */}
              {/*       <td>False</td> */}
              {/*     </tr> */}
            {/*   </tbody> */}
          {/* </table> */}
        {/*  */}
        {/* <span> */}
          {/*   Medications added electronically can not */}
          {/*   be changed or cancelled once submitted. */}
          {/* </span> */}
      </form>

      <Dosage renalDose={Object.assign({}, { content: `Lorem` })} />
    </div>
    );
  }
}

PrescriptionForm.propTypes = {
  className: PropTypes.string,
};

export default PrescriptionForm;
