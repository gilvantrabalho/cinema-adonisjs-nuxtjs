<template>
    <div class="form-login">
        <form @submit.prevent="submit" class="mt-4">

            <Input v-model="login.username" type="text" icon="bi bi-person-circle" placeholder="E-mail..." />

            <Input v-model="login.password" type="password" icon="bi bi-key-fill" placeholder="Senha..." />

            <div class="d-grid gap-2">
                <button class="btn-login btn btn-info btn-block mt-3" type="submit">Entrar</button>
            </div>

            <div class="text-center pt-3">
                <NuxtLink to="/auth/register">
                    Cadastrar
                </NuxtLink>
            </div>

        </form>
    </div>
</template>

<style>
.form-login {
    width: 400px;
}

.btn-login {
    padding: 9px;
}

.btn-login {
    background-color: var(--color-default);
    border: none;
    color: white;
    font-weight: 500;
    padding: 15px 5px 15px 5px;
}
</style>

<script>
import Input from '../../components/form/Input.vue'
export default {
    layout: "auth",
    auth: 'guest',
    data() {
        return {
            login: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        submit: async function () {
            if (this.login.username && this.login.password) {
                try {
                    let response = await this.$auth.loginWith("local", { data: this.login });
                    // console.log(response);
                    if (response.data.responseText == "E_INVALID_AUTH_UID: User not found") {
                        this.$notify.error({
                            title: "Ops",
                            message: "Email e/ou Senha incorreto!"
                        });
                    } else {
                        window.location.href = '/admin';
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    },
    components: { Input }
}
</script>