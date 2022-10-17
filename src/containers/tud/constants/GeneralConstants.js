// @flow

import { PROPERTY_CONSTS } from './SchemaConstants';

const PAGE_NUMBERS = {
  SURVEY_INTRO_PAGE: 0,
  DAY_SPAN_PAGE: 2,
  FIRST_ACTIVITY_PAGE: 3,
  PRE_SURVEY_PAGE: 1,
};

// map from react json form schema properties to easily understandable titles
// the mapped values will appear as ol.title values in the entity data
const QUESTION_TITLE_LOOKUP = {
  [PROPERTY_CONSTS.ACTIVITY_END_TIME]: 'Activity end time',
  [PROPERTY_CONSTS.ACTIVITY_NAME]: 'Primary activity',
  [PROPERTY_CONSTS.ACTIVITY_START_TIME]: 'Activity start time',
  [PROPERTY_CONSTS.ADULT_MEDIA]: 'Adult media use',
  [PROPERTY_CONSTS.BG_AUDIO_DAY]: 'Background audio',
  [PROPERTY_CONSTS.BG_TV_DAY]: 'Background TV',
  [PROPERTY_CONSTS.CAREGIVER]: 'Caregiver',
  [PROPERTY_CONSTS.DAY_OF_WEEK]: 'Day of week',
  [PROPERTY_CONSTS.NON_TYPICAL_DAY_REASON]: 'Non typical day reason',
  [PROPERTY_CONSTS.NON_TYPICAL_SLEEP_PATTERN]: 'Non typical sleep reason',
  [PROPERTY_CONSTS.OTHER_ACTIVITY]: 'Other activity',
  [PROPERTY_CONSTS.PRIMARY_BOOK_TITLE]: 'Primary book title',
  [PROPERTY_CONSTS.PRIMARY_BOOK_TYPE]: 'Primary book type',
  [PROPERTY_CONSTS.PRIMARY_MEDIA_ACTIVITY]: 'Primary media activity',
  [PROPERTY_CONSTS.PRIMARY_MEDIA_AGE]: 'Primary media age',
  [PROPERTY_CONSTS.PRIMARY_MEDIA_NAME]: 'Primary media name',
  [PROPERTY_CONSTS.SECONDARY_ACTIVITY]: 'Secondary activity',
  [PROPERTY_CONSTS.SECONDARY_MEDIA_ACTIVITY]: 'Secondary media activity',
  [PROPERTY_CONSTS.SECONDARY_MEDIA_AGE]: 'Secondary media age',
  [PROPERTY_CONSTS.SECONDARY_MEDIA_NAME]: 'Secondary media name',
  [PROPERTY_CONSTS.SLEEP_ARRANGEMENT]: 'Sleep arrangement',
  [PROPERTY_CONSTS.SLEEP_PATTERN]: 'Sleep pattern',
  [PROPERTY_CONSTS.TYPICAL_DAY_FLAG]: 'Typical day',
  [PROPERTY_CONSTS.WAKE_UP_COUNT]: 'Wake up at night'
};
/* eslint-disable import/prefer-default-export */
export {
  PAGE_NUMBERS,
  QUESTION_TITLE_LOOKUP
};
/* eslint-enable */
