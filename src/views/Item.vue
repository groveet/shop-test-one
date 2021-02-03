<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>
            Title item <br>
          </h2>
          <h3>$route.params.id: {{ $route.params.id }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/images/testImage.jpg" alt="">
        </div>
        <div class="col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum natus quis!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Item.vue'
}
</script>

<style scoped>

</style>
