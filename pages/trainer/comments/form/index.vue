<template>
  <div class="p-trainer-comments-form">
    <h2 class="b-title c12 fs32">学员点评</h2>
    <textarea
      class="b-textarea fs28 bgc11"
      placeholder="请输入点评内容"
      v-model="cForm.content">
    </textarea>
    <h2 class="b-title c12 fs32">上传视频</h2>
    <button
      v-if="!cForm.attachmentId"
      class="b-upload bgc11"
      @click="chooseVideo">
    </button>
    <div
      v-else
      class="b-upload-file bgc11">
      <video
        :src="$helpers.getImageById(this.cForm.attachmentId)"
        controls>
      </video>
      <i
        class="c-icon c-icon--close"
        @click="delAttachment">
      </i>
    </div>
    <button
      class="c-button is-foot w650 h88 bgc26 c11 fs32"
      @click="submit">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
