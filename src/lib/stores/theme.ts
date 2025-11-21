import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (!browser) return 'light';
  const stored = window.localStorage.getItem('dbs-admin-theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const themeStore = writable<Theme>(getInitialTheme());

if (browser) {
  themeStore.subscribe((value) => {
    document.documentElement.classList.toggle('dark', value === 'dark');
    document.documentElement.style.colorScheme = value;
    window.localStorage.setItem('dbs-admin-theme', value);
  });
}

export const theme = {
  subscribe: themeStore.subscribe,
  set: themeStore.set,
  toggle: () => {
    themeStore.update((current) => (current === 'light' ? 'dark' : 'light'));
  }
};

