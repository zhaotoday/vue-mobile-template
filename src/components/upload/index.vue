<template>
  <u-upload
    :file-list="fileList"
    :size-type="['compressed']"
    @afterRead="onAfterRead"
    @delete="onDelete"
  />
</template>

<script src="./script.js"></script>
