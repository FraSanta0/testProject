import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router,RouterOutlet,RouterModule } from '@angular/router';
import { SidebarMenuComponent } from "../sidebar-menu/sidebar-menu.component";
import { MainComponent } from "../main/main.component";
import { LocalService } from '../local.service';

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidebarMenuComponent, MainComponent],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.css'
})
export class HeadbarComponent implements OnInit {
  
  username: string = '';
  level: any = 0;
  
  constructor(
    private router: Router,
    private localService: LocalService
  ) {
  }


  ngOnInit(): void {
    this.username = this.localService.getData('username') || '';
    this.level = this.localService.getData('livello') || 0;
  }

  logout(): void{
    this.localService.removeData('username');
    this.localService.removeData('livello');
    window.location.reload();
    this.router.navigate(['/main']);
  }


  search(): void{
    let name: string = '';
    const searchElement = document.getElementById("search") as HTMLInputElement;
    if (searchElement) {
      name = searchElement.value;
    }
    this.localService.saveData('search', name);
    document.getElementById("search")?.setAttribute("value", "");
    if(this.router.url==='/'){
      window.location.reload();
    }else{
      this.router.navigate(['/']);
    }
  }
  

}
