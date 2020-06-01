import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-rte',
  templateUrl: './rte.component.html',
  styleUrls: ['./rte.component.scss']
})
export class RteComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {}

}
