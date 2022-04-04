<template>
  <div class="p-im-chats-detail">
    <scroll-view class="b-messages" scroll-y :scroll-into-view="lastViewId">
      <c-messages :items="list.items" />
    </scroll-view>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
