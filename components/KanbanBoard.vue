<script setup lang="ts">
import type { Column, Task } from "~/types";
import { nanoid } from "nanoid";

const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: "Backlog",
    tasks: [
      {
        id: nanoid(),
        title: "Create marketing landing page",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Develop cool new feature",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Fix page nav bug",
        createdAt: new Date(),
      },
    ],
  },
  {
    title: "Selected for Dev",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "In Progress",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "QA",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "Complete",
    id: nanoid(),
    tasks: [],
  },
]);
</script>

<template>
  <div class="flex gap-4 overflow-x-auto items-start">
    <div
      v-for="column in columns"
      :key="column.id"
      class="column bg-gray-200 p-5 rounded min-w-[250px]"
    >
      <header class="font-bold mb-4">{{ column.title }}</header>

      <KanbanBoardTask
        v-for="task in column.tasks"
        :key="task.id"
        :task="task"
      />
      <footer>
        <button class="text-gray-500">+ Add a Card</button>
      </footer>
    </div>
  </div>
</template>
