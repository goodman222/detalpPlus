<script setup>
import RedHeader from "../RedHeader.vue";
import ManagmentItem from "../ManagmentItem.vue";
</script>
<template>
  <section class="md:bg-grey-background w-full pt-12 max-md:px-3.5">
    <div class="mx-auto">
      <RedHeader class="text-center">Руководство</RedHeader>
      <div
        class="flex flex-row gap-5 justify-center mt-6 max-md:flex-col md-max:items-center"
      >
        <ManagmentItem class="">
          <template v-slot:fullName>Чакин Константин Викторович</template>
          <template v-slot:postion>Генеральный директор</template>
          <template v-slot:number>+7 (982) 502-54-69</template>
        </ManagmentItem>
        <ManagmentItem>
          <template v-slot:fullName>Шайхутдинов Руслан Шамильевич</template>
          <template v-slot:postion>Технический директор</template>
          <template v-slot:number>+7 (922) 965-94-55</template>
        </ManagmentItem>
      </div>
    </div>
  </section>
</template>
