<template>
  <div class="p-news">
    <div class="c-panel bgc11 u-mt16 u-mb16">
      <div
        class="c-panel__body c35 fs28"
        style="padding-bottom: 0;">
        <ul>
          <li
            v-for="item in newsList.items"
            :key="item.id"
            class="c-media c-media--sm"
            @click="navigateTo(`/pages/detail/index?id=${item.id}&title=新闻详情`)">
            <img
              class="c-media__image"
              :src="$helpers.getImageById(item.picture)"
              mode="aspectFill"
            />
            <div class="c-media__body">
              <h2 class="c-media__title fs30">{{ item.title }}</h2>
              <div class="c-media__extra c31 fs24">{{ $time.getTime(item.createdAt) }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
