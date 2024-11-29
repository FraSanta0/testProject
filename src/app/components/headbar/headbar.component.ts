import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router,RouterOutlet,RouterModule } from '@angular/router';
import { SidebarMenuComponent } from "../sidebar-menu/sidebar-menu.component";

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidebarMenuComponent],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.css'
})
export class HeadbarComponent{

  

}
