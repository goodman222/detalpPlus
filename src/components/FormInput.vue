<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
});
</script>

<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    class="w-full mb-4 font-manrope text-sm text-[#838383] border-white border-solid rounded-0 p-3.5"
  />
</template>
<style>
input {
  border: solid 2px #fff;
}
</style>
