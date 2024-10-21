import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Shirt} from '../shirts.interface';

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
  testData: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {
    if(this.testData==null){
      this.getShirts().subscribe(response => {
        this.testData=response;
        this.testData=this.testData.body;
        console.log(this.testData);
      })
    }
    
  }

  getShirts(): Observable<Shirt[]> {
    return this.http.get<Shirt[]>(`${this.allShirtsUrl}`);
    }

  menu(): void{
    this.router.navigate(['/add']);
  }
}
