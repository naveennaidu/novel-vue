<template>
  <div class="relative">
    <button
      type="button"
      class="flex h-full items-center space-x-2 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 active:bg-stone-200"
      @click="isOpen = !isOpen"
    >
      <p class="text-base">↗</p>
      <p
        class="underline decoration-stone-400 underline-offset-4"
        :class="{
          'text-blue-500': editor.isActive('link'),
        }"
      >
        Link
      </p>
    </button>
    <form
      v-if="isOpen"
      @submit.prevent="submit"
      class="fixed top-full z-[99999] mt-1 flex w-60 overflow-hidden rounded border border-stone-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1"
    >
      <input
        ref="inputRef"
        type="text"
        placeholder="Paste a link"
        class="flex-1 p-1 text-sm bg-white outline-none"
        :defaultValue="editor.getAttributes('link').href || ''"
      />

      <button
        v-if="editor.getAttributes('link').href"
        type="button"
        class="flex items-center p-1 text-red-600 transition-all rounded-sm hover:bg-red-100 dark:hover:bg-red-800"
        @click="
          () => {
            editor.chain().focus().unsetLink().run();
            isOpen = false;
          }
        "
      >
        <Trash class="w-4 h-4" />
      </button>
      <button
        v-else
        class="flex items-center p-1 transition-all rounded-sm text-stone-600 hover:bg-stone-100"
      >
        <Check class="w-4 h-4" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Editor } from "@tiptap/core";
import { Check, Trash } from "lucide-vue-next";
import { PropType, ref } from "vue";

defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
});

const isOpen = ref(false);

const inputRef = ref<HTMLInputElement | null>(null);

function submit(e: any) {
  console.log(e);

  // const input = e.target[0] as HTMLInputElement;
  // const url = getUrlFromString(input.value);
  // url && editor.chain().focus().setLink({ href: url }).run();
  // setIsOpen(false);
}
</script>

<style scoped></style>
