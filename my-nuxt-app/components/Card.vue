<template>
    <div class="card">
        <h4 class="title">{{ title }}</h4>
        <p class="secondary-text">{{ subText }}</p>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        title: String,
        subText: String
    }
}
</script>

<style scoped>
.card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(59, 54, 54, 0.1);
}
</style>