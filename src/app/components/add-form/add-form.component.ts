import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-form.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  ShirtForm: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient
  ){
    this.ShirtForm = new FormGroup({
      team: new FormControl(''),
      year: new FormControl(''),
      size: new FormControl(''),
      brand: new FormControl(''),
      type: new FormControl(''),
      price: new FormControl(''),
    });
  }

  menu(): void{
    this.router.navigate(['/']);
  }

  onSubmit() {
    const apiUrl = 'https://santaniellofrancesco.altervista.org/test/api/create_shirt.php';
    const formData = this.ShirtForm.value;

    this.http.post(apiUrl, formData).subscribe(response => {
      console.log(response);
    });
  }

}
