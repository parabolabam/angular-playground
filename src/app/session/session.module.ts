import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    EditorModule
  ]
})
export class SessionModule { }
