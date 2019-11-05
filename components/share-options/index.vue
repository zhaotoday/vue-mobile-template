<template>
  <div>
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('cancel')">
    </div>
    <div
      v-show="visible"
      class="c-share-options bgc34 u-tac">
      <div class="c-share-options__options bgc11">
        <button
          class="c-share-options__wechat c12 fs28"
          open-type="share"
          @click="$emit('cancel')">
          <i class="c-icon c-icon--wechat"></i>
          微信好友
        </button>
        <div
          class="c-share-options__image fs28"
          @click="$emit('create-image')">
          <i class="c-icon c-icon--image"></i>
          生成图片
        </div>
      </div>
      <div
        class="c-share-options__cancel bgc11 c31 fs32"
        @click="$emit('cancel')">
        取消
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
