import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  key: string;
  @Input()
  value: string;
  collapsed: boolean;

  constructor() {
    this.collapsed = true;
  }

  ngOnInit(): void {
  }

}
