<template>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Enter name"
    v-model.trim="task.name"
  />
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-1"
      v-model="task.categories"
      value="javascript"
    />
    <label class="form-check-label" for="check-1">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-2"
      v-model="task.categories"
      value="nodejs"
    />
    <label class="form-check-label" for="check-2">Node.js</label>
  </div>
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        id="radio-1"
        v-model="task.state"
        value="urgent"
      />
      <label class="form-check-label" for="radio-1">Urgent</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        id="radio-2"
        v-model="task.state"
        value="relax"
      />
      <label class="form-check-label" for="radio-2">Relax</label>
    </div>
  </div>
  <div class="mt-2">
    <input class="form-control" type="number" v-model.number="task.number" />
  </div>
  <button
    class="btn btn-dark mt-2 btn-block"
    type="submit"
    :disabled="isNameEmpty"
  >
    Process
  </button>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  computed: {
    isNameEmpty() {
      return this.task.name === "";
    },
  },
};
</script>
