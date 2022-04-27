<template>
  <div class="p-im-chats-detail">
    <scroll-view class="b-messages" scroll-y :scroll-into-view="lastViewId">
      <c-im-messages :items="items" @retract-ok="onMessageRetractOk" />
    </scroll-view>
    <c-im-input
      :placeholder="$t('inputs.words')"
      :send-text="$t('$.send')"
      @send="sendMessage"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
