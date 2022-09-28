<template>
    <div class="form-group">
        <label v-if="label" for="" class="mb-1">{{ label }}: </label>
        <select @change="selecionarCidade" v-model="selected" name="" id="" class="form-control">
            <option value="">Selecione...</option>
            <option v-for="cidade in cidades" :value="cidade.slug">{{ cidade.cidade + ' - ' + cidade.estado}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'select-localizacao',
        props: {
            label: String
        },
        data() {
            return {
                cidades: [],
                selected: localStorage.getItem('cidade') ? localStorage.getItem('cidade') : '',
            }
        },  
        created()
        {
            this.getCidades()
        },
        methods: {
            selecionarCidade: function(cidade) {
                localStorage.setItem('cidade', this.selected)
            },
            getCidades: function() {
                this.$axios.get('cidades/get-all')
                .then(res => {
                    this.cidades = res.data
                })
                .catch(error => {

                })
            }
        }
    }
</script>