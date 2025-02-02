import { Component, Inject, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { TranslateService, TranslateModule, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-our-scope',
  standalone: true,
  imports: [CarouselModule, CardModule, TranslateModule, CommonModule],
  providers: [TranslateStore],
  templateUrl: './our-scope.component.html',
  styleUrls: ['./our-scope.component.scss'],
})
export class OurScopeComponent implements OnInit {
  currentLanguage: string = 'en';
  lang!: string;
  isRtl: boolean = false;

  cards = [
    {
      title: 'Government to Government Solutions',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: '<span class="icon-Layer_1-2"><span class="path1"></span><span class="path2"></span></span>',
      number: '01',
    },
    {
      title: 'Government to Users Solutions',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: '<span class="icon-Layer_1-1"><span class="path1"></span><span class="path2"></span></span>',
      number: '02',
    },
    {
      title: 'Safeguard and Cybersecurity',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: '<span class="icon-Layer_1"><span class="path1"></span><span class="path2"></span></span>',
      number: '03',
    },
    {
      title: 'AI and Machine Learning',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: '<span class="icon-Layer_1-1"><span class="path1"></span><span class="path2"></span></span>',
      number: '04',
    },
  ];

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const localStorage = this.document.defaultView?.localStorage;
    const savedLang = localStorage?.getItem('language') || 'en';
    this.translate.use(savedLang);

    // Update class for RTL
    this.lang = savedLang;
    this.isRtl = savedLang === 'ar';
  }

  toggleLanguage(): void {
    const newLang = this.lang === 'en' ? 'ar' : 'en';
    this.lang = newLang;

    // Update localStorage
    const localStorage = this.document.defaultView?.localStorage;
    localStorage?.setItem('language', newLang);
    this.translate.use(newLang);
    this.isRtl = newLang === 'ar';
  }
}
