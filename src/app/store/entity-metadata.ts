import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Photo: {}
};

const pluralNames = { Photo: 'Photos' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
