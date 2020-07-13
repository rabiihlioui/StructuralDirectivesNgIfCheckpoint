import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-dir-ngif',
  templateUrl: './struct-dir-ngif.component.html',
  styleUrls: ['./struct-dir-ngif.component.css']
})
export class StructDirNgifComponent implements OnInit {

  dispHideBtn: string = 'Click to Hide'

  display: boolean = true

  constructor() { }

  ngOnInit() {
  }

  hideText() {
    if (this.display) {
      this.dispHideBtn = 'Click to Display'
      this.display = false
    }
    else {
      this.dispHideBtn = 'Click to Hide'
      this.display = true
    }
  }

}
