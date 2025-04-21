// src/app/routes.ts
import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PlumberComponent } from './plumber/plumber.component';
import { PainterComponent } from './painter/painter.component';
import { BuildingComponent } from './building/building.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { TilierComponent } from './tilier/tilier.component';
import { AuthComponent } from './auth/auth.component';
import { PostprojectComponent } from './postproject/postproject.component';


export const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'plumber', component: PlumberComponent },
  { path: 'painter', component: PainterComponent },
  { path: 'building', component: BuildingComponent},
  { path: 'carpenter', component: CarpenterComponent},
  { path: 'electrician', component: ElectricianComponent},
  { path: 'tilier', component:TilierComponent},
  { path: 'auth', component:AuthComponent},
  { path: 'postproject' ,component:PostprojectComponent},
  { path: '', redirectTo: '/body', pathMatch: 'full' } // Default route to 'body'
];
