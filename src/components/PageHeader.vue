<script setup></script>
<template>
  <div class="flex flex-row items-start pb-10">
    <div class="w-[53px] h-[0px] border-2 border-accent mt-1 mr-3"></div>
    <div class="flex flex-col items-start">
      <h1 class="font-bowler text-2xl text-accent">
        <slot name="header"></slot>
      </h1>
      <p class="font-manrope text-sm"><slot name="text"></slot></p>
    </div>
  </div>
</template>
