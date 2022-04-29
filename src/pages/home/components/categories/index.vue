<template>
  <ul class="b-categories u-pt24 u-pb10 bg-white">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="b-categories__item"
      @click="switchTabToCategories(index)"
    >
      <image
        class="b-categories__icon"
        mode="aspectFill"
        :src="$helpers.getFileUrl({ id: item.iconFileId })"
      />
      <div class="b-categories__name fs24 u-pt10 u-pb10 u-lh1">
        {{ item.name }}
      </div>
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
