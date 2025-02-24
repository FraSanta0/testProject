import { Component } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Utente } from '../utente.interface';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { LocalService } from '../local.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  utenti: any;
  loginform: FormGroup;
  registerform: FormGroup;
  loginstate: boolean = true;
  registerstate: boolean = false;
  failurestate: boolean = false;
  registerDone: boolean = false;

  ngOnInit(): void {
    console.log(this.localService.getData('username'));
    if(this.localService.getData('username')!=null){
      this.router.navigate(['/main']);
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private localService: LocalService
  ){
    this.loginform = new FormGroup({
      mail: new FormControl(''),
      password: new FormControl('')
    });
    this.registerform = new FormGroup({
      mail: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl('')
    });
  }

  loginURL= "https://santaniellofrancesco.altervista.org/test/apiUtente/read_utente_mail.php";

  getUtente(mail: string): Observable<Utente[]> {
      return this.http.get<Utente[]>(this.loginURL+"?mail="+this.loginform.value.mail);
      }

  login(event: any): void {
    event.preventDefault();
    this.getUtente(this.loginform.value.mail).subscribe(response => {
      this.utenti=response;
      if(this.utenti.password==this.loginform.value.password){
        console.log('login success');
        this.localService.saveData('username', this.utenti.username);
        this.localService.saveData('livello', this.utenti.livello);
        window.location.reload();
      }else{
        console.log('login failed');
        this.failurestate=true;
      }

    });
  }

  register(): void{
    this.loginstate=false;
    this.registerstate=true;
    this.failurestate=false;
    
  }

  submitRegister(event: any): void{
    event.preventDefault();
    const apiUrl = 'https://santaniellofrancesco.altervista.org/test/apiUtente/create_utente.php';
    const formData = this.registerform.value;
    console.log(formData.username);

    this.http.post(apiUrl, formData).subscribe(response => {
      this.localService.saveData('username', formData.username);
      this.localService.saveData('livello', "0");
      this.registerDone=true;
      setTimeout(() => {
        this.registerDone=false;
        window.location.reload();
      }, 1000);
    });
  }
  

}
