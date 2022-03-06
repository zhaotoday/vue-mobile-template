<template>
  <div>
    <u-upload
      :file-list="fileList"
      @afterRead="onAfterRead"
      @delete="onDelete"
    />
    {{ value }}
  </div>
</template>

<script src="./script.js"></script>
