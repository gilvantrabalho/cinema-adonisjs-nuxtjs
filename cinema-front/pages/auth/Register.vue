<template>
    <div class="form-register">

        <form @submit.prevent="submit" ref="formRegister" class="mt-4">

            <Input v-model="user.name" type="text" icon="bi bi-person-circle" placeholder="Nome..." />

            <Input v-model="user.email" type="email" icon="bi bi-envelope-fill" placeholder="E-mail..." />

            <Input v-model="user.password" type="password" icon="bi bi-key-fill" placeholder="Senha..." />

            <Input v-model="user.c_password" type="password" icon="bi bi-key-fill" placeholder="Confirmar senha..." />

            <ButtonBlock :loading="loading" title="Salvar" type="submit" />

            <div class="text-center pt-3">
                <NuxtLink to="/auth/login">
                    Login
                </NuxtLink>
            </div>

        </form>

    </div>
</template>

<style>
.form-register {
    width: 400px;
}

.btn-register {
    background-color: var(--color-default);
    border: none;
    color: white;
    font-weight: 500;
    padding: 15px 5px 15px 5px;
}
</style>

<script>
import Input from '../../components/form/Input.vue'
import ButtonBlock from '../../components/buttons/ButtonBlock.vue';
export default {
    layout: "auth",
    auth: 'guest',
    data() {
        return {
            loading: false,
            user: {
                name: null,
                email: null,
                password: null,
                c_password: null
            }
        };
    },
    methods: {
        submit: function (event) {
            if (this.user.name && this.user.email && this.user.password) {

                if (this.user.password === this.user.c_password) {
                    this.loading = true;
                    this.$axios.post('user/create', this.user)
                        .then(res => {
                            if (!res.data.error) {
                                this.$notify.success({
                                    title: "Sucesso!",
                                    message: "Usuário criado com sucesso!"
                                });
                                this.$refs.formRegister.reset();
                            } else {
                                this.$notify.error({
                                    title: "Ops!",
                                    message: res.data.response.message
                                });
                            }

                        })
                        .catch((error) => {
                            console.log(error)
                        })
                        .then(() => {
                            this.loading = false;
                        })
                } else {
                    this.$notify.error({
                        title: 'Ops',
                        message: 'Senhas não são iguais!'
                    })
                }

            } else {
                this.$notify.error({
                    title: 'Ops',
                    message: 'Preencha todos os campos!'
                })
            }
        }
    },
    components: { Input, ButtonBlock }
}
</script>