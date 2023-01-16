<template>
  <div class="vc-categories u-pt24 u-pb10 bg-white" style="height: 504rpx">
    <swiper
      v-if="loaded"
      indicator-dots
      indicator-active-color="#5ac725"
      style="height: 504rpx"
    >
      <swiper-item
        v-for="(item1, index1) in $helpers.page(items, 15)"
        :key="index1"
      >
        <u-grid col="5" :border="false">
          <u-grid-item
            v-for="(item2, index2) in item1"
            :key="index2"
            @click="switchTabToCategories(index2)"
          >
            <u-avatar
              size="90rpx"
              mode="aspectFill"
              :src="
                $helpers.getImageUrl({
                  id: item2.iconFileId,
                  width: 90,
                  height: 90,
                })
              "
            />
            <div class="vc-categories__name fs24 u-pt10 u-pb10 u-lh1">
              {{ getLocale() === "en" ? item2.name : item2.cnName }}
            </div>
          </u-grid-item>
        </u-grid>
      </swiper-item>
    </swiper>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
