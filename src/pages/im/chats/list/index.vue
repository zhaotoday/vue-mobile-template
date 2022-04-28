<template>
  <div>
    <!-- app computed bug -->
    <div v-show="false">{{ users.user }}</div>
    <div v-if="loggedIn()">
      <div class="bg-white u-pl24 u-pr24 u-pt24 u-pb24 u-mb26">
        <u-search
          ref="search"
          placeholder="请输入名字"
          focus
          height="60rpx"
          :show-action="false"
          @search="confirmSearch"
        />
      </div>
      <c-im-chats
        :items="filteredItems"
        @goto-chat="
          (item) =>
            $wx.navigateTo(
              `/pages/im/chats/detail/index?toUserId=${
                item.user.id
              }&toUserName=${item.user.name || item.user.wxNickName || '--'}`
            )
        "
      />
      <u-empty
        v-if="loaded && !filteredItems.length"
        mode="data"
        icon="https://cdn.uviewui.com/uview/empty/data.png"
        margin-top="100rpx"
        text="暂无数据"
      />
    </div>
    <div v-else>
      <u-empty
        mode="permission"
        icon="https://cdn.uviewui.com/uview/empty/permission.png"
        margin-top="100rpx"
        text="请登录"
      />
      <u-button
        type="primary"
        custom-style="width: 130rpx; margin-top: 20rpx"
        size="small"
        @click="$wx.navigateTo($consts.LoginUrl)"
      >
        登录
      </u-button>
    </div>
  </div>
</template>

<script src="./script.js"></script>
