<template>
  <c-dialog
    title="修改备注"
    :visible="cDialog.visible"
    @cancel="cDialog.visible = false"
    @confirm="confirm"
  >
    <div slot="body">
      <input
        class="c-dialog-input fs26"
        placeholder-class="t-placeholder"
        placeholder="请输入备注"
        v-model="cForm.model.alias"
      />
    </div>
  </c-dialog>
</template>

<script src="./script.js"></script>
