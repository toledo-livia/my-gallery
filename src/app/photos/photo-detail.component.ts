import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,  
  ViewChild
} from '@angular/core';

import { Photo } from '../core';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoDetailComponent implements OnChanges {
  @Input() photo: Photo;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Photo>();
  @ViewChild('image') el:ElementRef;

  addMode = false;
  editingPhoto: Photo;

  ngOnChanges(changes: SimpleChanges) {
    if (this.photo && this.photo.id) {
      this.editingPhoto = { ...this.photo };
      this.addMode = false;
    } else {
      this.editingPhoto = { id: undefined, name: '', upload_date: '', image: '' };
      this.addMode = true;
    }
  }

  clear() {
    this.unselect.emit();
  }

  savePhoto() {
    this.save.emit(this.editingPhoto);
    this.clear();
  }

  getBaseUrl() {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
      baseString = reader.result;
      sessionStorage.setItem('image', baseString);
    };
    reader.readAsDataURL(file);
    console.log(sessionStorage.getItem('image'));
    this.editingPhoto.image = sessionStorage.getItem('image');
  }
}
