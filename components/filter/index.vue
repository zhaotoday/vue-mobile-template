<template>
  <picker
    :range="range"
    :value.sync="value"
    @change="handleChange">
    <div class="c-filter bgc11 c35 fs24 u-tac">
      <span>{{ array[value].name || placeholder }}</span>
      <i class="c-icon c-icon--drop"></i>
    </div>
  </picker>
</template>

<script src="./script.js"></script>
