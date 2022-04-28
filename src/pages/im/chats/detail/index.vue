<template>
  <div class="p-im-chats-detail">
    <scroll-view class="b-messages" scroll-y :scroll-into-view="lastViewId">
      <c-im-messages :items="items" @retract-ok="onMessageRetractOk" />
    </scroll-view>
    <c-im-input placeholder="请输入文字" send-text="发送" @send="sendMessage" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
