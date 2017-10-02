import 'medication_service_ui/dist/styles.css';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Video from 'app/Video/components/video';
import VideoTestComponent from 'app/Video/components/VideoTest';
import AnalyteLabPrescription from 'app/AnalyteLabPrescription';
import Conference from 'app/Conference/components';
import PersonalHealthRecords from './PersonalHealthRecords/index';
import ClinicalMedication from './ClinicalMedication';
import MedicationHistory from './MedicationHistory';
import ModalWrapper from 'app/Prescription/components/ModalWrapper';
import PrescriptionModalManager from 'app/Prescription/components/PrescriptionModalManager';
import PrescriptionModal from 'app/Prescription/components/PrescriptionModal';
import Prescription from './Prescription';
import ProviderOrder from './ProviderOrder';
import highcharts from 'highcharts';
import store from './lib/store';
import '../../node_modules/babel-polyfill';
import '../../node_modules/foundation-sites/dist/foundation';
// TODO: This has jQuery dependency.
// Using it temporary until we can use Mike's version
import '../../node_modules/toastr/build/toastr.css';
import { fetchQuickRxByProvider } from './Prescription/actions';

require('moment-timezone');

window.moment = moment;
window.Highcharts = highcharts;

injectTapEventPlugin();

const render = (ComponentClass, renderTarget, props, foundationize) => {
  if ($(renderTarget).length !== 0) {
    ReactDOM.render(
      <Provider store={store}>
        <ComponentClass {...props} />
      </Provider>,
      window.document.querySelector(renderTarget)
    );

    if (foundationize === true) $('html').addClass('foundation-style');
    $(renderTarget).addClass('react');
  }
};

$(() => {
  if (window && store) {
    window.dispatch = store.dispatch;
  }

  const foundationize = $('body').data('foundationize')
      , videoParams   = $('#react_video_widget_container').data('videoParams')
      , conferenceElement = window.document.getElementById('conference');

  if (window.document.contains(conferenceElement)) {
    const consultationId = conferenceElement.getAttribute('data-consultation-id');
    render(Conference, '#conference', { consultationId }, false);
  }

  render(Video, '#react_video_widget_container',
    {
      videoParams
    },
    foundationize);

  render(VideoTestComponent, '#video-test-container');

  if (document.getElementById('personal_health_records')) {
    const memberId = $('#personal_health_documents').data('memberId');
    render(PersonalHealthRecords, '#personal_health_documents', { memberId }, false);
  }

  if (document.getElementById('td-medication-history')) {
    const consultationId             = $('.module#consult').data('consultation_id');
    const memberId                   = $('#td-medication-history').data('memberId');
    const memberDoB                  = $('#td-medication-history').data('memberDob');
    const erxPatientId               = $('#td-medication-history').data('erxPatientId');
    const providerCanRx              = $('#td-medication-history').data('providerCanPrescribe');
    const providerDEA                = $('#td-medication-history').data('providerDea');
    const providerNPI                = $('#td-medication-history').data('providerNpi');
    const newMedActiveConsult        = $('#new-medication-form').data('newMedActiveConsult');
    const newMedicationMhdQuestionId = $('#new-medication-form').data('newMedMhdQuestionId');
    const newMedicationMhdAnswerId   = $('#new-medication-form').data('newMedMhdAnswerIds');
    const authorizationToken         = $('meta[name=csrf-token]').attr('content');
    const {
      license,
      expirationDate,
      state,
      validForErx,
      erxUserId,
      erxUserToken
    } = document.getElementById('prescription-wrapper').dataset;
    const remedyApiStatus            = window.useRemedyApi;
    const memberParams               = { consultationId, memberId, memberDoB, erxPatientId };
    const providerParams             = {
      consultationId,
      providerDEA,
      providerNPI,
      providerCanRx,
      license,
      expirationDate,
      state,
      validForErx,
      erxUserId,
      erxUserToken
    };
    const mhdParams                  = {
      consultationId,
      remedyApiStatus,
      newMedActiveConsult,
      newMedicationMhdQuestionId,
      newMedicationMhdAnswerId
    };
    const consultationParams = {
      memberId,
      consultationId,
      remedyApiStatus,
      authorizationToken
    };

    // TODO: Remove when ERH is entirely componentized
    $('.ehr_content #medication-table').hide();
    $('#new-medication-form .new_record_ct').hide();
    $('.ct.dynamic_box.new_prescriptions_ct').hide();
    $('.workflow.rx#step_4 > p').hide();
    $('#step_4 > ul.yes_no_radios').hide();

    render(
      ClinicalMedication,
      '#td-medication-history',
      { memberParams, mhdParams, providerParams },
      false
    );
    render(MedicationHistory, '#vendor-med-history', { memberId, consultationId, state }, false);
    const rxParams  = {
      memberParams,
      providerParams,
      consultationParams
    };

    // Preload QuickRx to avoid delay on Initial load.
    store.dispatch(fetchQuickRxByProvider({ consultationId }));

    const WithPrescriptionModal = ModalWrapper(
      PrescriptionModal, rxParams
    );

    const modalList = [WithPrescriptionModal];

    // render(
    //   PrescriptionModalManager,
    //   '#prescription_container',
    //   { modalList }
    // );

    render(
      PrescriptionModal,
      '#prescription_container',
      { providerParams, memberParams, consultationParams },
      false
    );

    render(
      ProviderOrder,
      '#provider_orders_container',
      { consultationParams },
      false
    );

    // TODO: Testing.
    // render(
    //   Prescription,
    //   '#step_0.workflow.verification',
    //   { providerParams, memberParams, consultationParams },
    //   false
    // );
  }

  if (document.getElementById('lab_order_prescription')) {
    const { memberId, consultSpecialtyName, stateCode } = $('#consult_form').data();
    const { labsPrescribe, labOffers } = document.getElementById('lab_order_prescription').dataset;

    render(
      AnalyteLabPrescription,
      '#lab_order_prescription',
      {
        memberId,
        consultSpecialtyName,
        stateCode,
        preselectedData: {
          cachedLabsPrescribe: labsPrescribe,
          cachedLabOffers:     labOffers
        }
      },
      false
    );
  }
});
