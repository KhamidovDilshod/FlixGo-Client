import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {IconType} from "../../shared/types/icon-type";
import {NzModalService} from "ng-zorro-antd/modal";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar') navbar!: ElementRef;
  menu: IconType = 'menu';

  constructor(
    private renderer: Renderer2,
    private modalService: NzModalService
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

  signUpDialog(): void {
    this.modalService.create({
      nzTitle: 'Sign Up',
      nzContent: SignUpComponent,
      nzFooter:[]
    })
  }
}
