
<template>
  <section class="container">
    <div class="row">
      <h3 class="center teal-text">Compañias</h3>

      <div class="col s12 m12 l4">
        <div class="card small orange lighten-2">
          <div class="card-content center">
            <a class="btn-small modal-trigger" href="#add" @click="newCompany">Agregar Compañia</a>
          </div>
        </div>
      </div>

      <div class="col s12 m12 l8">
        <div class="card small orange lighten-2">
          <div class="card-content">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="company in companies" :key="company.id_telefonica">
                  <td v-text="company.id_telefonica"></td>
                  <td v-text="company.nombre"></td>
                  <td v-text="company.descripcion"></td>
                  <th class="right-align">
                    <a class="btn-small red" @click="deleteCompany(company.id_telefonica)">
                      <i class="fas fa-user-minus white-text fa-2x"></i>
                    </a>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="add" class="modal">
        <div class="modal-content teal-text">
          <h4 v-if="update" class="center">Actualizar compañia</h4>
          <h4 v-else class="center">Agregar una nueva compañia</h4>

          <form v-on:submit.prevent="addCompany">
            <input type="text" placeholder="Nombre" v-model="companyModel.nombre">
            <input type="text" placeholder="Descripcion" v-model="companyModel.descripcion">
            <div></div>
            <input type="submit" value="Add" class="modal-close">
          </form>
        </div>
        <div class="modal-footer teal">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Volver</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getServices from "@/services/getServices.js";
import postServices from "@/services/postServices.js";
import deleteServices from "@/services/deleteServices.js";
import updateServices from "@/services/updateServices.js";

export default {
  data() {
    return {
      update: false,
      updateId: "",
      companyModel: {
        nombre: "",
        descripcion: ""
      },
      companies: {}
    };
  },
  created() {
    this.getCompanies();
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    getCompanies() {
      getServices.getCompanies().then(data => {
        if (data) {
          this.companies = data;
          M.toast({ html: "Compañias cargadas", classes: "rounded" });
        } else {
          M.toast({
            html: "Error al cargas las compañias",
            classes: "rounded"
          });
        }
      });
    },
    addCompany() {
      postServices.addCompany(this.companyModel).then(data => {
        if (data) {
          this.getCompanies();
          this.companyModel = {
            nombre: "",
            descripcion: ""
          };
        } else {
          M.toast({
            html: "Error al agregar la compañia",
            classes: "rounded"
          });
        }
      });
    },
    deleteCompany(id) {
      deleteServices.deleteCompany(id).then(data => {
        if (data) {
          this.getCompanies();
          M.toast({ html: "Compna;ia eliminada", classes: "rounded" });
        } else {
          M.toast({
            html: "No se puede eliminar la compa;ia",
            classes: "rounded"
          });
        }
      });
    },
    newCompany() {},
    editCompany(id) {},
    updateCompany(id) {},
    formAction() {}
  }
};
</script>

<style scoped>
.btn-small {
  margin: 5px;
}
h3 {
  font-weight: bold;
}
</style>
