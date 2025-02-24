import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Shirt } from '../shirts.interface';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  ShirtForm: FormGroup;
  shirt: Shirt = {
    ID_shirt: '',
    team: '',
    year: '',
    name: '',
    number: '',
    size: '',
    type: '',
    brand: '',
    img: '',
    price: ''
  };

  constructor(
      private router: Router,
      private http: HttpClient
    ){
      const navigation = this.router.getCurrentNavigation();
      if(navigation && navigation.extras.state){
        this.shirt = navigation?.extras.state['shirt'];
      }
      this.ShirtForm = new FormGroup({
        ID_shirt: new FormControl(this.shirt.ID_shirt),
        team: new FormControl(this.shirt.team),
        year: new FormControl(this.shirt.year),
        size: new FormControl(this.shirt.size),
        brand: new FormControl(this.shirt.brand),
        type: new FormControl(this.shirt.type),
        img: new FormControl(this.shirt.img),
        price: new FormControl(this.shirt.price),
      });
    }

    onSubmit() {
      const apiUrl = 'http://santaniellofrancesco.altervista.org/test/api/update_shirt.php';
      const formData = this.ShirtForm.value;
      console.log(formData);
  
      this.http.post(apiUrl, formData).subscribe(response => {
        console.log(response);
      });
      this.router.navigate(['/']);
    }
}
