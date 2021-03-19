<template>
    <div>
        <ul id='files'>
            <li v-for="note in notes" :key="note.id">
                <h3>
                    {{ note.title }}
                </h3>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'FilesList',
    props: {
        notes: Array,
    }
}

</script>

<style scoped>

</style>