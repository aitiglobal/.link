import type { Actions, PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.resolve('static', 'content.json');

function readContent() {
  try {
    return JSON.parse(fs.readFileSync(CONTENT_PATH, 'utf8'));
  } catch {
    return null;
  }
}

export const load: PageServerLoad = async () => {
  const content = readContent();
  return { content };
};

export const actions: Actions = {
  save: async ({ request }) => {
    const form = await request.formData();
    let pillars: any[] = [];
    const pillarsJson = String(form.get('services.pillarsJson') || '');
    if (pillarsJson) {
      try {
        const parsed = JSON.parse(pillarsJson);
        if (Array.isArray(parsed)) pillars = parsed;
      } catch {
        // ignore parse error, fallback to empty
      }
    }

    const content = {
      meta: {
        title: String(form.get('meta.title') || ''),
        description: String(form.get('meta.description') || '')
      },
      hero: {
        title: String(form.get('hero.title') || '')
      },
      services: {
        title: String(form.get('services.title') || ''),
        subtitle: String(form.get('services.subtitle') || ''),
        pillars
      },
      contact: {
        title: String(form.get('contact.title') || ''),
        body: String(form.get('contact.body') || ''),
        emailEncoded: String(form.get('contact.emailEncoded') || ''),
        phoneParts: String(form.get('contact.phoneParts') || '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      },
      nav: {
        home: String(form.get('nav.home') || ''),
        services: String(form.get('nav.services') || ''),
        contact: String(form.get('nav.contact') || '')
      },
      footer: String(form.get('footer') || '')
    };

    fs.writeFileSync(CONTENT_PATH, JSON.stringify(content, null, 2), 'utf8');

    return { success: true };
  }
};
