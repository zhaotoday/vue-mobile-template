<template>
  <div>
    <c-im-chats :items="filteredItems" />
    <u-empty
      v-if="loaded && !filteredItems.length"
      mode="data"
      icon="https://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
      :text="$t('$.noData')"
    />
  </div>
</template>

<script src="./script.js"></script>
