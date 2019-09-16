<template>
  <div :class="[ 'p-trainer-comments-list', { 'pb': !query.my } ]">
    <ul
      v-if="list.items.length"
      class="u-pt16 u-pb16">
      <li
        v-for="item in list.items"
        :key="item"
        class="c-media c-media--bg bgc11">
        <video
          class="c-media__image"
          :src="$helpers.getImageById(item.attachmentId)">
        </video>
        <div class="c-media__body">
          <h2 class="c-media__title fs28">{{ item.content }}</h2>
          <h3 class="c-media__subtitle c31 fs24">{{ $time.getTime(item.createAt) }}</h3>
        </div>
      </li>
    </ul>
    <c-empty v-if="!list.items[0] && loaded"></c-empty>
    <div
      v-if="loaded && !query.my"
      class="c-submit-bar bgc11">
      <div class="c-submit-bar__price bgc11"></div>
      <div
        class="c-submit-bar__submit bgc26 c11 fs32 u-tac"
        @click="navigateTo(`/pages/trainer/comments/form/index?studentProductId=${query.studentProductId}`)">
        新增点评
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
