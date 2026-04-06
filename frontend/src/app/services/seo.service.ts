import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

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
}
