import { Component, ElementRef, ViewChild } from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule, NgFor } from "@angular/common";

gsap.registerPlugin(ScrollTrigger);

export interface Project {
  title: string;
  // image: string;
  description: string;
  overview: string;
  problemSolved: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  github: string;
  liveDemo: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'E-Commerce Storefront with Admin Dashboard',
      description: 'A full-featured e-commerce platform with a customer storefront and an admin dashboard for product, category, and inventory management, built using Angular, RxJS, and SSR.',
      overview: 'Developed a full-featured E-Commerce platform with a customer storefront and an Admin Dashboard using Angular, TypeScript, RxJS, and Tailwind CSS. The application enables users to browse products, search and filter items, manage their shopping experience, and view responsive product pages. The Admin Dashboard provides centralized control for product management, category management, inventory updates, and order monitoring through an intuitive interface. The project focuses on scalability, responsive design, performance optimization, and maintainable frontend architecture.',
      problemSolved: 'Managing products, inventory, and customer-facing content manually becomes inefficient as an online store grows. This application addresses these challenges by providing a dedicated Admin Dashboard for managing products and categories while delivering a fast, responsive, and user-friendly shopping experience for customers. The implementation of Angular SSR further improves SEO and initial page load performance, making the platform more discoverable and performant.',
      technologies: [
        'Angular 18',
        'TypeScript',
        'Tailwind CSS',
        'RxJS',
        'Angular SSR',
        'REST APIs',
        'Git & GitHub'
      ],
      features: [
        'Product Listing & Details',
        'Search & Filtering',
        'Category Management',
        'Admin Dashboard',
        'Product CRUD Operations',
        'Inventory Management',
        'Responsive Design',
        'Loading States & Error Handling',
        'Server-Side Rendering (SSR)',
        'Performance Optimization'
      ],
      challenges: [
        'Implementing Angular SSR and hydration',
        'Designing reusable and scalable components',
        'Managing reactive state using RxJS',
        'Handling asynchronous API calls and loading states',
        'Maintaining responsiveness across devices'
      ],
      learnings: [
        'Angular Server-Side Rendering (SSR)',
        'Advanced RxJS & reactive programming',
        'Component-driven architecture',
        'State managemenr patterens',
        'Performance optimization techniques',
        'Building dashborad interfaces & CRUD workflows'
      ],
      github: 'https://github.com/Nihalad998/Ecommerce_StoreFront',
      liveDemo: 'https://ecommerce-store-analytics-vert.vercel.app/'
    },
    {
      title: 'Study With Me',
      description: 'A productivity-focused study application featuring customizable focus sessions, immersive visuals, and responsive design to encourage consistent study habits.',
      overview: 'Developed a productivity-focused web application inspired by virtual Study With Me sessions. The application provides structured focus sessions through customizable timers, ambient visuals, and an immersive user experience to help users maintain concentration and build consistent study habits. The project emphasizes responsive design, clean UI, and smooth interactions across devices.',
      problemSolved: 'Maintaining focus and avoiding distractions during study sessions can be challenging. This application addresses the issue by creating a distraction-free environment with timed focus sessions and an engaging interface that encourages productivity and time management..',
      technologies: [
        'Angular 18',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Git & GitHub'
      ],
      features: [
        'Pomodoro Timer',
        'Custom Study Sessions',
        'Ambient Study Experience',
        'Responsive Design',
        'Session Tracking',
        'Smooth Animations',
        'Dark Theme UI'
      ],
      challenges: [
        'Managing timer state and synchronization',
        'Handling interval cleanup and performance',
        'Creating smooth animations and transitions',
        'Designing an immersive user experience'
      ],
      learnings: [
        ' State management in Angular',
        'Timer implementation and lifecycle management',
        'Animation techniques',
        'Building responsive interfaces',
        'Component reusability and architecture'
      ],
      github: 'https://github.com/Nihalad998/study-with-me',
      liveDemo: 'https://studywith-me.netlify.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern developer portfolio showcasing projects, skills, and experience through interactive animations, responsive layouts, and engaging user experiences.',
      overview: 'Designed and developed a modern developer portfolio to showcase professional experience, technical skills, and featured projects. The application leverages Angular, Tailwind CSS, Three.js, and GSAP to deliver an interactive and visually engaging experience through custom animations, responsive layouts, and 3D elements.',
      problemSolved: 'Traditional resumes often fail to effectively demonstrate frontend development capabilities and project complexity. This portfolio provides an interactive platform where recruiters can explore projects, technical skills, and UI/UX expertise in a more engaging and memorable way.',
      technologies: [
        'Angular 18',
        'TypeScript',
        'Tailwind CSS',
        'Three.js',
        'GSAP',
        'Font Awesome',
        'Git & GitHub'
      ],
      features: [
        'Interactive 3D Hero Section',
        'Responsive Design',
        'Smooth GSAP Animations',
        'Dynamic Project Showcase',
        'Skills & Experience Sections',
        'Resume Download',
        'Social Media Integration',
        'Mobile-First Approach'
      ],
      challenges: [
        'Making Three.js elements responsive',
        'Optimizing animations for performance',
        'Managing layout consistency across devices',
        'Building reusable and maintainable components'
      ],
      learnings: [
        'Three.js fundamentals',
        'Advanced GSAP animations',
        'Responsive animation techniques',
        'Performance optimization strategies',
        'Designing premium user experiences'
      ],
      github: 'https://github.com/Nihalad998/portfolio2026',
      liveDemo: 'portfolio-nihal998.netlify.app'
    },
    {
      title: 'Task Manager',
      description: 'A Kanban-style task management application with drag-and-drop functionality and reactive state handling for organizing and tracking tasks efficiently.',
      overview: 'Developed a task management application inspired by Kanban boards to help users organize and track tasks efficiently. The application enables task creation, updating, deletion, and drag-and-drop interactions while maintaining reactive state management and a responsive user interface.',
      problemSolved: 'Managing tasks across multiple projects can become difficult without a structured workflow. This application addresses the issue by providing a visual task management system that simplifies organization, improves productivity, and offers a better overview of work progress.',
      technologies: [
        'Angular 13',
        'TypeScript',
        'RxJS',
        'Bootstrap',
        'Angular CDK',
      ],
      features: [
        'Task CRUD Operations',
        'Kanban Board Layout',
        'Drag-and-Drop Functionality',
        'Task Status Management',
        'Responsive Design',
        'Reactive State Handling',
        'Real-Time UI Updates'
      ],
      challenges: [
        'Implementing drag-and-drop interactions',
        'Managing application state reactively',
        'Synchronizing UI updates efficiently',
        'Designing scalable component architecture'
      ],
      learnings: [
        'Angular CDK Drag & Drop',
        'Advanced RxJS patterns',
        'State management principles',
        'Building reusable components',
        'Designing productivity applications'
      ],
      github: '',
      liveDemo: ''
    }
  ];

  activeProject: Project | null = null;

   ngOnInit(): void {
    this.setInitialProject();

    window.addEventListener(
      'resize', this.setInitialProject.bind(this)
    );
  }
  setInitialProject(): void {
    if (
      window.innerWidth >= 1024 &&
      !this.activeProject
    ) {
      this.activeProject = this.projects[0];
    }

    if (window.innerWidth < 1024) {
      this.activeProject = null;
    }
  }

  selectProject(project: Project): void {
  // console.log(
  //   'Clicked:', project.title,
  //   'Current:', this.activeProject?.title
  // );
    if (this.activeProject === project) {
      console.log('Closing');
      this.activeProject = null;
    } else {
      console.log('Opening');
      this.activeProject = project;
    }
  }

  onCardClick(project: Project): void {
    // Desktop only
    if(window.innerWidth >= 1024) {
      this.activeProject = project;
    }
  }

}
