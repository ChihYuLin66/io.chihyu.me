import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light-mode',
  }),
  persist: true, // Optional: Use if you want to persist state in localStorage
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    },
    setTheme(theme) {
      this.theme = theme;
    },
  },
});
