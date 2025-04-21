import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';  // ✅ Import Router
import { RouterModule } from '@angular/router'; // ✅ Import for standalone

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterModule],  // ✅ Required for routerLink or router.navigate
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  isVisible = false;

  constructor(private router: Router) {}  // ✅ Inject the Router

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = document.querySelector('.work-project-container');
    if (section) {
      const rect = section.getBoundingClientRect();
      this.isVisible = rect.top <= window.innerHeight - 100;
    }
  }

  goToPlumber() {
    this.router.navigate(['/plumber']);  
  }
  goToPainter() {
    this.router.navigate(['/painter']);  
  }
  goToBuilding() {
    this.router.navigate(['/building']);  
  }
  goToElectrician() {
    this.router.navigate(['/electrician']);  
  }
  goToCarpenter() {
    this.router.navigate(['/carpenter']);  
  }
  goToTilier() {
    this.router.navigate(['/tilier']);  
  }
  goToAuth() {
    this.router.navigate(['/auth']);  
  }
//  goToPostProject() {
   // this.router.navigate(['/postproject']);
 // }
}
