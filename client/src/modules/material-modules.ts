import {NgModule} from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdInputModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdDialogModule, MdInputModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdDialogModule, MdInputModule],
})
export class MaterialModules {
}
