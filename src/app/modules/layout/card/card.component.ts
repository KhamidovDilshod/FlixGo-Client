import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('url') imageUrl: string = '';
  @Input('title') title: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
