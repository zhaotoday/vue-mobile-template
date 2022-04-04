<template>
  <div class="p-chat-message-window">
    <scroll-view
      class="b-chat-messages"
      scroll-y
      :scroll-into-view="lastViewId"
    >
      <c-chat-messages :items="list.items" />
    </scroll-view>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
