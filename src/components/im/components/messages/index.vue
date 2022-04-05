<template>
  <ul class="c-im-messages">
    <li
      v-for="(item, index) in items.filter((item) => !item.retracted)"
      :key="item.id"
      class="c-im-messages__item"
      :class="item.fromUser.id === user.id ? 'is-me' : 'is-other'"
      :id="`message-${item.id}`"
    >
      <image
        class="c-im-messages__avatar"
        mode="aspectFill"
        :src="getAvatarUrl(item.fromUser)"
      />
      <div class="c-im-messages__time fs24 t-g7 u-tac">
        {{ formatTime(item.createdAt) }}
      </div>
      <div class="c-im-messages__body">
        <div class="c-im-messages__title fs24 t-g7">
          {{ item.fromUser.name || item.fromUser.wxNickName }}
        </div>
        <div class="c-im-messages__message fs26" @longtap="select(item)">
          <template v-if="item.type === 'Text'">
            {{ item.text }}
          </template>
          <template v-else-if="item.type === 'Image'">
            <img
              class="c-im-messages__image"
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
            v-if="false"
            v-show="item.id === cMessages.id"
            class="c-im-messages__retract"
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
