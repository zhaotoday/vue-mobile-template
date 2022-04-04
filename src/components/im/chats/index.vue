<template>
  <ul class="c-im-chats">
    <li
      v-for="item in items"
      :key="item.id"
      class="c-im-chats__item"
      @click="
        $wx.navigateTo(
          `/pages/chat/window/index?chatType=${item.type}&toUserId=${item.userId}`
        )
      "
    >
      <image
        v-if="item.avatar"
        class="c-im-chats__avatar"
        mode="aspectFill"
        :src="item.avatar"
      />
      <div v-else class="c-im-chats__avatar is-default"></div>
      <div v-if="item.unreadMessageCount" class="c-im-chats__count fs22">
        {{ item.unreadMessageCount }}
      </div>
      <div class="c-im-chats__body">
        <div class="c-im-chats__name fs32">{{ item.name }}</div>
        <div class="c-im-chats__message fs26 t-gray7">{{ item.message }}</div>
        <div class="c-im-chats__time fs26 t-gray7">{{ item.time }}</div>
      </div>
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
