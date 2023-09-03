<template>
  <div @click="editor?.chain().focus().run()" :class="className">
    <EditorContent :editor="editor" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import {
  useEditor,
  EditorContent,
  JSONContent,
  Extension,
} from "@tiptap/vue-3";
import { EditorProps } from "@tiptap/pm/view";
import { Editor as EditorClass } from "@tiptap/core";
import { defaultEditorContent } from "../lib/default-content";
import { defaultExtensions } from "../components/extensions";
import { defaultEditorProps } from "../lib/props";

const props = defineProps({
  /**
   * The API route to use for the OpenAI completion API.
   * Defaults to "/api/generate".
   */
  completionApi: {
    type: String,
    default: "/api/generate",
  },
  /**
   * Additional classes to add to the editor container.
   * Defaults to "relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg".
   */
  className: {
    type: String,
    default:
      "relative min-h-[500px] w-full mx-auto max-w-screen-lg border-stone-200 bg-white p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg",
  },
  /**
   * The default value to use for the editor.
   * Defaults to defaultEditorContent.
   */
  defaultValue: {
    type: Object as PropType<JSONContent>,
    default: defaultEditorContent,
  },
  /**
   * A list of extensions to use for the editor, in addition to the default Novel extensions.
   * Defaults to [].
   */
  extensions: {
    type: Array as PropType<Extension[]>,
    default: [],
  },
  /**
   * Props to pass to the underlying Tiptap editor, in addition to the default Novel editor props.
   * Defaults to {}.
   */
  editorProps: {
    type: Object as PropType<EditorProps>,
    default: {},
  },
  /**
   * A callback function that is called whenever the editor is updated.
   * Defaults to () => {}.
   */
  onUpdate: {
    type: Function as PropType<(editor?: EditorClass) => void | Promise<void>>,
    default: () => {},
  },
  /**
   * A callback function that is called whenever the editor is updated, but only after the defined debounce duration.
   * Defaults to () => {}.
   */
  onDebouncedUpdate: {
    type: Function as PropType<(editor?: EditorClass) => void | Promise<void>>,
    default: () => {},
  },
  /**
   * The duration (in milliseconds) to debounce the onDebouncedUpdate callback.
   * Defaults to 750.
   */
  debounceDuration: {
    type: Number,
    default: 750,
  },
  /**
   * The key to use for storing the editor's value in local storage.
   * Defaults to "novel__content".
   */
  storageKey: {
    type: String,
    default: "novel__content",
  },
});

const editor = useEditor({
  extensions: [...defaultExtensions, ...props.extensions],
  editorProps: {
    ...defaultEditorProps,
    ...props.editorProps,
  },
  autofocus: "end",
});
</script>

<style scoped></style>
