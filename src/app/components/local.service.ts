import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveData(key: string, value: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    } else {
      console.error('localStorage non è disponibile');
    }
  }

  public getData(key: string) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    } else {
      console.error('localStorage non è disponibile');
      return null;
    }
  }

  public removeData(key: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    } else {
      console.error('localStorage non è disponibile');
    }
  }

  public clearData() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    } else {
      console.error('localStorage non è disponibile');
    }
  }
}

