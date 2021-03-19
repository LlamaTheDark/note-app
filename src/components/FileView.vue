<template>
<div>
    <div class='note-content' v-if="rendered" v-html="renderedText">
    </div>
    <div class='note-content' v-else>
        <textarea v-model='noteContent'>
        </textarea>
    </div> 
</div>
    
</template>

<script>

import marked from 'marked';

export default {
    name: 'FileView',
    props: {
        rendered: Boolean,
        note: Object
    },
    data() {
        return {
            noteContent: '',
        }
    },
    created() {
        this.noteContent = this.note.content;
    },
    computed: {
        renderedText() {
            return marked(this.note.content);
        },
        rawText() {
            return this.note.content;
        }
    }
}

</script>

<style scoped>

.note-content {
    text-align: left;
    padding: 20px;

    width: 100%;
    height: 95%;
    border: 1px solid red;
}

.note-content textarea {
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    resize: none;
    border: 1px solid blue;
}

</style>