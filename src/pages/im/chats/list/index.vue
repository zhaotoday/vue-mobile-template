<template>
  <div>
    <div class="bg-white u-pl24 u-pr24 u-pt24 u-pb24 u-mb26">
      <u-search
        ref="search"
        :placeholder="$t('inputs.productName')"
        focus
        height="60rpx"
        :show-action="false"
        @search="confirmSearch"
      />
    </div>
    <gc-im-chats :items="filteredItems" />
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
