<script  setup>
import { ref } from 'vue'
const url = 'https://api.mcstatus.io/v2/status/java/guerraavtmsmp.jogar.io'

const response = await fetch(url)

const officialServer = await ref(response)
officialServer.value = await officialServer.value.json()

const statusColor = [
  '#00FF1A',
  '#FF0E0E'
]

const currentStatusColor = ref('')
if (officialServer.value.online) {
  currentStatusColor.value = statusColor[0]
} else {
  currentStatusColor.value = statusColor[1]

}
</script>

<template>
  <div class="wrapper">
    <img :src="`https://api.mcstatus.io/v2/icon/${officialServer.host}`" class="serverImage">
    <div class="info">
      <span class="serverTitle">AVTMSMP : Guerra</span>
      <div class="status">
        <span class="presence">
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" :fill="currentStatusColor" />
          </svg>

          <span v-if="officialServer.online">Online</span>
          <span v-else>Offline</span>

        </span>

        <span v-if="officialServer.online">|</span>
        <span v-if="officialServer.online" class="playerCount">{{ officialServer.players.online }} Players</span>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.wrapper {
  border: 1px solid var(--sl-color-gray-5);
  border-radius: var(--pagefind-ui-border-radius);
  background-color: var(--sl-color-bg);

  overflow: hidden;
  display: flex;
  gap: 0.5rem;

  font-size: var(--sl-text-sm);
  align-items: center;
  padding-right: 0.5rem;

  color: var(--sl-color-text);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: normal;
}

.serverTitle {
  font-weight: bold;
  size: 110%;
}

.status {
  display: inherit;
  align-items: center;
  gap: 6px;
}

.presence {
  display: inherit;
  align-items: inherit;
  gap: 4px;
}

.serverImage {
  height: 40px;
}</style>