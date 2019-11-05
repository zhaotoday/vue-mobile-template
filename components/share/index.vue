<template>
  <div class="c-share">
    <c-share-options
      :visible="cOptions.visible"
      @cancel="cOptions.visible = false"
      @create-image="showPoster">
    </c-share-options>
    <c-poster
      :visible="cPoster.visible"
      :image="cPoster.image"
      @cancel="cPoster.visible = false"
      @save="savePosterImage">
    </c-poster>
    <div class="c-painter">
      <painter
        v-if="cPainter.palette.background && cPainter.palette.views[0].url"
        :palette="cPainter.palette"
        @imgOK="handlePainterImageOk">
      </painter>
    </div>
  </div>
</template>

<script src="./script.js"></script>
