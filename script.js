const Component = {
  data() {
    return {
      taskToDo: "",
      tasks: [],
      tasksInProgress: [],
      endedTasks: [],
    };
  },

  methods: {
    task(e) {
      this.taskToDo = e.target.value;
    },

    addTask() {
      this.tasks.push(this.taskToDo);
      this.taskToDo = " ";
    },

    startTask(index) {
      this.tasksInProgress.push(this.tasks[index]);
      this.tasks.splice(index, 1);
    },
    endTask(index) {
      this.endedTasks.push(this.tasksInProgress[index]);
      this.tasksInProgress.splice(index, 1);
    },
    removeTask(index) {
      this.endedTasks.splice(index, 1);
    },
  },
};

Vue.createApp(Component).mount("#root");
