<template>
  <div class="vc-categories u-pt24 u-pb10 bg-white">
    <u-grid col="5" :border="false">
      <u-grid-item
        v-for="(item, index) in items"
        :key="index"
        @click="switchTabToCategories(index)"
      >
        <u-avatar
          size="90rpx"
          mode="aspectFill"
          :src="$helpers.getFileUrl({ id: item.iconFileId })"
        />
        <div class="vc-categories__name fs24 u-pt10 u-pb10 u-lh1">
          {{ getLocale() === "en" ? item.name : item.cnName }}
        </div>
      </u-grid-item>
    </u-grid>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
