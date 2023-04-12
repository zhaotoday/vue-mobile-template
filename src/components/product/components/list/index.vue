<template>
  <div
    class="b-list"
    :class="[
      `b-list--col${col}`,
      selectable ? 'is-selectable' : '',
      customClass,
    ]"
  >
    <u-grid :col="col" :border="false">
      <u-grid-item v-for="(item, index) in items" :key="index">
        <div
          class="b-list__box"
          @click="$uni.navigateTo(`/pages/products/detail/index?id=${item.id}`)"
        >
          <div class="b-list__checkbox">
            <u-checkbox
              shape="circle"
              active-color="#5ac725"
              size="44rpx"
              :checked="item.selected"
              @change="selectProduct({ product: item })"
            />
          </div>
          <image
            class="b-list__image"
            mode="aspectFill"
            :src="$helpers.getFileUrl({ id: item.imageFileIds[0] })"
          />
          <div class="b-list__name fs28 u-lh1">
            {{ item.name }}
          </div>
          <div class="b-list__price u-lh1">
            <span class="t-error fs26"> ¥{{ item.price }} </span>
            <span v-if="false" class="t-g7 u-lt fs24 u-ml10">200.0</span>
          </div>
          <div class="b-list__number" @click.stop>
            <c-product-number v-if="editNumber" :product="item" />
            <div v-if="showNumber" class="fs24">x{{ item.number }}</div>
          </div>
          <template v-if="editable">
            <div
              class="b-action b-action--edit c-icon-tag--edit fs24"
              @click.stop="
                $uni.navigateTo(
                  `/pages/manage/products/form/index?categoryId=${item.categoryId}&id=${item.id}`
                )
              "
            >
              修改
            </div>
            <div
              class="b-action b-action--del c-icon-tag--del fs24"
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
