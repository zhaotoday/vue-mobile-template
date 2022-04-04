<template>
  <ul class="c-chat-messages">
    <li
      v-for="(item, index) in items.filter((item) => !item.retracted)"
      :key="item.id"
      class="c-chat-messages__item"
      :class="item.fromUser.id === user.id ? 'is-me' : 'is-other'"
      :id="`message-${item.id}`"
    >
      <image class="c-chat-messages__avatar" :src="item.fromUser.avatar" />
      <div class="c-chat-messages__time fs24 t-g7 u-tac">
        {{ item.time }}
      </div>
      <div class="c-chat-messages__body">
        <div class="c-chat-messages__title fs24 t-g7">
          {{ item.fromUser.username }}
        </div>
        <div class="c-chat-messages__message fs26" @longtap="select(item)">
          <template v-if="item.type === 'Text'">
            {{ item.text }}
          </template>
          <template v-else-if="item.type === 'Image'">
            <img
              class="c-chat-messages__image"
              :src="getFileUrl(item.fileId)"
              @click="previewImage(getFileUrl(item.fileId))"
            />
          </template>
          <template v-else-if="item.type === 'Audio'">
            <b-audio
              :file-id="item.fileId"
              :index="index"
              :play-index="cAudio.playIndex"
              @play-index-change="($event) => (cAudio.playIndex = $event)"
            />
          </template>
          <div
            v-show="item.id === cMessages.id"
            class="c-chat-messages__retract"
            @click.stop="retract(item)"
          >
            <i class="c-iconfont c-iconfont--retract fs30"></i>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
