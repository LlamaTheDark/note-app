<template>
    <div id='FilesList'>
        <h2>
            Notes
        </h2>
        <ul id='files'>
            <li v-for="note in notes" :key="note.id" @click='updateSelectedNote(note)'>
                <h3 :class="{selected: note.selected, 'note-title': true}">
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
    },
    methods: {
        updateSelectedNote(note){ // I think it passes objects by reference soooo let's hope so
            this.$root.$data.notes.forEach(note => note.selected = false);
            note.selected = true;
        }
    }
}

</script>

<style scoped>

#FilesList {
    border: 1px solid orange;
}

#files {
    list-style: none;
    padding: 5px;
}
#files li:hover {
    cursor: pointer;
}

.selected {
    color: blue;
}
.note-title {
    border: 1px dotted red;
    padding: 0;
    text-align: left;
}

</style>