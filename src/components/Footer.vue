<template>
  <div>
    <div class="div-footer">
      <div class="liste-footer">
        <ul>
          <ol>
            <h3>Réseaux</h3>
            <div class="reseaux-footer">
              <ol>
                <router-link to="#">Twitter</router-link>
              </ol>
              <ol>
                <router-link to="#">Instagram</router-link>
              </ol>
              <ol>
                <router-link to="#">Facebook</router-link>
              </ol>
            </div>
          </ol>
        </ul>
        <ul>
          <ol>
            <h3>Une Question ?</h3>
            <div class="question-footer">
              <ol>
                Nous sommes disponibles du lundi au samedi de 10h à 19h :
              </ol>
              <ol>
                +33 1 87 66 88 43
              </ol>
              <ol>
                contact@mastertascos.com
              </ol>
            </div>
          </ol>
        </ul>
        <ul>
          <ol>
            <h3>Nos Snikers</h3>
            <div class="marque-footer">
              <ol>
                Nike
              </ol>
              <ol>
                Puma
              </ol>
              <ol>
                Converse
              </ol>
              <ol>
                Yeeze
              </ol>
              <ol>
                Asics
              </ol>
              <ol>
                Vans
              </ol>
            </div>
          </ol>
        </ul>
        <ul>
          <ol>
            <h3>En savoir plus</h3>
            <div class="question-footer">
              <ol>
                Nous contacter
              </ol>
              <ol>
                Recrutement
              </ol>
              <ol>
                Mentions légales
              </ol>
              <ol>
                Politique de confidentialité
              </ol>
              <ol>
                Questions fréquentes
              </ol>
              <ol>
                Politique de remboursement
              </ol>
            </div>
          </ol>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.div-footer {
  -webkit-box-shadow: 0px -9px 5px -3px rgba(255, 206, 135, 0.64);
  box-shadow: 0px -9px 5px -3px rgba(255, 206, 135, 0.64);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  background-color: #1f1f1f;
  color: #ecebda;
  display: flex;
  width: 100%;
  line-height: 1.3;
  font-family: Menlo, monospace;
}

.div-footer ul {
  padding: 0rem 2rem;
  display: inline-grid;
  justify-items: center;
  margin: auto;
}

.div-footer ol {
  padding: 0.2rem 0rem;
}


</style>