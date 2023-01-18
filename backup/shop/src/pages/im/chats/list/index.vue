<template>
  <div>
    <!-- app computed bug -->
    <div v-show="false">{{ users.user }}</div>
    <div v-if="loggedIn()">
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
        icon="https://fzxxdd-sol.oss-ap-southeast-2.aliyuncs.com/avatars/2023-01-18/b53ae50b-4bf7-4469-bd87-ccd0f7da3663.png"
        margin-top="100rpx"
        :text="$t('$.noData')"
      />
    </div>
    <div v-else>
      <u-empty
        mode="permission"
        icon="https://fzxxdd-sol.oss-ap-southeast-2.aliyuncs.com/avatars/2023-01-18/8b482ccb-1cfe-4957-b2ac-47dcdd88129b.png"
        margin-top="100rpx"
        :text="$t('tips.pleaseLogin')"
      />
      <u-button
        type="primary"
        custom-style="width: 130rpx; margin-top: 20rpx"
        size="small"
        @click="$wx.navigateTo($consts.LoginUrl)"
      >
        {{ $t("$.login") }}
      </u-button>
    </div>
  </div>
</template>

<script src="./script.js"></script>
