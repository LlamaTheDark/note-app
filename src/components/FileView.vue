<template>
<div>
    <div class='note-content-rendered' v-if="rendered" v-html="renderedText">
    </div>
    <div id='note-content' v-else>
        <textarea id='note-content-textarea' v-model='noteContent'>
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
    },
    watch: {
        note: function(newvalue){
            this.noteContent = newvalue.content;
        },
        noteContent: function(newvalue) {
            let data = this.$root.$data;
            let i = data.notes.indexOf(this.note);
            if(i != -1){
                data.notes[i].content = newvalue;
            }
        }
    }
}

</script>

<style scoped>

#note-content {
    font-family: 'Source Sans Pro', sans-serif;

    text-align: left;
    padding: 20px;

    width: 100%;
    height: 95%;
    /* border: 1px solid red; */
}
.note-content-rendered {
    height: 95%;
    width: 98%;

    margin: 0 auto;
    
    overflow: hidden;
    overflow-y: auto;

    text-align: left;
    padding: 10px;
}


#note-content textarea {
    font-family: 'Source Sans Pro', sans-serif;

    overflow: hidden;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    resize: none;

    border: none;
    /* border: 1px solid blue; */
}

</style>