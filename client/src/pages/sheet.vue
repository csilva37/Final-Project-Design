<template>
    <div id="app">
   <button v-on:click="toggle='character-viewer'">View all characters</button>
   <button v-on:click="toggle='character-creator'">Create a character</button>
   <CharacterViewer v-show="toggle==='character-viewer'" />
   <CharacterCreator v-show="toggle==='character-creator'" />
    </div>
</template>

<script>
    import CharacterViewer from '../components/CharacterViewer.vue'
    import CharacterCreator from '../components/CharacterCreator.vue'
    import axios from "axios"

    export default {
        name: 'App',
        components: {
            CharacterViewer,
            CharacterCreator
        },
        data: function () {
            return {
                toggle: "character-viewer",
                characters: null
            }
        },
        methods: {
            getCharacters: function () {
                axios
                    .get('http://localhost:3000/characters')
                    .then(response => (this.characters = response.data))
            }
        },
        mounted: function () {
            this.getCharacters();
        }
    }
</script>