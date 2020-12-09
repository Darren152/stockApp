import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private URL = 'http://localhost:8080';

  constructor() { }
}
