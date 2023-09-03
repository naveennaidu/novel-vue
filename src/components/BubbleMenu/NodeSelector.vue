<template>
  <Popover>
    <div class="relative">
      <PopoverButton
        class="flex items-center gap-1 p-2 text-sm font-medium whitespace-nowrap text-stone-600 hover:bg-stone-100 active:bg-stone-200 focus:outline-none"
      >
        <span>{{ activeItem?.name }}</span>
        <ChevronDown class="w-4 h-4" />
      </PopoverButton>

      <PopoverPanel
        align="start"
        class="z-[99999] absolute my-1 flex max-h-80 w-48 flex-col overflow-hidden overflow-y-auto rounded border border-stone-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1"
        v-slot="{ close }"
      >
        <button
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center justify-between px-2 py-1 text-sm rounded-sm text-stone-600 hover:bg-stone-100"
          type="button"
          @click="
            () => {
              item.command();
              close();
            }
          "
        >
          <div class="flex items-center space-x-2">
            <div class="p-1 border rounded-sm border-stone-200">
              <component :is="item.icon" class="w-3 h-3" />
            </div>
            <span>{{ item.name }}</span>
          </div>
          <Check v-if="activeItem.name === item.name" class="w-4 h-4" />
        </button>
      </PopoverPanel>
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { Editor } from "@tiptap/core";
import {
  Check,
  ChevronDown,
  Heading1,
  Heading2,
  Heading3,
  TextQuote,
  ListOrdered,
  TextIcon,
  Code,
  CheckSquare,
} from "lucide-vue-next";
import { PropType, computed } from "vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const props = defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
});

const items = [
  {
    name: "Text",
    icon: TextIcon,
    command: () =>
      props.editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
    isActive: () =>
      props.editor.isActive("paragraph") &&
      !props.editor.isActive("bulletList") &&
      !props.editor.isActive("orderedList"),
  },
  {
    name: "Heading 1",
    icon: Heading1,
    command: () =>
      props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => props.editor.isActive("heading", { level: 1 }),
  },
  {
    name: "Heading 2",
    icon: Heading2,
    command: () =>
      props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => props.editor.isActive("heading", { level: 2 }),
  },
  {
    name: "Heading 3",
    icon: Heading3,
    command: () =>
      props.editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: () => props.editor.isActive("heading", { level: 3 }),
  },
  {
    name: "To-do List",
    icon: CheckSquare,
    command: () => props.editor.chain().focus().toggleTaskList().run(),
    isActive: () => props.editor.isActive("taskItem"),
  },
  {
    name: "Bullet List",
    icon: ListOrdered,
    command: () => props.editor.chain().focus().toggleBulletList().run(),
    isActive: () => props.editor.isActive("bulletList"),
  },
  {
    name: "Numbered List",
    icon: ListOrdered,
    command: () => props.editor.chain().focus().toggleOrderedList().run(),
    isActive: () => props.editor.isActive("orderedList"),
  },
  {
    name: "Quote",
    icon: TextQuote,
    command: () =>
      props.editor
        .chain()
        .focus()
        .toggleNode("paragraph", "paragraph")
        .toggleBlockquote()
        .run(),
    isActive: () => props.editor.isActive("blockquote"),
  },
  {
    name: "Code",
    icon: Code,
    command: () => props.editor.chain().focus().toggleCodeBlock().run(),
    isActive: () => props.editor.isActive("codeBlock"),
  },
];

const activeItem = computed(
  () =>
    items.filter((item) => item.isActive()).pop() ?? {
      name: "Multiple",
    }
);
</script>

<style scoped></style>
