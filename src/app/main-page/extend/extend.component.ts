import { Component, OnInit } from '@angular/core';
import request from 'src/app/api-endpoints/api';

@Component({
  selector: 'app-extend',
  templateUrl: './extend.component.html',
  styleUrls: ['./extend.component.css']
})
export class ExtendComponent implements OnInit {

  constructor() { }

  apiEndpoints() {
    return request
  }

  ngOnInit(): void {
  }

}
