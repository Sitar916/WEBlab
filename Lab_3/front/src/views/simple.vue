<template>
  <div class="w-100 mt-5 d-flex justify-content-around flex-wrap">
    <div class="calculator">
      <output>{{ $store.state.model.output }}</output>
      <div class="keyboard">
        <btn
          v-bind:type="type"
          v-for="(item, id) in $store.state.model.simpleButtons"
          v-bind:key="id"
          v-bind:id="id"
          v-bind:item="item"
        />
      </div>
    </div>
    <div class="history">
      <div v-for="item in $store.state.model.history" v-bind:key="item">
        {{ item }}
      </div>
    </div>
    <div class="button-wrapper">
      <button @click="clear()" class="clear">Clear</button>
    </div>
  </div>
</template>


<script>
import btn from "@/components/button.vue";

export default {
  components: {
    btn,
  },
  data() {
    return {
      type: "simple",
    };
  },
  created() {
    this.$store.dispatch("LOAD");
  },
  methods: {
    clear() {
      this.$store.dispatch("CLEAR");
    },
  },
};
</script>
<style scoped>
.history {
  border: 2px solid rgb(53, 52, 52);
  overflow: auto;
  height: 150px;
}
.clear {
  text-align: center;
  border: 2px solid rgb(53, 52, 52);
  border-radius: 20%;
  width: 70px;
}
.clear:hover {
  background-color: rgb(53, 52, 52);
  border-color: rgb(53, 52, 52);
  color: white;
  transition: 0.3s;
}
.button-wrapper {
  display: flex;
  justify-content: center;
}
</style>