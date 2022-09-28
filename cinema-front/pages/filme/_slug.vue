<template>
    <CardContainer v-slot:body>

        <div class="row">

            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card-filme rounded">
                            <img width="100%" height="100%"
                                src="https://www.claquete.com.br/fotos/filmes/poster/10078_medio.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-md-9">
                        <h4 class="mb-0">DC Liga dos SuperPets</h4>
                        <div class="text-secondary">(DC League of SuperPets, 2022)</div>
                        <div class="mt-2">
                            <span class="badge badge-success">Livre</span>
                            <span class="badge badge-dark">106 min</span>
                            <span class="badge badge-info">Animação, Familia</span>
                        </div>
                    </div>
                </div>

                <div class="mt-5">
                    <div class="text-pers text-info mb-2">Trailer</div>
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/9Jgua93Xhcw"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

                <div class="mt-5">
                    <div class="text-pers text-info mb-">Sinopse</div>
                    <p class="text-secondary">
                        Em DC Liga dos Super-Pets, Krypto, o Super-Cão, e Superman são melhores amigos, inseparáveis,
                        que combatem o crime em Metropolis lado a lado e compartilham os mesmos superpoderes. Quando
                        Superman e os membros da Liga da Justiça são sequestrados, Krypto deve convencer um atrapalhado
                        bando de um abrigo de animais - Ace, o Batcão; PB, A Poderosa Oinc; Merton, a Tartaruga-Foguete;
                        e Chip, O Esquilo - a dominar seus poderes recém-descobertos e ajudá-lo a resgatar os
                        super-heróis.
                    </p>
                </div>

                <div class="mt-5">
                    <div class="text-pers text-info mb-3">Créditos e distribuição</div>
                    <div class="row text-secondary">
                        <div class="col-md-4">
                            <strong>Elenco</strong>
                        </div>
                        <div class="col-md-8">
                            <p>
                                Vozes de: Kevin Hart, Kate McKinnon, John Krasinski, Vanessa Bayer, Natasha Lyonne,
                                Diego Luna, Marc Maron, Thomas Middleditch, Ben Schwartz, Keanu Reeves
                            </p>
                        </div>
                    </div>
                    <div class="row text-secondary">
                        <div class="col-md-4">
                            <strong>Direção</strong>
                        </div>
                        <div class="col-md-8">
                            <p>
                                Jared Stern, Sam Levine
                            </p>
                        </div>
                    </div>
                    <div class="row text-secondary">
                        <div class="col-md-4">
                            <strong>Roteiro</strong>
                        </div>
                        <div class="col-md-8">
                            <p>
                                Jared Stern
                            </p>
                        </div>
                    </div>
                    <div class="row text-secondary">
                        <div class="col-md-4">
                            <strong>Produção</strong>
                        </div>
                        <div class="col-md-8">
                            <p>
                                Patty Hicks, Jared Stern, Dwayne Johnson, Dany Garcia, Hiram Garcia
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="border h-100">
                    <div class="div-cont-horario text-center p-2">
                        <div class="m-0">CONSULTAR HORÁRIOS</div>
                    </div>

                    <div class="p-2 bg-light pb-4 mt-2">
                        <select name="" id="" class="form-control">
                            <option value="">Goiânia - GO</option>
                        </select>

                        <select name="" id="" class="form-control mt-3">
                            <option value="">Escolha seus cinemas favoritos</option>
                        </select>

                        <select name="" id="" class="form-control mt-3">
                            <option value="">Hoje (31 de Julho)</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

    </CardContainer>
</template>

<style>
.text-pers {
    font-weight: 450;
    font-size: 18px;
}

.div-cont-horario {
    background-color: var(--color-default);
    color: white;
}
</style>

<script>
import CardContainer from '../../components/containers/CardContainer.vue'

export default {
    asyncData({ route, params }) {
        return {
            slug: params.slug
        }
    },
    components: {
        CardContainer
    }
}
</script>