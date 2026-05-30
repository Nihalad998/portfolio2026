import { Component, ElementRef, ViewChild } from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule, NgFor } from "@angular/common";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  activeProject = 0;

  projects = [
    {
      title: 'Study With Me',
      image: '/Project/study-with-me.jpg',
      description: 'A productivity timer application with focus sessions and ambient experience.',
      tech: ['Angular', ' Tailwind',' TypeScript'],
      github: 'https://github.com/Nihalad998/study-with-me',
      live: 'https://studywith-me.netlify.app/'
    },
    {
      title: 'Task Manager',
      image: '/Project/trello.jpg',
      description: 'Task management board with drag and drop and reactive state handling.',
      tech: ['Angular', ' RxJS', ' Bootstrap'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      image: '/Project/portfolio.png',
      description: 'Modern portfolio using Angular, Tailwind and Three.js.',
      tech: ['Angular 18', ' Three.js', ' Tailwind'],
      github: '#',
      live: '#'
    }
  ];

  setActiveProject(index: number): void {

    this.activeProject = index;

    this.scrollToActiveProject();

  }

  nextProject(): void {

    if (this.activeProject < this.projects.length - 1) {

      this.activeProject++;

    }

    this.scrollToActiveProject();

  }

  prevProject(): void {

    if (this.activeProject > 0) {

      this.activeProject--;

    }

    this.scrollToActiveProject();

  }

  getZIndex(index: number): number {

    if (index === this.activeProject) {
      return 100;
    }

    if (index < this.activeProject) {
      return 50 + index;
    }

    return 10 - index;
  }


  onScroll(): void {

    const container =
      this.scrollContainer.nativeElement;

    const cards =
      container.querySelectorAll('.project-card');

    const containerCenter =
      container.scrollLeft +
      container.offsetWidth / 2;

    let closestCard = 0;
    let closestDistance = Infinity;

    cards.forEach((card: HTMLElement, index: number) => {

      const cardCenter =
        card.offsetLeft +
        card.offsetWidth / 2;

      const distance =
        Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {

        closestDistance = distance;
        closestCard = index;

      }

    });

    this.activeProject = closestCard;

  }

  scrollToActiveProject(): void {

    const cards =
      this.scrollContainer.nativeElement
        .querySelectorAll('.project-card');

    cards[this.activeProject].scrollIntoView({

      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'

    });

  }

}
