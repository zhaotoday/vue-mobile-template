<template>
  <li class="c-form__item">
    {{ $slots }}
    --{{ form }}--
    <label>{{ label }}</label>
    <slot />
  </li>
</template>

<script src="./script.js"></script>
