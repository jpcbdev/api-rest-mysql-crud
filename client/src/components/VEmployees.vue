
<template>
  <section class="container">
    <div class="row">
      <h3 class="center teal-text">Empleados</h3>

      <div class="col s12 m12 l4">
        <div class="card small orange lighten-2">
          <div class="card-content center">
            <a class="btn-small modal-trigger" href="#add" @click="newEmployee">Add employee</a>
            <div id="add" class="modal">
              <div class="modal-content teal-text">
                <h4 v-if="update" class="center">Actualizar empleado</h4>
                <h4 v-else class="center">Agregar un nuevo empleado</h4>

                <form v-on:submit.prevent="formAction">
                  <input
                    v-if="!update"
                    type="text"
                    placeholder="Cédula"
                    v-model="employeeModel.cedula_empleado"
                  >
                  <input
                    type="text"
                    placeholder="Primer nombre"
                    v-model="employeeModel.primer_nombre"
                  >
                  <input
                    type="text"
                    placeholder="Primer apellido"
                    v-model="employeeModel.primer_apellido"
                  >
                  <div></div>
                  <input type="submit" value="Add" class="modal-close">
                </form>
              </div>
              <div class="modal-footer teal">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Volver</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col s12 m12 l8">
        <div class="card small orange lighten-2">
          <div class="card-content">
            <table>
              <thead>
                <tr>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="employee in employees" :key="employee.cedula_empleado">
                  <td v-text="employee.cedula_empleado"></td>
                  <td v-text="employee.primer_nombre"></td>
                  <td v-text="employee.primer_apellido"></td>
                  <th class="right-align">
                    <a class="btn-small red" @click="deleteEmployee(employee.cedula_empleado)">
                      <i class="fas fa-user-minus white-text fa-2x"></i>
                    </a>
                    <a
                      @click="editEmployee(employee.cedula_empleado)"
                      class="btn-small modal-trigger green"
                      href="#add"
                    >
                      <i class="fas fa-user-edit white-text fa-2x"></i>
                    </a>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import getServices from "@/services/getServices.js";
import postServices from "@/services/postServices.js";
import deleteServices from "@/services/deleteServices.js";
import updateServices from "@/services/updateServices.js";

export default {
  data() {
    return {
      update: false,
      updateId: "",
      employeeModel: {
        cedula_empleado: "",
        primer_nombre: "",
        primer_apellido: ""
      },
      employees: {}
    };
  },
  created() {
    this.getEmployees();
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    getEmployees() {
      getServices.getEmployees().then(data => {
        if (data) {
          this.employees = data;
          M.toast({ html: "Empleados cargados", classes: "rounded" });
        } else {
          M.toast({ html: "Error al cargar empleado", classes: "rounded" });
        }
      });
    },
    addEmployee() {
      postServices.addEmployee(this.employeeModel).then(data => {
        if (data) {
          M.toast({ html: "Empleado agregado", classes: "rounded" });
          this.getEmployees();
        } else {
          M.toast({ html: "Error al agregar el empleado", classes: "rounded" });
        }
      });
    },
    deleteEmployee(id) {
      deleteServices.deleteEmployee(id).then(data => {
        if (data) {
          M.toast({ html: "Empleado eliminado", classes: "rounded" });
          this.getEmployees();
        } else {
          M.toast({
            html: "Error al eliminar el empleado",
            classes: "rounded"
          });
        }
      });
    },
    newEmployee() {
      this.update = false;
      this.employeeModel = {};
      this.updateId = "";
    },
    editEmployee(id) {
      this.update = true;
      this.updateId = id;
      getServices.getEmployeeById(this.updateId).then(data => {
        if (data) {
          this.employeeModel = data[0];
        } else {
          M.toast({
            html: "Error al cargar el empleado",
            classes: "rounded"
          });
        }
      });
    },
    updateEmployee(id) {
      updateServices.updateEmployee(id, this.employeeModel).then(data => {
        if (data) {
          M.toast({ html: "Usuario actualizado", classes: "rounded" });
          this.getEmployees();
        } else {
          M.toast({
            html: "Error al actualizar los datos del empleado",
            classes: "rounded"
          });
        }
      });
    },
    formAction() {
      if (this.update) {
        this.updateEmployee(this.updateId);
      } else {
        this.addEmployee();
      }
    }
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
