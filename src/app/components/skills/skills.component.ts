import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  activeCard = 0;
  
  setActiveCard(index: number): void {
    this.activeCard = index;
    this.scrollToActiveCard();
  }

  getZIndex(index: number): number {
     if (index === this.activeCard) {
      return 100;
    }
    if (index < this.activeCard) {
      return 50 + index;
    }
    return 10 - index;
  }

  nextCard(): void {
    if (this.activeCard < 3)
      this.activeCard++;

    this.scrollToActiveCard();
  }
  prevCard(): void {
    if(this.activeCard > 0)
      this.activeCard--;

    this.scrollToActiveCard();
  }

  scrollToActiveCard(): void {
    const cards = this.scrollContainer.nativeElement.querySelectorAll('.skill-category');

    const activeCard = cards[this.activeCard];

    activeCard.scrollIntoView({
      behaviour: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }

  onScroll(): void {
    const container = this.scrollContainer.nativeElement;
    const cards = container.querySelectorAll('.skill-category');
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestCard = 0;
    let closestDistance = Infinity;

    cards.forEach((card: HTMLElement, index: number) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if(distance < closestDistance) {
        closestDistance = distance;
        closestCard = index;
      }
    });

    this.activeCard = closestCard;
  }
}
