import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() { }


  async getZoo() {
    let resp = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');

    if (resp.status===200) {
        return await resp.json();
    }
  }


}
