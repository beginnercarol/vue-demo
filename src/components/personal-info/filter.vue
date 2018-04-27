<template>
  <div class="info-filter">
    <input :value="personName" placeholder="name">
    <input :value="age" placeholder="age">
    <textarea :value="info" placeholder="info"></textarea>
  </div>
</template>


<script>
export default {
    props: {
        fullName: {
            type: String
        },
        Age: {
            type: Number
        },
        Info: {
            type: String
        }
    }
}
</script>

<style>

</style>
