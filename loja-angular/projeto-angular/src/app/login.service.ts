import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  moostraMenu = new Subject<boolean>
  
  constructor() { }

  login(usuario:string, senha:string): void{
    if(usuario=="aluno" && senha == "1234"){
      localStorage.setItem('token','qwer1234');
      this.moostraMenu.next(false);
    }else{
      this.moostraMenu.next(true)      
    }
  }


  setMostraMenu(valor: boolean){
    this.moostraMenu.next(valor);
  }

  getMostaMenu(){
    return this.moostraMenu.asObservable();
  }
  
}
