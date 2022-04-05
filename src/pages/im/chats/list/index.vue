<template>
  <div>
    <div class="bg-white u-pl24 u-pr24 u-pt24 u-pb24 u-mb26">
      <u-search
        ref="search"
        :placeholder="$t('inputs.userName')"
        focus
        height="60rpx"
        :show-action="false"
        @search="confirmSearch"
      />
    </div>
    <gc-im-chats
      :items="filteredItems"
      @goto-chat="
        (item) =>
          $wx.navigateTo(
            `/pages/im/chats/detail/index?toUserId=${item.user.id}&toUserName=${
              item.user.name || item.user.wxNickName || '--'
            }`
          )
      "
    />
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
