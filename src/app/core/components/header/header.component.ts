import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { TranslateService, TranslateModule, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  providers: [TranslateStore],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    currentLanguage: string = 'en';
    lang!: string;
  
    constructor(
      private translate: TranslateService,
      @Inject(DOCUMENT) private document: Document,
      private renderer: Renderer2
    ) {
  
      const localStorage = document.defaultView?.localStorage;
      const savedLang = localStorage?.getItem('language') || 'en';
      this.translate.use(savedLang);
      this.lang = savedLang;
      
    }

  toggleLanguage() {

    
    const newLang = this.translate.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('language', newLang);
  }

}
