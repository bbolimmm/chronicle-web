/*
 * @flow
 */

import { Map, fromJS } from 'immutable';

import initializeStudyReducer from './initializeStudyReducer';

import {
  RS_INITIAL_STATE,
} from '../../../common/constants';
import { RESET_REQUEST_STATES } from '../../../core/redux/actions';
import { resetRequestStatesReducer } from '../../../core/redux/reducers';
import {
  GET_STUDY,
  GET_STUDY_PARTICIPANTS,
  INITIALIZE_STUDY,
  getStudy,
  getStudyParticipants,
  initializeStudy,
} from '../actions';

const INITIAL_STATE :Map = fromJS({
  // actions
  [INITIALIZE_STUDY]: RS_INITIAL_STATE,
  // data
});

export default function reducer(state :Map = INITIAL_STATE, action :Object) {

  switch (action.type) {

    case RESET_REQUEST_STATES: {
      return resetRequestStatesReducer(state, action);
    }

    case initializeStudy.case(action.type): {
      return initializeStudyReducer(state, action);
    }

    default: {
      return state;
    }
  }
}
