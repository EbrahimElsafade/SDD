import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  providers: [TranslateStore],
  templateUrl: './app.component.html',
})
export class AppComponent {
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
    this.applyLanguageClass(savedLang);
    this.updateHtmlLangAttribute(savedLang);

    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      this.applyLanguageClass(event.lang);
      this.updateHtmlLangAttribute(event.lang);
    });
  }



  private applyLanguageClass(lang: string) {
    const body = this.document.body;
    this.renderer.removeClass(body, 'en');
    this.renderer.removeClass(body, 'ar');
    this.renderer.addClass(body, lang);
  }

  private updateHtmlLangAttribute(lang: string) {
    const htmlElement = this.document.documentElement;
    this.renderer.setAttribute(htmlElement, 'lang', lang);
  }
}