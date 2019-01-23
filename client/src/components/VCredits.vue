<template>
  <section class="container">
    <div class="row">
      <div class="col s12 center-align">
        <div class="card teal lighten-4">
          <div class="card-content">
            <a class="btn-small modal-trigger" href="#add" @click="newCredit">Realizar una recarga</a>
            <div id="add" class="modal">
              <div class="modal-content">
                <h4 class="teal-text">Recargar crédito</h4>
                <form v-on:submit.prevent>
                  <input type="number" placeholder="Monto" v-model="creditModel.monto">
                  <input type="text" placeholder="Número" v-model="creditModel.celular">
                  <input type="text" placeholder="Cliente" v-model="creditModel.cliente">
                  <div class="input-field col s12">
                    <select class="browser-default" v-model="creditModel.selected">
                      <option selected value="0">Selecciona una opción</option>
                      <option
                        v-for="(item,index) in companies"
                        :key="index"
                        :value="item.id_telefonica"
                      >{{item.nombre}}</option>
                    </select>
                  </div>
                  <input type="submit" value="Add" class="modal-close" @click="addCredit()">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col s12 center-align">
        <h5 class="teal-color">Recargas registradas</h5>
        <table class="centered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Monto</th>
              <th>Número</th>
              <th>Cliente</th>
              <th>Telefónica</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="credit in credits" :key="credit.id_recarga">
              <td>{{credit.id_recarga}}</td>
              <td>{{credit.monto}}</td>
              <td>{{credit.celular}}</td>
              <td>{{credit.cliente}}</td>
              <td>{{getCompanyName(credit.id_telefonica)}}</td>
              <td>{{credit.fecha}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
import getServices from "@/services/getServices.js";
import postServices from "@/services/postServices.js";

export default {
  data() {
    return {
      creditModel: {
        selected: 0,
        monto: 0,
        celular: "",
        cliente: ""
      },
      selected: 0,
      companies: [],
      credits: []
    };
  },
  created() {
    this.getCompanies();
    this.getCredits();
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    newCredit() {
      this.creditModel = {
        selected: 0,
        monto: 0,
        celular: "",
        cliente: ""
      };
    },
    addCredit() {
      this.creditModel.fecha = this.getCurrentDate();
      postServices.addCredit(this.creditModel).then(data => {
        if (data) {
          M.toast({ html: "Recarga exitosa", classes: "rounded" });
          this.getCompanies();
          this.getCredits();
        } else {
          M.toast({ html: "Error al realizar la recarga", classes: "rounded" });
        }
      });
    },
    getCompanies() {
      getServices.getCompanies().then(data => {
        if (data) {
          this.companies = data;
        } else {
        }
      });
    },
    getCredits() {
      getServices.getCredits().then(data => {
        if (data) {
          this.credits = data;
          M.toast({ html: "Recargas cargadas", classes: "rounded" });
        } else {
          M.toast({
            html: "No se pudo cargar el registro de recargas",
            classes: "rounded"
          });
        }
      });
    },
    getCurrentDate() {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return `${yyyy}/${mm}/${dd}`.trim();
    },
    getCompanyName(id) {
      let name = "";
      this.companies.map(item => {
        if (item.id_telefonica === id) {
          name = item.nombre;
        }
      });
      return name;
    }
  },
  computed: {}
};
</script>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
