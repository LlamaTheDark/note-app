<template>
    <div id='FilesList'>
        <h2>
            Notes
        </h2>
        <ul id='files'>
            <li v-for="note in notes" :key="note.id" @click='updateSelectedNote(note)'>
                <h4 :class="{selected: note.selected, 'note-title': true}">
                    {{ note.title }}{{ note.fileType }}
                </h4>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'FilesList',
    props: {
        notes: Array,
        options: Boolean,
    },

    methods: {
        updateSelectedNote(note){ // I think it passes objects by reference soooo let's hope so
            this.$root.$data.notes.forEach(note => note.selected = false);
            note.selected = true;
        },
    }
}

</script>

<style scoped>

* {
    font-family: 'Source Sans Pro', sans-serif;
}


#files {
    list-style: none;
    padding: 5px;

    overflow: hidden;
    overflow-y: auto;

    width: 100%;
    height: 85%;
}
#files li {
    margin: 10px 0px;
    padding: 0 10px;
}
#files li * {
    padding: 0;
    margin: 0;
}
#files li:hover {
    cursor: pointer;
}

#files li>h4 {
    padding: 2px;
}

.selected {
    color: green;
    background-color: rgb(238, 255, 238);
}
.note-title {
    /* border: 1px dotted red; */
    padding: 0;
    text-align: left;
}

</style>