import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal" [ngClass]="{ 'is-active': this.isOpen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirmar</p>
        </header>
        <section class="modal-card-body">
          {{message}}
        </section>
        <footer class="modal-card-foot">
          <button class="button modal-no" (click)="onNo()">Não</button>
          <button class="button is-primary modal-yes" (click)="onYes()">Sim</button>
        </footer>
      </div>
    </div>
  `
})
export class ModalComponent implements OnInit {
  @Input() message;
  @Input() isOpen = false;
  @Output() handleYes = new EventEmitter();
  @Output() handleNo = new EventEmitter();

  ngOnInit() {}

  onNo = () => {
    this.handleNo.emit();
  }

  onYes = () => {
    this.handleYes.emit();
  }
}
