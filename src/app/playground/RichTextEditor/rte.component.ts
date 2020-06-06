import { Component, AfterViewInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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

  toggleToolbar() {
    this.isToolbarActivated = !this.isToolbarActivated;
  }

  toolbarActivatorClasses() {
    return this.isToolbarActivated ? 'toolbar-activator black' : 'toolbar-activator';
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

  getScrollingContainer() {
    return this.el.nativeElement.querySelector('#scrollingContainer');
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

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef) {
    this.isToolbarActivated = false;
    this.quillConfig = {
        bounds: 'self',
        modules: {
          toolbar: '.toolbar',
        },
      };
  }

  setBrief(val: string) {
    this.brief = val;
  }

  ngAfterViewInit() {

    const editor = new Quill('#quill-editor', {
      modules: { toolbar: '#toolbar-2' },
      theme: 'snow'
    });

    editor.on('text-change', (delta, oldContents, source) => {
      console.log(editor.getContents().ops[0]);
      const [quillContent] = editor.getContents().ops;
      this.setBrief(quillContent.insert);
      this.cdr.detectChanges();
    });
  }

}
