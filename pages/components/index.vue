<template>
  <div class="p-components">
    <div class="c-panel bgc11 u-mt18">
      <div class="c-panel__head">
        <div class="c-panel__title fs30">基础</div>
        <div class="c-panel__extra has-icon c37 fs24">
          更多
          <i class="c-icon c-icon--panel-more"></i>
        </div>
      </div>
      <div class="c-panel__body p30">
        aaa
      </div>
    </div>

    <h2>搜索框</h2>
    <p>
      <c-search
        placeholder="请输入..."
        show-submit>
      </c-search>
    </p>
    <h2>按钮</h2>
    <p>
      <button class="c-button br8 w1 h88 bgc21 c11 fs32">
        按钮
      </button>
    </p>
    <h2>头像</h2>
    <p>
      <img
        class="c-avatar"
        src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epGL9qnUFzOMHWV5OXLDhWdyPBVnpSSqUOZ4fQdasgMbfibSVJmbGakweaJXv51u6eoiaawvdBPPWVw/132"
      />
    </p>
    <h2>图标</h2>
    <p>
      <i class="c-icon c-icon--logo"></i>
    </p>
    <h2>标签</h2>
    <p>
      <span class="c-tag h30 br8 bdc21 c21 fs20">公司 XXXX</span>
    </p>
    <h2>暂无数据</h2>
    <p>
      <c-empty tip="暂无数据..."></c-empty>
    </p>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
