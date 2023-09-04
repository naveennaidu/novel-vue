<template>
  <BubbleMenu
    :editor="editor"
    class="flex bg-white border divide-x rounded shadow-xl w-fit divide-stone-200 border-stone-200"
  >
    <div class="flex">
      <NodeSelector :editor="editor" />
      <LinkSelector :editor="editor" />
      <button
        v-for="(item, index) in items"
        :key="index"
        @click="item.command()"
        class="p-2 text-stone-600 hover:bg-stone-100 active:bg-stone-200"
        type="button"
      >
        <component
          :is="item.icon"
          class="w-4 h-4"
          :class="{
            'text-blue-500': item.isActive(),
          }"
        />
      </button>
      <ColorSelector :editor="editor" />
    </div>
  </BubbleMenu>
</template>

<script setup lang="ts">
import { BubbleMenu } from "@tiptap/vue-3";
import { PropType } from "vue";
import { Editor } from "@tiptap/core";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  CodeIcon,
} from "lucide-vue-next";

import NodeSelector from "./NodeSelector.vue";
import LinkSelector from "./LinkSelector.vue";
import ColorSelector from "./ColorSelector.vue";

const props = defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
});

const items = [
  {
    name: "bold",
    isActive: () => props.editor.isActive("bold"),
    command: () => props.editor.chain().focus().toggleBold().run(),
    icon: BoldIcon,
  },
  {
    name: "italic",
    isActive: () => props.editor.isActive("italic"),
    command: () => props.editor.chain().focus().toggleItalic().run(),
    icon: ItalicIcon,
  },
  {
    name: "underline",
    isActive: () => props.editor.isActive("underline"),
    command: () => props.editor.chain().focus().toggleUnderline().run(),
    icon: UnderlineIcon,
  },
  {
    name: "strike",
    isActive: () => props.editor.isActive("strike"),
    command: () => props.editor.chain().focus().toggleStrike().run(),
    icon: StrikethroughIcon,
  },
  {
    name: "code",
    isActive: () => props.editor.isActive("code"),
    command: () => props.editor.chain().focus().toggleCode().run(),
    icon: CodeIcon,
  },
];
</script>

<style scoped></style>
