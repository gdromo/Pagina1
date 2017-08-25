import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  info:any={};
  cargada:boolean=false;
  cargada_about:boolean=false;
  equipo: any []=[];
  firebase1:string = "https://paginaweb-dc84a.firebaseio.com/Equipo.json";

  constructor(public http:Http) { 
   this.carga_info();
   this.carga_about();
  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
    .subscribe( data=> {
     // console.log(data.json());
      this.info=data.json();
      this.cargada=true;
      
    })
  }

  public carga_about (){
    this.http.get(this.firebase1)
    .subscribe( data=> {
      //console.log(data.json());
      this.equipo=data.json();
      this.cargada_about=true;
      
    })
  }
}
