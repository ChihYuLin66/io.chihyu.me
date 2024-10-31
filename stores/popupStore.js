import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popup', {
  state: () => ({
    isOpen: false, // Initial state for the popup
  }),
  actions: {
    togglePopup() {
      this.isOpen = !this.isOpen; // Toggle the popup state
    },
    openPopup() {
      this.isOpen = true; // Open the popup
    },
    closePopup() {
      this.isOpen = false; // Close the popup
    },
  },
});
