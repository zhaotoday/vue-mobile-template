<template>
  <div class="p-products-search">
    <div class="bg-white u-pl24 u-pr24 u-pt24 u-pb24 u-mb26">
      <u-search
        ref="search"
        :placeholder="$t('inputs.productName')"
        focus
        height="60rpx"
        :show-action="false"
        @search="search"
      />
    </div>
    <div class="b-keywords bg-white">
      <template v-if="history[0]">
        <h2 class="b-title fs28">
          {{ pt("$.history") }}
          <i
            class="b-clear c-iconfont c-iconfont--delete"
            @click="clearHistory"
          ></i>
        </h2>
        <ul class="b-tags">
          <li
            v-for="(item, index) in history"
            :key="index"
            class="b-tags__item c-tag h56 bg-g2 u-br10 fs26"
            @click="search(item)"
          >
            {{ item }}
          </li>
        </ul>
      </template>
      <h2 class="b-title fs28">{{ pt("$.hot") }}</h2>
      <ul class="b-tags">
        <li
          v-for="(item, index) in hotKeywords"
          :key="index"
          class="b-tags__item c-tag h56 bg-g2 u-br10 fs26"
          @click="search(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
