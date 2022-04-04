<template>
  <div>
    <div class="bg-white u-pt16 u-pb16">
      <c-search placeholder="请输入好友名称" @confirm="confirmSearch" />
    </div>
    <c-chat-list :items="filteredItems" />
    <c-empty v-if="loaded && !filteredItems.length" />
  </div>
</template>

<script src="./script.js"></script>
