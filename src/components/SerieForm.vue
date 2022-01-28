<template>
    <div>
        <h2>{{modify? 'Modifier la série' : 'Nouvelle série'}}</h2>
        <form @submit.prevent="verifyForm">
            <div>
                <label for="name">Nom</label>
                <input @blur="verifyName" id="name" v-model="serie.name">
                <p v-if="name_error" class="text-error">{{ name_error }}</p>
            </div>
           <div>
               <label for="img">Image</label>
               <input @blur="verifyImg" id="img" v-model="serie.img">
               <p v-if="img_error" class="text-danger">{{ img_error}}</p>
           </div>
            <div>
                <label for="resume">Résumé</label>
                <textarea @blur="verifyResume" id="resume" v-model="serie.resume"></textarea>
                <p v-if="resume_error" class="text-danger">{{resume_error}}</p>
            </div>
            <div>
                <button type="submit">{{modify? 'Modifier' : 'Enregistrer'}} la série</button>
            </div>
        </form>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "SerieForm",
        data: function () {
            return {
                name_error: '',
                img_error: '',
                resume_error: '',
            }
        },
        props: {
            new_id: Number,
            serie : {
                type: Object,
                // Pour un objet ou un tableau, la valeur "défault" doit être retournée par une fonction.
                default: function () {
                    return { id : this.id, name: 'Test', isWatched: false, resume: '', img : '' }
                }
            },
            modify: Boolean
        },
        methods: {
            verifyName: function() {
                if( !this.serie.name || this.serie.name < 2) {
                    this.name_error = "Veuillez entrer un nom à votre série";
                   return false
                }
                this.name_error = '';
                return true
            },
            verifyImg: function() {
                if( !this.serie.img ) {
                    this.img_error = "Veuillez entrer un lien pour votre image";
                    return false;
                }
                if( this.serie.img < 5 ) {
                    this.img_error = "Le lien de votre image n'a pas l'air correct";
                    return false;
                }
                this.img_error = '';
                return true
            },
            verifyResume: function() {
                if( !this.serie.resume) {
                    this.resume_error = "Veuillez entrer un résumé";
                    return false;
                }
                this.resume_error = '';
                return true
            },
            verifyForm: function () {
                const no_error = this.verifyImg() && this.verifyName() && this.verifyResume();
                if( no_error ) {
                    const {...copy} = this.serie;
                    this.serie.name = '';
                    this.serie.resume = '';
                    this.serie.img = '';
                    if(this.modify) {
                        this.$emit('updating', copy);
                    } else {
                        this.$emit('saving', copy);
                    }
                }
            }
        }
    }
</script>

<style scoped>
.text-danger {
    color: red;
}
</style>
