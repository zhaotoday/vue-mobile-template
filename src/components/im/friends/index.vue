<template>
  <div>
    <ul class="c-friends">
      <li
        v-for="(item, index) in items"
        :key="item.id"
        :id="`chat-friend-${item.id}`"
        class="c-friends__item"
        @click="
          $wx.navigateTo(
            `/pages/chat/window/index?chatType=${chatType}&toUserId=${item.id}`
          )
        "
      >
        <image
          v-if="item.avatar"
          class="c-friends__avatar"
          mode="aspectFill"
          :src="item.avatar"
        />
        <div v-else class="c-friends__avatar is-default"></div>
        <div class="c-friends__name fs32">{{ item.name }}</div>
        <div
          v-if="hasAlias"
          class="c-friends__edit"
          @click.stop="
            showAlias({ friendUserId: item.id, alias: item.name, index })
          "
        >
          <i class="c-iconfont c-iconfont--edit fs30"></i>
        </div>
      </li>
    </ul>
    <cc-alias ref="alias" @ok="onAliasOk" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
