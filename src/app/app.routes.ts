import {RouterModule, Routes} from "@angular/router";

import {AboutComponent,
        ItemComponent,
        BodyComponent,
        SearchComponent} from "./index.paginas";

const app_routes:Routes =[
    {path:'', pathMatch:'full',redirectTo:'home' },
    {path:'home', component:BodyComponent },
    {path:'about', component:AboutComponent },
    {path:'producto/:id', component:ItemComponent },
    {path:'buscar/:termino', component:SearchComponent },
    {path:'**', pathMatch:'full',redirectTo:'' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});