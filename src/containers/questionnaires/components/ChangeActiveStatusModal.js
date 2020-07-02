// @flow

import React from 'react';

import styled from 'styled-components';
import { ActionModal } from 'lattice-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { RequestStates } from 'redux-reqseq';
import type { RequestState } from 'redux-reqseq';

import { CHANGE_ACTIVE_STATUS, changeActiveStatus } from '../../questionnaire/QuestionnaireActions';

const Wrapper = styled.div`
  max-width: 500px;
`;

type Props = {
  activeStatus :boolean;
  isModalVisible :boolean;
  onCloseModal :() => void;
  studyEKID :UUID;
  questionnaireEKID :UUID;
}

const ChangeActiveStatusModal = ({
  activeStatus,
  isModalVisible,
  onCloseModal,
  studyEKID,
  questionnaireEKID
} :Props) => {
  const dispatch = useDispatch();

  const changeActiveStatusRS :RequestState = useSelector(
    (state) => state.getIn(['questionnaire', CHANGE_ACTIVE_STATUS, 'requestState'])
  );

  const onChangeStatus = () => {
    dispatch(changeActiveStatus({
      activeStatus,
      questionnaireEKID,
      studyEKID
    }));
  };

  const action = activeStatus ? 'deactivate' : 'activate';

  const requestStateComponents = {
    [RequestStates.STANDBY]: (
      <Wrapper>
        <span>
          {`Are you sure you want to ${action} questionnaire? `}
        </span>
        <span>
          {`Participants will ${activeStatus ? 'no longer' : ''} receive invitations to participate.`}
        </span>
      </Wrapper>
    ),
    [RequestStates.FAILURE]: (
      <Wrapper>
        <span>
          {`Failed to ${action} questionnaire. Please try again later or contact support.`}
        </span>
      </Wrapper>
    ),
    [RequestStates.SUCCESS]: (
      <Wrapper>
        <span>
          {`Successfully ${activeStatus ? 'activated' : 'deactivated'} questionnaire.`}
        </span>
      </Wrapper>
    )
  };

  const textPrimary = activeStatus ? 'Deactivate' : 'Activate';

  return (
    <ActionModal
        isVisible={isModalVisible}
        onClickPrimary={onChangeStatus}
        onClose={onCloseModal}
        requestState={changeActiveStatusRS}
        requestStateComponents={requestStateComponents}
        shouldCloseOnEscape={false}
        shouldCloseOnOutsideClick={false}
        textPrimary={textPrimary}
        textSecondary="Cancel"
        textTitle="Change Active Status" />
  );
};

export default ChangeActiveStatusModal;
