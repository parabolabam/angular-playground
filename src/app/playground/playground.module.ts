import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RteComponent } from './RichTextEditor/rte.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@progress/kendo-angular-editor';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [RteComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    EditorModule,
    PerfectScrollbarModule,
    QuillModule.forRoot()
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class Playground { }
