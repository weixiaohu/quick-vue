<template>
<div class="nav-wrap">
    <router-link to="home" class="link">home</router-link>
    <router-link to="about" class="link">about</router-link>
</div>
</template>

<script>
export default {
    name: 'nav',
    data() {
        return {}
    }
}
</script>

<style lang="sass" scoped>
.link {
    padding: 10px;
    font-size: 40px;
    text-decoration: none;
    color: green;
    border: 1px solid #ccc;
}
</style>
