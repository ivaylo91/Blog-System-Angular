import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  set(options: { title: string; description: string; image?: string }): void {
    const fullTitle = `${options.title} | Кулинарният блог на Иво`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: options.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: options.description });

    if (options.image) {
      this.meta.updateTag({ property: 'og:image', content: options.image });
    }
  }

  setJsonLd(data: object): void {
    const id = 'json-ld-schema';
    let el = this.doc.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = this.doc.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  removeJsonLd(): void {
    this.doc.getElementById('json-ld-schema')?.remove();
  }
}
