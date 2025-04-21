// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router to programmatically navigate
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html', // Separate HTML file
  styleUrls: ['./navbar.component.css']   // Separate CSS file
})
export class NavbarComponent {

  constructor(private router: Router) {}

  // Method to navigate back to the body component
  goToBody() {
    this.router.navigate(['/body']);  // Navigate to the '/body' route
  }
  goToAuth() {
    this.router.navigate(['/auth']);  
  }
}
