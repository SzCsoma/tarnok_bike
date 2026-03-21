<?php
$dir = "./galeria/";
$images = glob($dir . "*.{jpg,jpeg,png,webp,gif}", GLOB_BRACE);

foreach ($images as $img) {
    echo '
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href="#" onclick="showImg(\''.$img.'\')" data-bs-toggle="modal" data-bs-target="#imgModal">
            <div class="gallery-box shadow rounded">
                <img src="'.$img.'" class="gallery-img">
            </div>
        </a>
    </div>';
}
?>
