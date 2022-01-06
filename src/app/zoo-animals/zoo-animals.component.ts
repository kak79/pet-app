import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../services/fetch-service.service';

@Component({
  selector: 'app-zoo-animals',
  templateUrl: './zoo-animals.component.html',
  styleUrls: ['./zoo-animals.component.css']
})
export class ZooAnimalsComponent implements OnInit {
  animal:any;
  // idInput:number = 50;

  constructor(private fetchServ: FetchServiceService) { }

  ngOnInit(): void {
    this.getZoo();
  }

  async getZoo() {
    
        this.animal = await this.fetchServ.getZoo();
    
  }

}
