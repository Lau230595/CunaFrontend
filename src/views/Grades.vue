<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Notas</h2>
    <div v-if="grades.length === 0" class="alert alert-info">
      No hay notas registradas.
    </div>
    <table v-else class="table table-bordered table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Estudiante</th>
          <th>Curso</th>
          <th>Nota</th>
          <th v-if="isAdminOrTeacher">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grade in grades" :key="grade.id">
          <td>{{ grade.id }}</td>
          <td>{{ grade.inscription.student.first_name }} {{ grade.inscription.student.last_name }}</td>
          <td>{{ grade.inscription.workload.course.name }}</td>
          <td>
            <span v-if="editingGrade?.id !== grade.id">{{ grade.grade }}</span>
            <input v-else v-model="editingGrade.grade" class="form-control form-control-sm" type="number" />
          </td>
          <td v-if="isAdminOrTeacher">
            <button v-if="editingGrade?.id === grade.id" @click="saveEdit" class="btn btn-success btn-sm">Guardar</button>
            <button v-else @click="editGrade(grade)" class="btn btn-warning btn-sm">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'GradesView',
  data() {
    return {
      grades: [],
      editingGrade: null,
      userType: localStorage.getItem('user_type') || ''
    }
  },
  computed: {
    isAdminOrTeacher() {
      return this.userType === 'admin' || this.userType === 'teacher'
    }
  },
  async mounted() {
    await this.getGrades()
  },
  methods: {
    async getGrades() {
      try {
        const res = await api.getGrades()
        this.grades = res.data.results || res.data.data || res.data
      } catch (error) {
        this.grades = []
      }
    },
    editGrade(grade) {
      this.editingGrade = { ...grade }
    },
    async saveEdit() {
      try {
        await api.updateGrade(this.editingGrade.id, this.editingGrade)
        await this.getGrades()
        this.editingGrade = null
      } catch (error) {
        console.error('Error al guardar los cambios:', error)
      }
    }
  }
}
</script>
