import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {IconType} from "../../shared/types/icon-type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar') navbar!: ElementRef;
  menu: IconType = 'menu';

  constructor(
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
  }

  changeIcon() {
    if (this.menu === 'menu') {
      this.menu = 'cancel';
      this.renderer.setStyle(this.navbar.nativeElement, 'right', '2%')
    } else {
      this.menu = 'menu';
      this.renderer.setStyle(this.navbar.nativeElement, 'right', '-100%')
    }
  }
}
