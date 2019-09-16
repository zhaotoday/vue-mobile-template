<template>
  <div class="p-natatoriums-list">
    <ul class="u-cf u-pt16">
      <li
        v-for="item in list.items"
        :key="item"
        class="c-media c-media--bg bgc11"
        @click="navigateTo(`/pages/natatoriums/detail/index?id=${item.id}&title=${item.name}`)">
        <img
          class="c-media__image"
          :src="$helpers.getImageById(item.picture)"
          mode="aspectFill"
        />
        <div class="c-media__body">
          <h2 class="c-media__title fs28">{{ item.name }}</h2>
          <div
            class="c-media__content c35 fs24"
            v-html="item.introduction">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
