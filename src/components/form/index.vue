<template>
  <div :class="$bem.box.$">
    <ul class="c-form c-form--inbox has-label">
      <slot :form="form" />
    </ul>
  </div>
</template>

<script src="./script.js"></script>
