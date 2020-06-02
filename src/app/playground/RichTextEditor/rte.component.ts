import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-rte',
  templateUrl: './rte.component.html',
  styleUrls: ['./rte.component.scss']
})
export class RteComponent implements OnInit {
  @ViewChild('tooltip') tooltip;

  public Editor = ClassicEditor;
  public brief = '';

  private quillConfig = null;
  private isToolbarActivated;

  getConfigModules() {
    return this.quillConfig.modules;
  }

  getIsToolbarActivated() {
    return this.isToolbarActivated;
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

  ngOnInit(): void {}

}
