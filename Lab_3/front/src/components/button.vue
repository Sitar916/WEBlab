<template>
  <button @click="calc(item)" v-bind:value="item" v-if="type == 'simple'">
    {{ item }}
  </button>
  <button @click="calc(item.name)" v-bind:value="item.name" v-else>
    {{ item.symbol }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    id: {
      type: Number,
    },
    item: {
      type: Array,
    },
  },
  methods: {
    calc(value) {
      this.$store.dispatch("CALC", value);
    },
  },
};
</script>