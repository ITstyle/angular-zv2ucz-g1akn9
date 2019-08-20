import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogService {

  constructor(
    private http:HttpClient
  ) { }
  getLogs(){
    return this.http.post('http://qkshell.api.yunbeisoft.com/?service=App.Log.GetLog&filename=201908/20190820')
  }
}