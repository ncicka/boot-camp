import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export interface DialogData {
  mensaje: '';
}

@Component({
  selector: 'progress-spinner',
  template: `<mat-spinner></mat-spinner>`,
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class ProgressSpinner {}

@Component({
  selector: 'dialog-alert',
  template: `
    <section
      class="px-8 pt-16 pb-8 bg-white bg-opacity-20 h-96 w-96 justify-center"
    >
      @if (data.estado() === 'failed') {
        {{ onDisableClose() }}
        <div class="px-8 pt-16 pb-16 text-xl justify-center">
          <p>Transferencia Falló</p>
        </div>
      } @else if (data.estado() === 'finalized') {
        {{ onDisableClose() }}
        <div class="px-8 pt-16 pb-16 text-xl justify-center">
          <p>Transferencia Exitosa</p>
        </div>
      } @else {
        <progress-spinner class="justifiy-center "> </progress-spinner>
        <div class="px-8 pt-16 pb-16 text-xl justify-center">
          <p>{{ data.estado() }}</p>
        </div>
      }
    </section>

    <footer
      class="flex justify-center  bg-white bg-opacity-20 px-8 pt-16 pb-16"
    >
      <button
        mat-button
        mat-raised-botton
        [disabled]="data.isdisabled()"
        (click)="onClose()"
      >
        Cerrar
      </button>
    </footer>
  `,
  standalone: true,
  imports: [
    MatDialogContent,
    ProgressSpinner,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogAlert {
  private readonly _matDialogRef = inject(MatDialogRef);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  onDisableClose() {
    this._matDialogRef.disableClose = false;
  }

  onClose() {
    this._matDialogRef.close();
  }
}
