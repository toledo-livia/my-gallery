import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-header-profile',
  template: `
    <div class="content-title-group">
      <a router-link="/">
        <h2 class="title">{{title}}</h2>
      </a>
    </div>
  `
})
export class ListHeaderProfileComponent implements OnInit {
  @Input() title: string;
  @Output() add = new EventEmitter();
  @Output() refresh = new EventEmitter();

  ngOnInit() {}

  handleAdd() {
    this.add.emit();
  }
  handleRefresh() {
    this.refresh.emit();
  }
}
