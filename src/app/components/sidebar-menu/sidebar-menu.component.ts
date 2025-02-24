import { Component, OnInit } from '@angular/core';
import { Router,RouterOutlet,RouterModule } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent implements OnInit {
  isOpen = false; 
  username: string = '';
  level: any = 0;

  constructor(
    private router: Router,
    private localService: LocalService
  ){}
  ngOnInit(): void {
    this.username = this.localService.getData('username') || '';
    this.level = this.localService.getData('livello') || 0;
  }
  
  toggleMenu() { 
    this.isOpen = !this.isOpen;
    console.log(this.level);
  }

  menuAdd(): void{
    this.router.navigate(['/add']);
    this.isOpen=!this.isOpen;
  }

  menuHome(): void{
    this.router.navigate(['/']);
    this.isOpen=!this.isOpen;
  }

  menuList():void{
    this.router.navigate(['/list']);
    this.isOpen=!this.isOpen;
  }

  login(): void{
    this.router.navigate(['/login']);
  }
}
