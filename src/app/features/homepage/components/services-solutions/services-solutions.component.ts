import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-services-solutions',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  providers: [TranslateStore],
  templateUrl: './services-solutions.component.html',
  styleUrls: ['./services-solutions.component.scss'],
})
export class ServicesSolutionsComponent implements OnInit {
  categories = [
    'All',
    'Digital Infrastructure',
    'Operations Management',
    'Government Experience',
    'Training & Assessment',
  ];
  selectedCategory: string = 'All'; // Default category
  cards = [
    { title: 'Infrastructure', category: 'Digital Infrastructure', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few"></span>' },
    { title: 'Hosting', category: 'Operations Management', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-1"></span>' },
    { title: 'Optimize', category: 'Government Experience', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-2"></span>' },
    { title: 'Connect', category: 'Training & Assessment', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-3"></span>' },
    { title: 'Colocate', category: 'Digital Infrastructure', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-7"></span>' },
    { title: 'Insight', category: 'Operations Management', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-6"></span>' },
    { title: 'License', category: 'Government Experience', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-5"></span>' },
    { title: 'Assess', category: 'Training & Assessment', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-4"></span>' },
    { title: 'Infrastructure', category: 'Digital Infrastructure', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few"></span>' },
    { title: 'Hosting', category: 'Operations Management', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-1"></span>' },
    { title: 'Optimize', category: 'Government Experience', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-2"></span>' },
    { title: 'Connect', category: 'Training & Assessment', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1', icon: '<span class="icon-Heading-3--Here-are-a-few-3"></span>' },
  ];

  filteredCards = [...this.cards];
  visibleCards = 8;
  showMoreEnabled = false;

  ngOnInit() {
    this.filterCards();
  }

  // Filter cards based on selected category
  filterCards() {
    if (this.selectedCategory === 'All') {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter((card) => card.category === this.selectedCategory);
    }
    this.visibleCards = 8; 
    this.showMoreEnabled = this.filteredCards.length > this.visibleCards;
  }

  // Show more cards
  showMore() {
    this.visibleCards += 4;
    if (this.visibleCards >= this.filteredCards.length) {
      this.showMoreEnabled = false;
    }
  }

  // Handle tab selection
  onTabSelect(category: string) {
    this.selectedCategory = category;
    this.filterCards();
  }
}
