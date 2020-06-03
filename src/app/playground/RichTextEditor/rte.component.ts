import { Component, ViewChild, AfterViewInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { startWith, delay } from 'rxjs/operators';

@Component({
  selector: 'app-rte',
  templateUrl: './rte.component.html',
  styleUrls: ['./rte.component.scss']
})
export class RteComponent {
  @ViewChild('tooltip') tooltip;
  @ViewChild('quillEditor') quillContainer = {};

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

  private quillConfig = null;
  private isToolbarActivated;

  getScrollingContainer() {
    return this.quillContainer;
  }

  getConfigModules() {
    return this.quillConfig.modules;
  }

  toolbarClasses() {
    return this.isToolbarActivated ? 'toolbar' : 'toolbar hidden';
  }

  toogleToolbar() {
    this.isToolbarActivated = !this.isToolbarActivated;
  }
  buttonClasses() {
    return this.isToolbarActivated ? 'open-button active' : 'open-button';
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

}
