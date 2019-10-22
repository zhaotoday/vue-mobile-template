<template>
  <div class="c-index">
    <scroll-view
      class="c-index__scroll"
      scroll-y
      :scroll-into-view="cScroll.intoView">
      <div
        v-for="cityGroup in cities.cityGroups"
        :key="cityGroup.initial"
        :id="cityGroup.initial"
        class="cc-list">
        <div class="cc-list__title bg31 fs28">
          {{ cityGroup.initial }}
        </div>
        <div
          v-for="city in cityGroup.items"
          :key="cityGroup.initial + city.code"
          class="cc-list__item bgc11 fs26">
          {{ city.name }}
        </div>
      </div>
    </scroll-view>
    <ul class="cc-letters bgc11 c21 fs24">
      <li
        v-for="item in letters"
        :key="item"
        class="cc-letters__item"
        @click="scrollIntoView(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>
