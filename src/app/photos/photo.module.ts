import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoDetailComponent } from './photo-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PhotoComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, PhotoComponent],
  declarations: [PhotoComponent, PhotoListComponent, PhotoDetailComponent]
})
export class PhotoModule {}
