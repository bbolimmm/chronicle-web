/*
 * @flow
 */

import { Models } from 'lattice';

const { FullyQualifiedName } = Models;

const ASSOCIATION_ENTITY_TYPE_FQNS = {};
const ENTITY_TYPE_FQNS = {};

const PROPERTY_TYPE_FQNS = {
  // study
  STUDY_DESCRIPTION: new FullyQualifiedName('diagnosis.Description'),
  STUDY_EMAIL: new FullyQualifiedName('contact.Email'),
  STUDY_GROUP: new FullyQualifiedName('sharing.name'),
  STUDY_ID: new FullyQualifiedName('general.stringid'),
  STUDY_NAME: new FullyQualifiedName('general.fullname'),
  STUDY_VERSION: new FullyQualifiedName('ol.version'),
};

export {
  ASSOCIATION_ENTITY_TYPE_FQNS,
  ENTITY_TYPE_FQNS,
  PROPERTY_TYPE_FQNS,
};