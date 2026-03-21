<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<title>Best Bike Tours Budapest - Gallery</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap" rel="stylesheet">
<link href="./css/style.css" rel="stylesheet">
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

<nav class="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top shadow">
        <div class="container">
            <a class="navbar-brand fw-bold fs-3 text-uppercase" href="index.html">
                Best Bike Tours Budapest
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link fw-bold text-uppercase" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold text-uppercase" href="turak.html">Tours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold text-uppercase active" href="galeria.php">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold text-uppercase" href="szerviz.html">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold text-uppercase" href="kapcsolat.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
<main>
<section class="py-5" style="margin-top:120px;">
<div class="container">

<h2 class="mb-4 text-center">Gallery</h2>

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
<footer class="bg-secondary text-white py-4">
        <div class="container text-center">
            <p class="mb-1">© 2026 Best Bike Tours Budapest. All rights reserved.</p>
            <p class="small opacity-75">
                Phone: +36 30 5200 650 | Email: bbtbud@gmail.com
            </p>
        </div>
    </footer>
</body>
</html>
