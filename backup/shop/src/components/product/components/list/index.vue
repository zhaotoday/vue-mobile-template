<template>
  <div
    class="cc-list"
    :class="[
      `cc-list--col${col}`,
      selectable ? 'is-selectable' : '',
      customClass,
    ]"
  >
    <u-grid :col="col" :border="false">
      <u-grid-item v-for="(item, index) in items" :key="index">
        <div
          class="cc-list__box"
          @click="$wx.navigateTo(`/pages/products/detail/index?id=${item.id}`)"
        >
          <div class="cc-list__checkbox">
            <u-checkbox
              shape="circle"
              active-color="#5ac725"
              size="44rpx"
              :checked="item.selected"
              @change="selectProduct({ product: item })"
            />
          </div>
          <image
            :key="item.id"
            class="cc-list__image"
            mode="aspectFill"
            :src="
              col === 1
                ? $helpers.getImageUrl({
                    id: item.imageFileIds[0],
                    width: 120,
                    height: 120,
                  })
                : $helpers.getImageUrl({
                    id: item.imageFileIds[0],
                    width: 339,
                    height: 339,
                  })
            "
          />
          <div class="cc-list__name fs28 u-lh1">
            {{ getLocale() === "en" ? item.name : item.cnName }}
          </div>
          <div class="cc-list__price u-lh1">
            <span class="t-error fs26">
              {{ $t("$.money") }}{{ item.price }}
            </span>
            <span v-if="false" class="t-g7 u-lt fs24 u-ml10">200.0</span>
          </div>
          <div class="cc-list__number" @click.stop>
            <c-product-number
              v-if="editNumber"
              :product="item"
              :key="new Date().getTime()"
            />
            <div v-if="showNumber" class="fs24">x{{ item.number }}</div>
          </div>
          <template v-if="editable">
            <div
              class="cc-action cc-action--edit c-icon-tag--edit fs24"
              @click.stop="
                $wx.navigateTo(
                  `/pages/manage/products/form/index?categoryId=${item.categoryId}&id=${item.id}`
                )
              "
            >
              修改
            </div>
            <div
              class="cc-action cc-action--del c-icon-tag--del fs24"
              @click.stop="$emit('del', item)"
            >
              删除
            </div>
          </template>
        </div>
      </u-grid-item>
    </u-grid>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
