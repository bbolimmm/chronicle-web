/*
 * @flow
 */

import {
  call,
  put,
  select,
  takeEvery,
} from '@redux-saga/core/effects';
import { AxiosUtils, Logger } from 'lattice-utils';
import type { Saga } from '@redux-saga/core';
import type { WorkerResponse } from 'lattice-sagas';
import type { SequenceAction } from 'redux-reqseq';

import * as StudyApi from '../../../core/api/study';
import { selectSelectedOrgId } from '../../../core/redux/selectors';
import { CREATE_STUDY, createStudy } from '../actions';

const { toSagaError } = AxiosUtils;

const LOG = new Logger('StudySagas');

function* createStudyWorker(action :SequenceAction) :Saga<WorkerResponse> {

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createStudy.request(id, value));
    const orgId = yield select(selectSelectedOrgId());
    let study = { ...value, organizationIds: [orgId] };
    const studyId = yield call(StudyApi.createStudy, study);
    study = { ...study, id: studyId };
    workerResponse = { data: study };
    yield put(createStudy.success(id, study));
  }
  catch (error) {
    LOG.error(action.type, error);
    workerResponse = { error };
    yield put(createStudy.failure(id, toSagaError(error)));
  }
  finally {
    yield put(createStudy.finally(id));
  }

  return workerResponse;
}

function* createStudyWatcher() :Saga<*> {

  yield takeEvery(CREATE_STUDY, createStudyWorker);
}

export {
  createStudyWorker,
  createStudyWatcher,
};
