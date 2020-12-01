import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {
  selected: Photo;
  photos$: Observable<Photo[]>;
  message = '?';
  photoToDelete: Photo;
  showModal = false;

  constructor(private photoService: PhotoService) {
    this.photos$ = photoService.entities$;
  }

  ngOnInit() {
    this.getPhotos();
  }

  add(photo: Photo) {
    this.photoService.add(photo);
  }

  askToDelete(photo: Photo) {
    this.photoToDelete = photo;
    this.showModal = true;
    if (this.photoToDelete.name) {
      this.message = `Você tem certeza que deseja excluir ${this.photoToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deletePhoto() {
    this.closeModal();
    if (this.photoToDelete) {
      this.photoService
        .delete(this.photoToDelete.id)
        .subscribe(() => (this.photoToDelete = null));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getPhotos() {
    this.photoService.getAll();
    this.clear();
  }

  save(photo: Photo) {
    if (this.selected && this.selected.name) {
      this.update(photo);
    } else {
      this.add(photo);
    }
  }

  select(photo: Photo) {
    this.selected = photo;
  }

  update(photo: Photo) {
    this.photoService.update(photo);
  }
}
