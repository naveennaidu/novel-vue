<template>
  <Popover>
    <div class="relative">
      <PopoverButton
        class="flex items-center h-full gap-1 p-2 text-sm font-medium text-stone-600 hover:bg-stone-100 active:bg-stone-200 focus:outline-none"
      >
        <span
          class="px-1 rounded-sm"
          :style="{
            color: activeColorItem?.color,
            backgroundColor: activeHighlightItem?.color,
          }"
        >
          A
        </span>

        <ChevronDown class="w-4 h-4" />
      </PopoverButton>

      <PopoverPanel
        align="start"
        class="z-[99999] absolute my-1 flex max-h-80 w-48 flex-col overflow-hidden overflow-y-auto rounded border border-stone-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1"
        v-slot="{ close }"
      >
        <div class="px-2 my-1 text-sm text-stone-500">Color</div>
        <button
          v-for="(textColor, index) in TEXT_COLORS"
          :key="index"
          class="flex items-center justify-between px-2 py-1 text-sm rounded-sm text-stone-600 hover:bg-stone-100"
          type="button"
          @click="
            () => {
              editor.commands.unsetColor();
              textColor.name !== 'Default' &&
                editor
                  .chain()
                  .focus()
                  .setColor(textColor.color || '')
                  .run();
              close();
            }
          "
        >
          <div class="flex items-center space-x-2">
            <div
              class="px-1 py-px font-medium border rounded-sm border-stone-200"
              :style="{ color: textColor.color }"
            >
              A
            </div>
            <span>{{ textColor.name }}</span>
          </div>
          <Check
            v-if="editor.isActive('textStyle', { color: textColor.color })"
            class="w-4 h-4"
          />
        </button>
        <div class="px-2 mt-2 mb-1 text-sm text-stone-500">Background</div>
        <button
          v-for="(highlightColor, index) in HIGHLIGHT_COLORS"
          :key="index"
          @click="
            () => {
              editor.commands.unsetHighlight();
              highlightColor.name !== 'Default' &&
                editor.commands.setHighlight({ color: highlightColor.color });
              close();
            }
          "
          class="flex items-center justify-between px-2 py-1 text-sm rounded-sm text-stone-600 hover:bg-stone-100"
          type="button"
        >
          <div class="flex items-center space-x-2">
            <div
              class="px-1 py-px font-medium border rounded-sm border-stone-200"
              :style="{ backgroundColor: highlightColor.color }"
            >
              A
            </div>
            <span>{{ highlightColor.name }}</span>
          </div>

          <Check
            v-if="editor.isActive('highlight', { color: highlightColor.color })"
            class="w-4 h-4"
          />
        </button>
      </PopoverPanel>
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { Editor } from "@tiptap/core";
import { Check, ChevronDown } from "lucide-vue-next";
import { PropType, computed } from "vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const props = defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
});
const TEXT_COLORS = [
  {
    name: "Default",
    color: "var(--novel-black)",
  },
  {
    name: "Purple",
    color: "#9333EA",
  },
  {
    name: "Red",
    color: "#E00000",
  },
  {
    name: "Yellow",
    color: "#EAB308",
  },
  {
    name: "Blue",
    color: "#2563EB",
  },
  {
    name: "Green",
    color: "#008A00",
  },
  {
    name: "Orange",
    color: "#FFA500",
  },
  {
    name: "Pink",
    color: "#BA4081",
  },
  {
    name: "Gray",
    color: "#A8A29E",
  },
];

const HIGHLIGHT_COLORS = [
  {
    name: "Default",
    color: "var(--novel-highlight-default)",
  },
  {
    name: "Purple",
    color: "var(--novel-highlight-purple)",
  },
  {
    name: "Red",
    color: "var(--novel-highlight-red)",
  },
  {
    name: "Yellow",
    color: "var(--novel-highlight-yellow)",
  },
  {
    name: "Blue",
    color: "var(--novel-highlight-blue)",
  },
  {
    name: "Green",
    color: "var(--novel-highlight-green)",
  },
  {
    name: "Orange",
    color: "var(--novel-highlight-orange)",
  },
  {
    name: "Pink",
    color: "var(--novel-highlight-pink)",
  },
  {
    name: "Gray",
    color: "var(--novel-highlight-gray)",
  },
];

const activeColorItem = computed(() =>
  TEXT_COLORS.find(({ color }) => props.editor.isActive("textStyle", { color }))
);

const activeHighlightItem = computed(() =>
  HIGHLIGHT_COLORS.find(({ color }) =>
    props.editor.isActive("highlight", { color })
  )
);
</script>

<style scoped></style>
