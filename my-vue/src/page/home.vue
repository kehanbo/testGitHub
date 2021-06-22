<template>
  <div class="main-content">{{name}}</div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            name: '我的家',
        }
    },
    created() {},
    mounted() {},
    methods: {

    },
}

</script>

<style scoped>
.main-content {
    height: 100%;
    width: 100%;
    padding:20px;
}
</style>
