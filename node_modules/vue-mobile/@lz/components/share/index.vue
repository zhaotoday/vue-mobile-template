<template>
  <div>
    <div v-show="visible" class="c-overlay" @click="$emit('cancel')"></div>
    <div v-show="visible" class="c-share bgc32">
      <div class="c-share__options o-grid u-tac bgc11 u-tac">
        <div class="o-grid__cell" @click="copyLink">
          <div class="c-wrapped-icon w80 bgc71 u-tac">
            <i class="c-iconfont c-iconfont--share-link c11 fs46"></i>
          </div>
          <h2 class="fs22">复制链接</h2>
        </div>
        <div class="o-grid__cell" @click="saveImage">
          <div class="c-wrapped-icon w80 bgc72 u-tac">
            <i class="c-iconfont c-iconfont--share-qrcode c11 fs46"></i>
          </div>
          <h2 class="fs22">生成二维码</h2>
        </div>
        <div class="o-grid__cell" @click="share('weixin', 'WXSceneSession')">
          <div class="c-wrapped-icon w80 bgc73 u-tac">
            <i class="c-iconfont c-iconfont--share-wechat c11 fs46"></i>
          </div>
          <h2 class="fs22">分享到微信</h2>
        </div>
        <div class="o-grid__cell" @click="share('weixin', 'WXSenceTimeline')">
          <div class="c-wrapped-icon w80 bgc74 u-tac">
            <i class="c-iconfont c-iconfont--share-space c11 fs46"></i>
          </div>
          <h2 class="fs22">微信朋友圈</h2>
        </div>
        <div class="o-grid__cell" @click="share('qq', 'WXSceneSession')">
          <div class="c-wrapped-icon w80 bgc75 u-tac">
            <i class="c-iconfont c-iconfont--share-qq c11 fs46"></i>
          </div>
          <h2 class="fs22">分享到QQ</h2>
        </div>
        <div class="o-grid__cell" @click="share('qq', 'WXSenceTimeline')">
          <div class="c-wrapped-icon w80 bgc76 u-tac">
            <i class="c-iconfont c-iconfont--share-qzone c11 fs46"></i>
          </div>
          <h2 class="fs22">QQ空间</h2>
        </div>
      </div>
      <div class="c-share__tip c37 fs24 bgc11">
        警示：邀请作弊（自己邀请自己、邀请大量机器人账号、无充值用户）将被系统自动扣除相应收益，严重者将被封禁账号！
      </div>
      <div
        class="c-share__cancel bgc11 c37 fs32 u-tac"
        @click="$emit('cancel')"
      >
        取消
      </div>
    </div>
    <c-qrcode
      class="c-share__qrcode"
      cid="qrcode"
      :text="url"
      logo="/static/logo.png"
      make-on-load
      @makeComplete="onMakeQrCode"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
