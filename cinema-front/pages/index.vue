<template>
  <div>

    <CardContainer v-slot:body>

      <div class="row">
        <div class="col-md-6">
          <programacao-em cidade="goiânia"/>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <div style="width: 300px;">
            <form-select-localizacao />
          </div>
        </div>
      </div>

      <div class="row mt-5">

        <div class="col-md-2">
          <NuxtLink to="/filme/exemplo">
            <div class="card-filme rounded">
              <img width="100%" height="100%" src="https://www.claquete.com.br/fotos/filmes/poster/10078_medio.jpg"
                alt="">
              <div class="subtitle">
                <small>Em cartaz</small>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="col-md-2">
          <NuxtLink to="/">
            <div class="card-filme">
              <img src="https://www.claquete.com.br/fotos/filmes/poster/10078_medio.jpg"
                alt="">
              <div class="subtitle">
                <small>Em cartaz</small>
              </div>
            </div>
          </NuxtLink>
        </div>

      </div>

    </CardContainer>

  </div>
</template>

<style>
.card-filme {
  overflow: hidden;
}

.card-filme img {
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-transform .5s ease;
  transition: transform .5s ease;
}

.card-filme:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.card-filme .subtitle {
  background-color: var(--color-default);
  color: white;
  text-align: center;
}
</style>

<script>
import CardContainer from '../components/containers/CardContainer.vue';
export default {
  name: "IndexPage",
  components: { CardContainer }
}
</script>