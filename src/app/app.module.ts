import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import {app_routing} from "./app.routes";

//Servicios
import {InformacionService} from "./services/informacion.service";
import {ProductosService} from "./services/productos.service";

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [InformacionService,
              ProductosService],
              
  bootstrap: [AppComponent]
  

})
export class AppModule { }
