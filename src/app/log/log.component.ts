import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logs;
  constructor(
    private log:LogService
  ) { 
    this.logs = this.log.getLogs();
  }

  ngOnInit() {
  }
}