<template>
  <div class="content-wrapper">
    <!-- <Banner
      title="Adobe Stock"
      text="Grab yourself 10 free images from Adobe Stock in a 30-day free trial
        plan and find perfect image, that will help you with your new project."
      image="glass.png"
      btntext="Start free trial"
    >
      <template slot="icon">
        <IconsSt />
      </template>
      <template slot="image"></template>
    </Banner> -->

    <!-- <Popup :class="{ visible: popup }" title="Update This App">
      <template slot="subtitle">
        Adjust your selections for advanced options as desired before
        continuing.
        <a href="#">Learn more</a>
      </template>
      <template slot="body">
        <div class="checkbox-wrapper">
          <input type="checkbox" id="check1" class="checkbox" />
          <label for="check1">Import previous settings and preferences</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="check2" class="checkbox" />
          <label for="check2">Remove old versions</label>
        </div>
        <div class="content-button-wrapper">
          <button
            class="content-button status-button open close"
            @click="togglePopup"
          >
            Cancel
          </button>
          <button class="content-button status-button">Continue</button>
        </div>
      </template>
    </Popup> -->

    <!-- <div class="content-section">
      <div class="content-section-title">Installed</div>
      <InstalledApps />
    </div> -->
    <!-- <div class="content-section">
      <div class="content-section-title">Apps in your plan</div>
      <div class="apps-card">
        <AppCard
          title="Premiere Pro"
          subtext="Edit, master and create fully proffesional videos"
        >
          <template slot="icon">
            <IconsPr />
          </template>
          <template slot="footer">
            <button
              class="content-button status-button"
              @click="togglePopup"
            >
              Update
            </button>
          </template>
        </AppCard>

        <AppCard
          title="InDesign"
          subtext="Design and publish great projects & mockups"
        >
          <template slot="icon">
            <IconsId />
          </template>
          <template slot="footer">
            <button
              class="content-button status-button"
              @click="togglePopup"
            >
              Update
            </button>
          </template>
        </AppCard>

        <AppCard
          title="After Effects"
          subtext="Industry Standart motion graphics & visual effects"
        >
          <template slot="icon">
            <IconsAe />
          </template>
          <template slot="footer">
            <button
              class="content-button status-button"
              @click="togglePopup"
            >
              Update
            </button>
          </template>
        </AppCard>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePopupStore } from '~/stores/popupStore'; 

const popupStore = usePopupStore(); // Assuming this is a store for popup management

const popup = computed(() => popupStore.popup);
const togglePopup = () => popupStore.togglePopup();
</script>