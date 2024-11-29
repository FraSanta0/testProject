import { Component } from '@angular/core';
import { Router,RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  isOpen = false; 

  constructor(
    private router: Router
  ){}
  
  toggleMenu() { 
    this.isOpen = !this.isOpen;
  }

  menuAdd(): void{
    this.router.navigate(['/add']);
    this.isOpen=!this.isOpen;
  }

  menuHome(): void{
    this.router.navigate(['/']);
    this.isOpen=!this.isOpen;
  }
}
