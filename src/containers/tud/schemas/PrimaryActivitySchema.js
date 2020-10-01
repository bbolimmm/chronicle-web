// @flow
import { DataProcessingUtils } from 'lattice-fabricate';
import { DateTime } from 'luxon';

import { PRIMARY_ACTIVITIES } from '../constants/ActivitiesConstants';
import { PAGE_NUMBERS } from '../constants/GeneralConstants';
import { PROPERTY_CONSTS } from '../constants/SchemaConstants';

const { getPageSectionKey } = DataProcessingUtils;

const { DAY_SPAN_PAGE, FIRST_ACTIVITY_PAGE } = PAGE_NUMBERS;

const {
  ACTIVITY_END_TIME,
  ACTIVITY_NAME,
  ACTIVITY_START_TIME,
} = PROPERTY_CONSTS;

const createSchema = (pageNum :number, prevActivity :string, currentActivity :string, prevEndTime :DateTime) => {
  const formattedTime = prevEndTime.toLocaleString(DateTime.TIME_SIMPLE);

  return {
    type: 'object',
    title: '',
    properties: {
      [getPageSectionKey(pageNum, 0)]: {
        title: '',
        type: 'object',
        properties: {
          [ACTIVITY_NAME]: {
            type: 'string',
            title: (pageNum === FIRST_ACTIVITY_PAGE
              ? `What did your child start doing at ${formattedTime}?`
              : `What time did your child start doing at ${formattedTime} after they `
                + `finished ${(prevActivity)}?`),
            enum: PRIMARY_ACTIVITIES
          },
          [ACTIVITY_START_TIME]: {
            type: 'string',
            title: '',
            default: prevEndTime.toLocaleString(DateTime.TIME_24_SIMPLE)
          },
          [ACTIVITY_END_TIME]: {
            id: 'end_time',
            type: 'string',
            title: currentActivity
              ? `When did your child stop ${currentActivity}?`
              : 'When did the selected activity end?'
          },
        },
        required: [ACTIVITY_NAME, ACTIVITY_END_TIME]
      }
    },
  };
};

const createUiSchema = (pageNum :number) => ({
  [getPageSectionKey(pageNum, 0)]: {
    classNames: 'column-span-12 grid-container',
    [ACTIVITY_NAME]: {
      classNames: (pageNum === DAY_SPAN_PAGE ? 'hidden' : 'column-span-12')
    },
    [ACTIVITY_START_TIME]: {
      classNames: (pageNum === DAY_SPAN_PAGE ? 'column-span-12' : 'hidden'),
      'ui:widget': 'TimeWidget',
    },
    [ACTIVITY_END_TIME]: {
      classNames: 'column-span-12',
      'ui:widget': 'TimeWidget'
    },
  },
});

export {
  createSchema,
  createUiSchema
};
