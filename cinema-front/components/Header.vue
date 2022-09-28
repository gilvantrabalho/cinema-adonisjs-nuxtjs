<template>
    <header class="">

        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <NuxtLink to="/" class="text-white">
                            <h1 class="mt-2">Cinema</h1>
                        </NuxtLink>
                    </div>
                    <div class="col-md-8">
                        <form-select-cidade-and-cinema />
                    </div>
                </div>
            </div>
        </div>

        <div class="menu2 shadow-sm">
            <div class="container d-flex justify-content-between">
                <ul class="py-1">
                    <li class="border-right">
                        <a href="">Menu</a>
                    </li>
                    <li class="border-right">
                        <a href="">Pré-vendas</a>
                    </li>
                    <li class="border-right">
                        <a href="">Bomboniére</a>
                    </li>
                    <li>
                        <a href="">Promoções</a>
                    </li>
                </ul>

                <div class="mt-2">

                    <div v-if="!this.$auth.loggedIn">
                        <NuxtLink to="/auth/login">Login</NuxtLink>
                        <span class="text-secondary">|</span>
                        <NuxtLink to="/auth/register">Cadastrar</NuxtLink>
                    </div>
                    <div v-else>
                        <div class="d-flex bg-light shadow-sm rounded p-1 text-logado">
                            <div class="me-1">
                                Olá, {{ this.$auth.user.name }}
                            </div>
                            <div @click="logout" style="cursor:pointer;" class="item-link text-primary ">
                                sair
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </header>
</template>

<style>
a:link {
    text-decoration: none !important;
}

.header {
    height: 75px;
    width: 100%;
    background-color: var(--color-default);
    color: white;
}

.menu2 {
    width: 100%;
    height: 40px;
}

ul {
    margin: 0px;
    padding: 0px;
    list-style: none !important;
}

ul li {
    /* background-color: lightblue; */
    display: inline-block;
    height: 100% !important;
    padding: 5px;
    padding-right: 20px;
    padding-left: 20px;
}

.text-logado
{
    font-weight: 500;
    margin-top: -5px;
}
</style>

<script>
export default {
    methods: {
        logout: async function () {
            let logout = await this.$auth.logout('local')
            localStorage.removeItem('type_user')
            window.location.reload()
        }
    }
}
</script>