<template>
  <div class="p-im-chats-detail">
    <scroll-view class="b-messages" scroll-y :scroll-into-view="lastViewId">
      <gc-im-messages :items="items" @retract-ok="onMessageRetractOk" />
    </scroll-view>
    <gc-im-input @send="sendMessage" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
