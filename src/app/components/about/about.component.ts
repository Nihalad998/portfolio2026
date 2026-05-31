import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  roles = [
    'Angular Developer',
    'Frontend Developer',
    'UI Enthusiast'
  ];

  currentRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {
    const currentText =
      this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.currentRole = currentText.substring(0, this.charIndex + 1);

      this.charIndex++;

      if (this.charIndex === currentText.length) {
        this.isDeleting = true;
        setTimeout(() => this.typeEffect(), 1500);
        return;
      }
    } else {
      this.currentRole = currentText.substring(0, this.charIndex - 1);

      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    setTimeout(
      () => this.typeEffect(),
      this.isDeleting ? 50 : 100
    );
  }

  ngAfterViewInit() {
    gsap.from('.about-reveal', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,

      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
      },
    });
  }

}
