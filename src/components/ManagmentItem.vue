<script setup></script>
<template>
  <div
    class="bg-dark-bg w-2xs text-white font-manrope p-6 flex flex-col gap-1 max-md:w-full"
  >
    <p class="text-sm font-extrabold md:max-w-[80%]">
      <slot name="fullName"></slot>
    </p>
    <p class="text-[0.65rem] font-light"><slot name="postion"></slot></p>
    <div class="flex flex-row gap-2 items-center">
      <img src="../assets/img/phone.png" alt="" />
      <p clas>
        <slot name="number"> </slot>
      </p>
    </div>
  </div>
</template>
