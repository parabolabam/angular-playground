import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RteComponent } from './RichTextEditor/rte.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@progress/kendo-angular-editor';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [RteComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    EditorModule,
    QuillModule.forRoot()
  ]
})
export class Playground { }
