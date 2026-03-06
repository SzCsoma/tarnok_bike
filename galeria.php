<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<title>Galéria — Tárnoki Kerékpárműhely</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/css/style.css" rel="stylesheet">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/imgs/tarnok_ico.ico">
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
.gallery-thumb {
    transition: transform .2s;
    cursor: pointer;
}

.gallery-thumb:hover {
    transform: scale(1.05);
}
</style>
</head>

<body>

<nav class="navbar navbar-expand-lg fixed-top">
<div class="container">

<a class="navbar-brand" href="index.html">Tárnoki Kerékpár Műhely</a>

<button class="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="nav">
<ul class="navbar-nav ms-auto">

<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle"
     href="#"
     id="bikeMenu"
     role="button"
     data-bs-toggle="dropdown"
     data-bs-auto-close="outside"
     aria-expanded="false">
     Kerékpárok
  </a>

  <ul class="dropdown-menu dropdown-menu-end shadow border-0">
    <li>
      <a class="dropdown-item" href="https://www.neuzer.hu" target="_blank">
        Neuzer
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="https://www.crosscycle.hu" target="_blank">
        Crosscycle
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="https://www.schwinncsepel.hu" target="_blank">
        Csepel
      </a>
    </li>
  </ul>
</li>

<li class="nav-item">
  <a class="nav-link" href="araink.html">Áraink</a>
</li>

<li class="nav-item">
  <a class="nav-link" href="galeria.php">Galéria</a>
</li>

<li class="nav-item">
  <a class="nav-link" href="kapcsolat.html">Kapcsolat</a>
</li>

</ul>
</div>
</div>
</nav>
<main>
<section class="py-5" style="margin-top:120px;">
<div class="container">

<h2 class="mb-4 text-center">Galéria</h2>

<div class="row g-3">
<?php include 'galeria_loader.php'; ?>
</div>

</div>
</section>

<div class="modal fade" id="imgModal" tabindex="-1">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content bg-dark">
      <div class="modal-body text-center">
        <img id="modalImg" class="img-fluid">
      </div>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script>
function showImg(src) {
    document.getElementById("modalImg").src = src;
}
</script>
</main>
<footer>© 2025 Tárnoki Kerékpár Műhely</footer>
</body>
</html>
