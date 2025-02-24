import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import {Shirt} from '../shirts.interface';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  private allShirtsUrl = "https://santaniellofrancesco.altervista.org/test/api/read_shirts.php";
  private getShirtTeamUrl = "http://santaniellofrancesco.altervista.org/test/api/read_shirt_team.php";
  testData: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private localService: LocalService
  ){
  }

  ngOnInit(): void {
    this.loader();
  }

  getShirts(): Observable<Shirt[]> {
    return this.http.get<Shirt[]>(`${this.allShirtsUrl}`);
    }

  menu(): void{
    this.router.navigate(['/add']);
  }

  openSingle(ID_shirt: string): void{
    const navigationExtras: NavigationExtras = {
      state: {ID: ID_shirt}
    };
    this.router.navigate(['/shirt'], navigationExtras);
  }

  searchShirts(name: string):  Observable<Shirt[]>{
    return this.http.get<Shirt[]>(this.getShirtTeamUrl+"?team="+name);
  }

  loader(): void{
    if(this.localService.getData('search')!=null){
      console.log(this.localService.getData('search'));
      this.searchShirts(this.localService.getData('search') as string).subscribe(response => {
        this.testData=response;
        this.testData=this.testData.body;
        console.log(this.testData);
      })
      this.localService.removeData('search');
    }else{
      this.getShirts().subscribe(response => {
        this.testData=response;
        this.testData=this.testData.body;
        console.log(this.testData);
      })
    }
  }
}
