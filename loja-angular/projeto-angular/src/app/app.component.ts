import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'projeto-angular';
  mostrarMenu:boolean = true;
  mostarMenu: boolean | undefined;

  constructor(private _loginService: LoginService){}

  ngOnInit(): void {
    this._loginService.getMostaMenu().subscribe(
      res => { this.mostarMenu = res; }
      )
  }

  ngOnDestroy(){
    localStorage.clear();
  }

  
}
