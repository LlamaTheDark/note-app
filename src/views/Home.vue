<template>
    <div class="home">
        <FilesList :notes="notes" />
        <div id='editor-space'>
            
        </div>

        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import FilesList from '@/components/FilesList.vue'

export default {
    name: 'Home',
    components: {
        FilesList
    },
    computed: {
        notes(){
            return this.$root.$data.notes;
        }
    }
    
}
</script>
