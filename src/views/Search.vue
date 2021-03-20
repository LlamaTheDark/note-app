<template>
<div id='main-search'>
    <p>
        This will select a note for you, but you'll have to go back to the edit files screen to edit it
    </p>
    <div id='filter'>
        Narrow By Tag: 
        <select id='tag-query' v-model="tagFilter">
            <option value='none'>none</option>
            <option v-for="tag in tags" :value="tag" :key="tag">{{ tag }}</option>
        </select>
        <br />
        Narrow By Keyword
        <input type='text' placeholder='enter search query' v-model="keywordFilter" />
    </div>
    <FilesList id='files-list' :notes="filteredNotes" :options="true" />
</div>
</template>

<script>

import FilesList from '@/components/FilesList'

export default {
    components: {
        FilesList
    },
        data() {
        return {
            tagFilter: 'none',
            keywordFilter: ''
        }
    },
    computed: {
        notes() {
            return this.$root.$data.notes;
        },
        tags() {
            return this.$root.$data.tags;
        },
        filteredNotes(){
            let tmp = [];
            if(this.keywordFilter != ''){
                console.log('here!')
                if(this.tagFilter != 'none'){
                    for (let el of this.$root.$data.notes){
                        if(el.tags.includes(this.tagFilter) && el.title.toLowerCase().search(this.keywordFilter.toLowerCase()) >= 0){
                            tmp.push(el);
                        }
                    }
                    return tmp;       
                }else{
                    for(let el of this.$root.$data.notes){
                        if(el.title.toLowerCase().search(this.keywordFilter.toLowerCase()) >= 0)
                            tmp.push(el);
                    }
                    return tmp;
                }
            }else if (this.tagFilter != 'none'){
                console.log('nah, here!')
                for (let el of this.$root.$data.notes){
                    if(el.tags.includes(this.tagFilter)){
                        tmp.push(el);
                    }
                }
                return tmp;
            }
            return this.$root.$data.notes;
            
        }

    }
}

</script>

<style scoped>

#filter {
    text-align: left;
    margin-left: 3%;
}
#filter * {
    margin: 3px;
}


#files-list {
    height: 800px;
}

#main-search {
    width: 80%;
    margin: 0 auto;
}
#main-search {
    padding: 50px;
}

</style>