 <template>


  <div>
    <header>
      <div class="branding">
        <img class ="logo-small" src="./img/icono.png" />
        <span></span>
      </div>
      <nav>
        <a href="#/doughChart">Grafico General de la liga</a>
        <a href="#/trofeos">Trofeos de cada equipo de la liga</a>
        <a href="#/">Gráficos del club U de Chile</a>
        <a href="#/uDeChile">Estadísticas Club U de Chile vs Liga</a>
      </nav>
    </header>

    <main class="container">
      <router-view></router-view>
    </main>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>!
