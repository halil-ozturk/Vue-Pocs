<template>
  <div>
    <child11></child11>
    <br>
    <child21></child21>
  </div>
</template>

<script>
import child11 from './components/Child-1-1.vue'
import child21 from './components/Child-2-1.vue'

export default {
  components: {
    child11,
    child21,
  }
}
</script>