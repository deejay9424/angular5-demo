import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})

export class MaterialModule { }