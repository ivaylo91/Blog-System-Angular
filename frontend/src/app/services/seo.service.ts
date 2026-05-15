import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  set(options: { title: string; description: string; image?: string; type?: string; standalone?: boolean }): void {
    const fullTitle = options.standalone
      ? options.title
      : `${options.title} | Кулинарният блог на Иво`;
    const url = this.doc.location.origin + this.doc.location.pathname;
    const image = options.image ?? 'https://cookingblogofivo.eu/og-image.jpg';

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: options.description });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: options.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: options.type ?? 'website' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: options.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    const id = 'canonical-link';
    let el = this.doc.getElementById(id) as HTMLLinkElement | null;
    if (!el) {
      el = this.doc.createElement('link');
      el.id = id;
      (el as HTMLLinkElement).rel = 'canonical';
      this.doc.head.appendChild(el);
    }
    (el as HTMLLinkElement).href = url;
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
