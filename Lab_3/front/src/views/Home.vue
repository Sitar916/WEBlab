<template>
  <div>
    <div class="d-flex align-items-center m-auto pt-5">
      <h2 class="display-2 w-100 text-center title">Program</h2>
    </div>
    <div class="w-100 mt-5 d-flex justify-content-around flex-wrap">
      <div class="bg-dark p-5 shadow-md border-light text-warning">
        <router-link to="/simple" class="btn btn-outline-link text-warning"
          >Go to simple calculator -></router-link
        >
      </div>
      <div class="bg-dark p-5 shadow-md border-light text-warning">
        <router-link to="/complex" class="btn btn-outline-link text-warning"
          >Go to complex calculator -></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
