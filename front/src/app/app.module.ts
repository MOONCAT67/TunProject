import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlumberComponent } from './plumber/plumber.component';
import { PainterComponent } from './painter/painter.component';
import { BodyComponent } from './body/body.component'; // ✅ IMPORT
import { LayoutComponent } from './layout/layout.component'; // ✅ IMPORT LAYOUT COMPONENT
import { BuildingComponent } from './building/building.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { TilierComponent } from './tilier/tilier.component';
import { AuthComponent } from './auth/auth.component';
import { PostprojectComponent } from './postproject/postproject.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PlumberComponent,
    PainterComponent,
    BodyComponent, // ✅ ADD HERE
    LayoutComponent, // ✅ ADD LAYOUT COMPONENT
    BuildingComponent,
    ElectricianComponent,
    CarpenterComponent,
    TilierComponent,
    AuthComponent,
    PostprojectComponent,
    FormsModule,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'body', component: BodyComponent },  
          { path: 'plumber', component: PlumberComponent },
          { path: 'painter', component: PainterComponent },
          { path: 'building', component: BuildingComponent },
          { path: 'auth', component: AuthComponent},
          { path: 'postproject', component: PostprojectComponent},
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
