import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postproject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './postproject.component.html',
  styleUrls: ['./postproject.component.css']
})
export class PostprojectComponent {
  project = {
    title: '',
    budget: '',
    address: '',
    deadline: '',
    skills: [] as string[],
    description: '' 
  };

  randomImageNumber = Math.floor(Math.random() * 4) + 1;
  successMessageVisible = false;

  skillInput: string = '';
  allSkills: string[] = [
    'Plumber', 'Electrician', 'Painter', 'Tiler',
    'Carpenter', 'Welder', 'Mason', 'Cleaner',
    'AC Technician', 'Glass Installer', 'Decorator',
    'Roof Repair', 'Gardener'
  ];

  filteredSkills: string[] = [];

  filterSkills(): void {
    const search = this.skillInput.toLowerCase();
    this.filteredSkills = this.allSkills.filter(skill =>
      skill.toLowerCase().includes(search) &&
      !this.project.skills.includes(skill)
    );
  }

  selectSkill(skill: string): void {
    this.project.skills.push(skill);
    this.skillInput = '';
    this.filteredSkills = [];
  }

  removeSkill(skill: string): void {
    this.project.skills = this.project.skills.filter(s => s !== skill);
  }

  postProject(): void {
    console.log('Project Submitted:', this.project);
    // You can use this if you want a separate method
  }

  onSubmit(): void {
    console.log('Project submitted:', this.project);

    // ✅ Show success message
    this.successMessageVisible = true;

    // Optionally reset form here
    // this.project = { title: '', budget: '', address: '', deadline: '', skills: [], description: '' };

    // Auto-hide the message after 3 seconds

  }

  addSkill(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    keyboardEvent.preventDefault();
    const skill = this.skillInput.trim();

    if (skill && !this.project.skills.includes(skill)) {
      this.project.skills.push(skill);
      this.skillInput = '';
      this.filteredSkills = [];
    }
  }
}
