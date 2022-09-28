<template>
    <form class="d-flex mt-3">
        <select @change="selectCidade" v-model="cidade" class="form-control me-2">
            <option value="">Selecione...</option>
            <option v-for="cidade in cidades" :value="cidade.slug">{{ cidade.cidade + ' - ' + cidade.estado}}</option>
        </select>
        <select @change="selectCinema" v-model="cinema" class="form-control me-2">
            <option value="">Selecione um cinema...</option>
        </select>
        <button class="btn btn-info text-white fw-bold">Programação</button>
    </form>
</template>

<script>
    export default {
        name: 'select-cidade-and-cinema',
        data() {
            return {
                cidade: localStorage.getItem('cidade') ? localStorage.getItem('cidade') : '',
                cidades: [],
                cinema: ''
            }
        },
        created() {
            this.getCidades()
        },  
        methods: {
            selectCidade: function() {
                localStorage.setItem('cidade', this.cidade)
            },
            selectCinema: function() {
                console.log(this.cinema)
            },
            getCidades: function() {
                this.$axios.get('cidades/get-all')
                .then(res => {
                    console.log(res)
                    this.cidades = res.data
                })
                .catch(error => {

                })
            }
        }
    }
</script>