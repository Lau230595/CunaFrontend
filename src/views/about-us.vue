<template>
  <div class="page-content">
    <section class="container py-5">
      <section class="page-section about-us-section">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Sobre Nosotros</h2>
            <h3 class="section-subheading text-muted">Conoce más sobre CunaUnsa</h3>
          </div>

          <div class="row mt-4">
            <div class="col-lg-6">
              <p class="lead">
                Bienvenido a <strong>CunaUnsa</strong>, el centro de educación inicial de la Universidad Nacional de San
                Agustín de Arequipa (UNSA), donde la enseñanza temprana se brinda con amor, creatividad y compromiso.
              </p>
              <p>
                Fundado y respaldado por la <strong>UNSA</strong>, CunaUnsa representa el compromiso de la universidad con
                la formación integral desde los primeros años de vida. Nuestro centro busca potenciar el desarrollo
                emocional, cognitivo y social de los niños en un entorno cálido, seguro e inclusivo.
              </p>
              <p>
                Contamos con profesionales altamente capacitados, metodologías modernas y un enfoque centrado en el
                bienestar del niño y su familia.
              </p>
            </div>

            <div class="col-lg-6">
              <img src="@/assets/img/about-us.jpg" alt="CunaUnsa" class="img-fluid rounded shadow" />
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-4 text-center">
              <h4>Misión</h4>
              <p>Brindar una educación inicial de calidad, respaldada por la UNSA, que despierte la curiosidad, la empatía
                y el amor por aprender.</p>
            </div>
            <div class="col-md-4 text-center">
              <h4>Visión</h4>
              <p>Ser un referente en educación inicial universitaria, formando niños seguros, amables y capaces.</p>
            </div>
            <div class="col-md-4 text-center">
              <h4>Enfoque</h4>
              <p>Aplicamos el aprendizaje mediante el juego, fortalecemos el desarrollo emocional y fomentamos la
                creatividad cada día.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUsView'
}
</script>

<style scoped>
.about-us-section {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.about-us-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.about-us-section .lead {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.about-us-section h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
</style>
