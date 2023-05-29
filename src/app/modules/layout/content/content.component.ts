import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  movies: Array<any> = [
    {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Justice League',
      url: 'https://storage.cloud.google.com/flixgo-bucket/98f13bb904cc6af14583fb83060ed672.jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Justice League',
      url: 'https://storage.cloud.google.com/flixgo-bucket/98f13bb904cc6af14583fb83060ed672.jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/98f13bb904cc6af14583fb83060ed672.jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/98f13bb904cc6af14583fb83060ed672.jpg'
    },
    {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/98f13bb904cc6af14583fb83060ed672.jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    },
    {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    }, {
      title: 'Jumanji',
      url: 'https://storage.cloud.google.com/flixgo-bucket/download%20(2).jpg'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
