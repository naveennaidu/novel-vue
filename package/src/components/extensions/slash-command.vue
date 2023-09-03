<template>
  <div></div>
</template>

<script setup lang="ts">
// import { Editor, Range, Extension } from "@tiptap/core";
// import Suggestion from "@tiptap/suggestion";
// import {
//   Heading1,
//   Heading2,
//   Heading3,
//   List,
//   ListOrdered,
//   MessageSquarePlus,
//   Text,
//   TextQuote,
//   Image as ImageIcon,
//   Code,
//   CheckSquare,
// } from "lucide-vue-next";
// import Magic from "../icons/magic.vue";

// interface CommandProps {
//   editor: Editor;
//   range: Range;
// }

// const componentMapping = {
//   Magic: Magic,
//   MessageSquarePlus: MessageSquarePlus,
//   Text: Text,
//   CheckSquare: CheckSquare,
//   Heading1: Heading1,
//   Heading2: Heading2,
//   Heading3: Heading3,
//   List: List,
//   ListOrdered: ListOrdered,
//   TextQuote: TextQuote,
//   Code: Code,
//   ImageIcon: ImageIcon,
// };

// const Command = Extension.create({
//   name: "slash-command",
//   addOptions() {
//     return {
//       suggestion: {
//         char: "/",
//         command: ({
//           editor,
//           range,
//           props,
//         }: {
//           editor: Editor;
//           range: Range;
//           props: any;
//         }) => {
//           props.command({ editor, range });
//         },
//       },
//     };
//   },
//   addProseMirrorPlugins() {
//     return [
//       Suggestion({
//         editor: this.editor,
//         ...this.options.suggestion,
//       }),
//     ];
//   },
// });

// const getSuggestionItems = ({ query }: { query: string }) => {
//   return [
//     {
//       title: "Continue writing",
//       description: "Use AI to expand your thoughts.",
//       searchTerms: ["gpt"],
//       icon: "Magic",
//       iconProps: { className: "w-7" },
//     },
//     {
//       title: "Send Feedback",
//       description: "Let us know how we can improve.",
//       icon: "MessageSquarePlus",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor.chain().focus().deleteRange(range).run();
//         window.open("/feedback", "_blank");
//       },
//     },
//     {
//       title: "Text",
//       description: "Just start typing with plain text.",
//       searchTerms: ["p", "paragraph"],
//       icon: "Text",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor
//           .chain()
//           .focus()
//           .deleteRange(range)
//           .toggleNode("paragraph", "paragraph")
//           .run();
//       },
//     },
//     {
//       title: "To-do List",
//       description: "Track tasks with a to-do list.",
//       searchTerms: ["todo", "task", "list", "check", "checkbox"],
//       icon: "CheckSquare",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor.chain().focus().deleteRange(range).toggleTaskList().run();
//       },
//     },
//     {
//       title: "Heading 1",
//       description: "Big section heading.",
//       searchTerms: ["title", "big", "large"],
//       icon: "Heading1",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor
//           .chain()
//           .focus()
//           .deleteRange(range)
//           .setNode("heading", { level: 1 })
//           .run();
//       },
//     },
//     {
//       title: "Heading 2",
//       description: "Medium section heading.",
//       searchTerms: ["subtitle", "medium"],
//       icon: "Heading2",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor
//           .chain()
//           .focus()
//           .deleteRange(range)
//           .setNode("heading", { level: 2 })
//           .run();
//       },
//     },
//     {
//       title: "Heading 3",
//       description: "Small section heading.",
//       searchTerms: ["subtitle", "small"],
//       icon: "Heading3",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor
//           .chain()
//           .focus()
//           .deleteRange(range)
//           .setNode("heading", { level: 3 })
//           .run();
//       },
//     },
//     {
//       title: "Bullet List",
//       description: "Create a simple bullet list.",
//       searchTerms: ["unordered", "point"],
//       icon: "List",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor.chain().focus().deleteRange(range).toggleBulletList().run();
//       },
//     },
//     {
//       title: "Numbered List",
//       description: "Create a list with numbering.",
//       searchTerms: ["ordered"],
//       icon: "ListOrdered",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) => {
//         editor.chain().focus().deleteRange(range).toggleOrderedList().run();
//       },
//     },
//     {
//       title: "Quote",
//       description: "Capture a quote.",
//       searchTerms: ["blockquote"],
//       icon: "TextQuote",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) =>
//         editor
//           .chain()
//           .focus()
//           .deleteRange(range)
//           .toggleNode("paragraph", "paragraph")
//           .toggleBlockquote()
//           .run(),
//     },
//     {
//       title: "Code",
//       description: "Capture a code snippet.",
//       searchTerms: ["codeblock"],
//       icon: "Code",
//       iconProps: { size: 18 },
//       command: ({ editor, range }: CommandProps) =>
//         editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
//     },
// {
//   title: "Image",
//   description: "Upload an image from your computer.",
//   searchTerms: ["photo", "picture", "media"],
//   icon: "ImageIcon",
//   iconProps: { size: 18 },
//   command: ({ editor, range }: CommandProps) => {
//     editor.chain().focus().deleteRange(range).run();
//     // upload image
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/*";
//     input.onchange = async () => {
//       if (input.files?.length) {
//         const file = input.files[0];
//         const pos = editor.view.state.selection.from;
//         startImageUpload(file, editor.view, pos);
//       }
//     };
//     input.click();
//   },
// },
//   ].filter((item) => {
//     if (typeof query === "string" && query.length > 0) {
//       const search = query.toLowerCase();
//       return (
//         item.title.toLowerCase().includes(search) ||
//         item.description.toLowerCase().includes(search) ||
//         (item.searchTerms &&
//           item.searchTerms.some((term: string) => term.includes(search)))
//       );
//     }
//     return true;
//   });
// };

// const updateScrollView = (container: HTMLElement, item: HTMLElement) => {
//   const containerHeight = container.offsetHeight;
//   const itemHeight = item ? item.offsetHeight : 0;

//   const top = item.offsetTop;
//   const bottom = top + itemHeight;

//   if (top < container.scrollTop) {
//     container.scrollTop -= container.scrollTop - top + 5;
//   } else if (bottom > containerHeight + container.scrollTop) {
//     container.scrollTop += bottom - containerHeight - container.scrollTop + 5;
//   }
// };
</script>
