import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.css']
})
export class LiveDataComponent implements OnInit {
  private connection: WebSocket;
  data: {};
  filterValue: string;

  constructor() {
    this.data = {}
  }

  ngOnInit(): void {
    this.connection = new WebSocket('ws://127.0.0.1:1337');
    this.connection.onmessage = this.onMsg.bind(this);
  }

  onMsg(msg): void {
    var parsed_msg = JSON.parse(msg.data).message;
    var value = JSON.parse(parsed_msg.value);
    value['topic'] = parsed_msg.topic;
    if (this.data[value['msg_id']]) {
      this.data[value['msg_id']] = [value, ...this.data[value['msg_id']]]
    } else {
      this.data[value['msg_id']] = [value]
    }
  }


}
