<template>
  <div class="p-chat-window">
    <scroll-view
      class="b-chat-messages"
      scroll-y
      :scroll-into-view="lastViewId"
    >
      <c-chat-messages :items="items" @retract-ok="onMessageRetractOk" />
    </scroll-view>
    <c-chat-input @send="sendMessage" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
