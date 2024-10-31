<template>
  <div>
    <div class="dark-light" @click="toggleDark">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div class="app">
      <AppBar />
      <div class="wrapper">
        <AppSideBar />
        <div class="main-container">
          <MainHeader />
          <!-- <Nuxt /> -->
           <NuxtPage />
        </div>
      </div>
      <div
        class="overlay-app"
        :class="{ 'is-active': popup }"
        @click="togglePopup"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/stores/themeStore'; 
import { usePopupStore } from '@/stores/popupStore'; 

const themeStore = useThemeStore();
const popupStore = usePopupStore(); 
const bodyAttrs = computed(() => ({ class: themeStore.theme }));

// 動態 body class
useHead({
  bodyAttrs: bodyAttrs
});

// 使用 onMounted 來檢查 localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('themeType');
  themeStore.setTheme(savedTheme ?? 'light-mode');
});

// 切換主題的方法
const toggleDark = () => {
  themeStore.toggleTheme();
  localStorage.setItem('themeType', themeStore.theme);
};

// Accessing popup state
const popup = computed(() => popupStore.popup); // Assuming `popup` is a reactive state in your popup store
const togglePopup = () => popupStore.togglePopup(); // Assuming this function exists in your popup store
</script>

<style>
/* Add your styles here */
</style>
