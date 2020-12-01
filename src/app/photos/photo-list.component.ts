import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Photo } from '../core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoListComponent {
  @Input() photos: Photo[];
  @Output() deleted = new EventEmitter<Photo>();
  @Output() selected = new EventEmitter<Photo>();

  selectPhoto(photo: Photo) {
    this.selected.emit(photo);
  }

  deletePhoto(photo: Photo) {
    this.deleted.emit(photo);
  }

  trackByPhoto(index: number, photo: Photo): string {
    return photo.id;
  }
}
