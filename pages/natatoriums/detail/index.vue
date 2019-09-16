<template>
  <div class="p-natatoriums-detail">
    <ul class="c-tabs o-grid bgc11 fs28 u-tac">
      <li
        v-for="(item, index) in cTabs.tabs"
        :key="index"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === index } ]"
        @click="changeTab(index)">
        {{ item }}
      </li>
    </ul>
    <div class="c-tabs__contents">
      <scroll-view
        v-show="cTabs.current === 0"
        scroll-y>
        <ul class="u-pt16 u-cf">
          <li
            v-for="item in productsList.items"
            :key="item"
            class="c-media c-media--bg bgc11"
            @click="navigateTo(`/pages/products/detail/index?id=${item.id}`)">
            <img
              class="c-media__image"
              :src="$helpers.getImageById(item.pictures)"
              mode="aspectFill"
            />
            <div class="c-media__body">
              <h2 class="c-media__title fs32">{{ item.name }}</h2>
              <p class="c-media__subtitle">
                <span class="c23 fs24">￥</span>
                <span class="c23 fs40">{{ item.price }}</span>
                <span class="c35 fs26 u-lt">￥{{ item.originalPrice }}</span>
                <span class="c31 fs26">/{{ item.unit }}</span>
              </p>
            </div>
          </li>
        </ul>
      </scroll-view>
      <scroll-view
        v-show="cTabs.current === 1"
        scroll-y>
        <ul class="u-pt16 u-cf">
          <li
            v-for="item in trainersList.items"
            :key="item"
            class="c-media c-media--md bgc11">
            <img
              class="c-media__image"
              :src="$helpers.getImageById(item.avatarUrl)"
              mode="aspectFill"
            />
            <div class="c-media__body">
              <h2 class="c-media__title fs32">{{ item.name }}</h2>
              <p
                class="c-media__content c35 fs26"
                v-html="item.introduction">
              </p>
            </div>
          </li>
        </ul>
      </scroll-view>
      <scroll-view
        v-show="cTabs.current === 2"
        scroll-y>
        <ul class="u-pt16 u-cf">
          <li
            v-for="item in studentsList.items"
            :key="item"
            class="c-media c-media--bg bgc11">
            <video
              class="c-media__image"
              :src="$helpers.getImageById(item.picture)"
              controls>
            </video>
            <div class="c-media__body">
              <h2 class="c-media__title fs28">{{ item.introduction }}</h2>
            </div>
          </li>
        </ul>
      </scroll-view>
      <scroll-view
        v-show="cTabs.current === 3"
        scroll-y>
        <div class="c-panel u-pt16">
          <div
            class="c-panel__body bgc11 c35 fs28"
            style="padding-bottom: 0;">
            <ul class="bgc11 u-cf">
              <li
                v-for="item in newsList.items"
                :key="item"
                class="c-media c-media--sm"
                @click="navigateTo(`/pages/detail/index?id=${item.id}&title=新闻详情`)">
                <img
                  class="c-media__image"
                  :src="$helpers.getImageById(item.picture)"
                />
                <div class="c-media__body">
                  <h2 class="c-media__title fs30">{{ item.title }}</h2>
                  <div class="c-media__extra c31 fs24">{{ $time.getTime(item.createdAt) }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
