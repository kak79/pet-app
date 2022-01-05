import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoo-animals',
  templateUrl: './zoo-animals.component.html',
  styleUrls: ['./zoo-animals.component.css']
})
export class ZooAnimalsComponent implements OnInit {
  animal:any;
  // idInput:number = 50;

  constructor() { }

  ngOnInit(): void {
    this.getZoo();
  }

  async getZoo() {
    let resp = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
    if (resp.status===200) {
        this.animal = await resp.json();
    }
  }

}
