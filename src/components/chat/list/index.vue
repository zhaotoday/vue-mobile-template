<template>
  <ul class="c-chat-list">
    <li
      v-for="item in items"
      :key="item.id"
      class="c-chat-list__item"
      @click="
        $wx.navigateTo(
          `/pages/chat/window/index?chatType=${item.type}&toUserId=${item.userId}`
        )
      "
    >
      <image
        v-if="item.avatar"
        class="c-chat-list__avatar"
        mode="aspectFill"
        :src="item.avatar"
      />
      <div v-else class="c-chat-list__avatar is-default"></div>
      <div v-if="item.unreadMessageCount" class="c-chat-list__count fs22">
        {{ item.unreadMessageCount }}
      </div>
      <div class="c-chat-list__body">
        <div class="c-chat-list__name fs32">{{ item.name }}</div>
        <div class="c-chat-list__message fs26 t-gray7">{{ item.message }}</div>
        <div class="c-chat-list__time fs26 t-gray7">{{ item.time }}</div>
      </div>
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
