import { Component } from '@angular/core';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.css']
})
export class CareerPageComponent {

  jobs = [
    {
      id: 1,
      title: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      requirements: ['Bachelor\'s degree in Computer Science or equivalent', 'Experience with Angular and Node.js'],
      responsibilities: ['Developing new features', 'Maintaining existing codebase']
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      requirements: ['Bachelor\'s degree in Design or equivalent', 'Proficiency in Adobe Creative Suite'],
      responsibilities: ['Creating wireframes', 'Designing user interfaces']
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      requirements: ['Bachelor\'s degree in Design or equivalent', 'Proficiency in Adobe Creative Suite'],
      responsibilities: ['Creating wireframes', 'Designing user interfaces']
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      requirements: ['Bachelor\'s degree in Design or equivalent', 'Proficiency in Adobe Creative Suite'],
      responsibilities: ['Creating wireframes', 'Designing user interfaces']
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      requirements: ['Bachelor\'s degree in Design or equivalent', 'Proficiency in Adobe Creative Suite'],
      responsibilities: ['Creating wireframes', 'Designing user interfaces']
    },
    {
      id: 1,
      title: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      requirements: ['Bachelor\'s degree in Computer Science or equivalent', 'Experience with Angular and Node.js'],
      responsibilities: ['Developing new features', 'Maintaining existing codebase']
    },

  ];
}
