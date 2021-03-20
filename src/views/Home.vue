<template>
    <div class="home">
        <div class='home-buttons'>
            <button @click="handleNewNote">
                New Note
            </button>
            <button @click="handleDeleteNote">
                Delete Note
            </button>
            <form>
                Render Text:
                <input type='checkbox' id='renderTextCheckbox' v-model='rendered' />
            </form>
        </div>
        <div class='home-editor'>
            <FilesList id='files-list' :notes="this.$root.$data.notes" :options="false"/>
            <FileView id='file-view' :rendered="rendered" :note="selectedNote" />
            <div class='tags'>
                <div>
                    <h2>
                        Tags
                    </h2>
                    <ul id='tags'>
                        <li id='tag' v-for="tag in currentTags" :key="tag">
                            {{tag}}
                            <b id='remove-tag' @click='handleRemoveTag(tag)'>
                            --
                            </b>
                        </li>
                    </ul>
                </div>
                <form @submit.prevent="handleAddNewTag">
                    <input v-model='newTagText' placeholder='add new tag...' />
                </form>
            </div>
        </div>
        <div class='home-buttons'>
            <button @click="handleNewNote">
                New Note
            </button>
            <button @click="handleDeleteNote">
                Delete Note
            </button>
            <form>
                Render Text:
                <input type='checkbox' id='renderTextCheckbox' v-model='rendered' />
            </form>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import FilesList from '@/components/FilesList.vue'
import FileView  from '@/components/FileView.vue'

export default {
    name: 'Home',
    components: {
        FilesList,
        FileView
    },
    data() {
        return {
            newTagText: '',
            rendered: false,
        }
    },
    computed: {
        notes(){
            return this.$root.$data.notes;
        },
        currentTags(){
            for(let note of this.$root.$data.notes){
                if(note.selected){
                    return note.tags;
                }
            }
            return []
        },
        selectedNote(){
            for(let note of this.$root.$data.notes){
                if(note.selected){
                    return note;
                }
            }
            return {};
        }
    },
    methods: {
        handleAddNewTag(){
            let selectedNote = this.selectedNote;
            let data = this.$root.$data;
            if(!selectedNote.tags.includes(this.newTagText)){
                selectedNote.tags.push(this.newTagText);
                if(!data.tags.includes(this.newTagText)){
                    !data.tags.push(this.newTagText);
                }
            }
            this.newTagText = '';
        },
        handleRemoveTag(tag){
            let selectedNote = this.selectedNote;
            let data = this.$root.$data;
            let i = selectedNote.tags.indexOf(tag);
            if(i != -1){
                selectedNote.tags.splice(i, 1);
            }else{
                throw 'the specified tag, \'' + tag + '\' is not a tag of ' + selectedNote.title + '.';
            }


            let tagExists = false;
            i = 0;
            while(!tagExists && i < data.notes.length){
                if(data.notes[i].tags.includes(tag)){
                    tagExists = true;
                }
                i++;
            }

            i = data.tags.indexOf(tag);
            if(!tagExists && i != -1){
                data.tags.splice(i, 1);
            }
        },
        handleNewNote() {
            let name = prompt('Enter a name for your note:');
            let ext  = prompt('Enter an extension for your note file (e.g. \'.md\', \'.txt\'):');
            if(name != null && name != '' && ext != null && ext != ''){
                this.$root.$data.notes.forEach( note => note.selected = false);
                this.$root.$data.notes.push({
                    id: this.$root.$data.notes.length + 1,
                    title: name,
                    fileType: ext,
                    content: '',
                    tags: [],
                    selected: true,
                })
            }
        },
        handleDeleteNote() {
            this.$root.$data.notes.splice(this.$root.$data.notes.indexOf(this.selectedNote), 1);
            if(this.$root.$data.notes.length > 0){
                this.$root.$data.notes[this.$root.$data.notes.length-1].selected = true;
            }
        },
    }
}
</script>

<style scoped>

* {
    margin: 0 auto;
    padding: 0;
}

button {
    border: none;
    padding: 5px;
    margin: 5px;
    background-color: lightgreen;
}
button:hover {
    cursor:pointer;
}
button:active {
    background-color: rgb(91, 150, 91);
}

.home-editor {
    display: flex;
    justify-content: space-evenly;
}
#files-list {
    width: 25%;
    height: 700px;
}
#file-view {
    width: 700px;
    height: 700px;
    margin: 0;
    padding: 0;
}


#tags {
    list-style: none;
    padding: 2px;
    text-align: right;
}
.tags {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: rgb(207, 255, 231);
}

#tag {
    text-align: right;
}

#remove-tag:hover {
    cursor: pointer;
}

</style>