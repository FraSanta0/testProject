import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Shirt} from '../shirts.interface';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from 'url';
import { response } from 'express';


@Component({
  selector: 'app-shirt-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './shirt-page.component.html',
  styleUrl: './shirt-page.component.css'
})
export class ShirtPageComponent implements OnInit{

  Idpassed: String = '';
  shirtData: any;
  shirtUrl='http://santaniellofrancesco.altervista.org/test/api/read_shirt_id.php';
  

  constructor(private http: HttpClient,
              private route: Router
            )
    {
    const navigation = this.route.getCurrentNavigation();
    if(navigation && navigation.extras.state){
      this.Idpassed = navigation?.extras.state['ID'];
      console.log(this.Idpassed);
    }
      
      if(this.shirtData==null){
        this.getShirt();
      }
  }

  ngOnInit(): void {
    
    
    
  }

  getShirt(): void{
    this.http.get<Shirt[]>(this.shirtUrl+"?ID_shirt="+this.Idpassed).subscribe((response) => {
      this.shirtData=response;
      console.log(this.shirtData);
    });
    }


}
