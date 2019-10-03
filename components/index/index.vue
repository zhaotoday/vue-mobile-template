<template>
  <div class="c-index">
    <div class="cc-list">
      <div class="cc-list__title bg31 fs28">
        A
      </div>
      <div
        v-for="item in 8"
        :key="item"
        class="cc-list__item bgc11 fs26">
        安顺
      </div>
    </div>
    <ul class="cc-letters">
      <li
        v-for="item in letters"
        :key="item"
        class="cc-letters__item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>
