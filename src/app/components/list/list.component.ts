import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import {Shirt} from '../shirts.interface';
import { LocalService } from '../local.service';
import test from 'node:test';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  private allShirtsUrl = "https://santaniellofrancesco.altervista.org/test/api/read_shirts.php";
  testData: any;
  shirts: Shirt[] = [];

  constructor(
      private http: HttpClient,
      private router: Router,
      private localService: LocalService
    ){}

  ngOnInit(): void {
    if(parseInt(this.localService.getData("livello") || "0") < 2){
      this.router.navigate(['/main']);
    }
    this.getShirts().subscribe(response => {
      this.testData=response;
      this.testData=this.testData.body;
      console.log(this.testData);
    });
  }

  openUpdate(ID_shirt: string):void{
    console.log("open");
    var shirt;
    this.shirts=this.testData;
    for (var s of this.shirts){
      if(s.ID_shirt == ID_shirt){
        shirt = s;
        break;
      }
    }
    const navigationExtras: NavigationExtras = {
      state: {shirt: shirt}
    };
    this.router.navigate(['/update'], navigationExtras);
  }

  getShirts(): Observable<Shirt[]> {
    return this.http.get<Shirt[]>(`${this.allShirtsUrl}`);
  }

  deleteshirt(id: String): void {
    if(confirm("sicuro di voler eliminare la maglia?")){
      var apidelete = "http://santaniellofrancesco.altervista.org/test/api/delete_shirt.php?ID_shirt="+id;
      this.http.delete(apidelete).subscribe(response => {
        console.log(response);
        this.getShirts().subscribe(response => {
          this.testData=response;
          this.testData=this.testData.body;
          console.log(this.testData);
        });
      });
    }
  }

}
