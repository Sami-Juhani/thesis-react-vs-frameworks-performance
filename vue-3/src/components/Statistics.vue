<template>
  <div>
    <h3 class="mb-2">{{ title }}</h3>
    <h4 class="mb-2">Updated at: {{ currentDate }}</h4>
    <ul class="stats-list">
      <li>
        Posts: <span>{{ posts }}</span>
      </li>
      <li>
        Comments: <span>{{ comments }}</span>
      </li>
      <li>
        Users: <span>{{ users }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StatisticsCard',
  props: {
    title: {
      type: String,
      required: true
    },
    posts: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    users: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentDate: new Date().toISOString()
    };
  },
  watch: {
    title() {
      this.updateCurrentDate();
    },
    posts() {
      this.updateCurrentDate();
    },
    comments() {
      this.updateCurrentDate();
    },
    users() {
      this.updateCurrentDate();
    }
  },
  methods: {
    updateCurrentDate() {
      this.currentDate = new Date().toISOString();
    }
  }
}
</script>
