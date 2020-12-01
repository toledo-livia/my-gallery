import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  template: `
    <div class="card-content">
      <div class="content">
        <img class="image" src="{{ image }}" />
        <div>
          <div class="name">Nome: {{ name }}</div>
          <div class="upload_date">Data de Upload: {{ upload_date }}</div>
        </div>
      </div>
    </div>
  `
})
export class CardContentComponent implements OnInit {
  @Input() name;
  @Input() upload_date;
  @Input() image;

  ngOnInit() { }
}
