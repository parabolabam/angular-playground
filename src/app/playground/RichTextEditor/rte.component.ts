import { Component, AfterViewInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Quill from 'quill';

@Component({
  selector: 'app-rte',
  templateUrl: './rte.component.html',
  styleUrls: ['./rte.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class RteComponent implements AfterViewInit {
  @ViewChild('toolbar2') secondToolbar: ElementRef;
  public Editor = ClassicEditor;
  public brief = `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe placeat, rerum corrupti magni nihil dolor optio quae officiis eveniet sint nisi, ratione quisquam, id modi pariatur odit. Quae, quia cupiditate.
  `;
  public config = {};

  private quillConfig = null;
  private isToolbarActivated;

  getConfigModules() {
    return this.quillConfig.modules;
  }

  toolbarClasses() {
    return this.isToolbarActivated ? 'toolbar' : 'toolbar hidden';
  }

  toolbarContainerClasses() {
    return this.isToolbarActivated ? 'border-present' : 'no-border';
  }

  toogleToolbar() {
    this.isToolbarActivated = !this.isToolbarActivated;
  }


  quillEditorLocalStyles() {
    return {
      overflowY: 'auto',
      maxHeight: '20rem'
    };
  }

buttonClasses() {
    return this.isToolbarActivated ? 'open-button active' : 'open-button';
  }

scrollingContainerSelector() {
    return '.ql-container';
  }

constructor() {
  this.isToolbarActivated = false;
  this.quillConfig = {
      bounds: 'self',
      modules: {
        toolbar: '.toolbar',
      },
    };
  }

  ngAfterViewInit() {

    const editor = new Quill('#editor', {
      modules: { toolbar: '#toolbar' },
      theme: 'snow'
    });

    const editor2 = new Quill('#editor2', {
      modules: { toolbar: '#toolbar2' },
      theme: 'snow'
    });
  }

}
