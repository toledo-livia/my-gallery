import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Photo } from '../core';

@Injectable({ providedIn: 'root' })
export class PhotoService extends EntityCollectionServiceBase<Photo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Photo', serviceElementsFactory);
  }
}
