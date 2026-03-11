// Tours Data
const toursData = [
    {
        id: 1,
        title: 'Fix Grand Budapest Sightseeing Tour',
        distance: '25 km',
        difficulty: 'Könnyű',
        duration: '3-4 óra',
        price: 'Egyedi ár',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032701332/Xb6QhABQdnJddLwjydhfLD/107829621_2389500631342451_7395670102086372886_n_9411205b.jpg',
        description: 'Fedezd fel a város legjobb útvonalait, vagy bérelj kerékpárt az ideális feltételek mellett',
        fullDescription: 'Fedezd fel Budapest legikonikusabb helyeit egy 25 km-es kerékpáros túrán. Az útvonal a Duna-korzón kezdődik, majd a Lánchídon keresztül a Budai Vár felé vezetünk. Végigmegyünk a Margit-szigeten, a Parlamentnél, a Szabadság térről az Andrássy útig, meglátogatjuk az Operaházat és a Terrort Házat, végül a Hősök terét.',
        highlights: ['Duna-korzó', 'Lánchíd', 'Budai Vár', 'Margit-sziget', 'Parlament', 'Andrássy út', 'Operaház', 'Hősök tere'],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.7661462387347!2d19.04!3d47.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3d6e3e5555%3A0x1234567890abcdef!2sBudapest!5e0!3m2!1shu!2shu!4v1234567890'
    },
    {
        id: 2,
        title: 'Fix E-Bike Grand Budapest Sightseeing Tour',
        distance: '25 km',
        difficulty: 'Könnyű',
        duration: '3-4 óra',
        price: 'Egyedi ár',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032701332/Xb6QhABQdnJddLwjydhfLD/107692010_293571288509390_6244455257136255083_n_7dfd8635.jpg',
        description: 'A klasszikus túra elektromos kerékpárral - könnyebb és kényelmesebb',
        fullDescription: 'Ugyanaz a csodálatos útvonal, mint a klasszikus Grand Budapest túra, de elektromos kerékpárral! Az e-bike segítségével még könnyebben és kényelmesebben fedezhetjük fel a város legszebb helyeit. Ideális azoknak, akik szeretnék a fáradság nélkül élvezni a kalandit.',
        highlights: ['Duna-korzó', 'Lánchíd', 'Budai Vár', 'Margit-sziget', 'Parlament', 'Andrássy út', 'Operaház', 'Hősök tere'],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.7661462387347!2d19.04!3d47.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3d6e3e5555%3A0x1234567890abcdef!2sBudapest!5e0!3m2!1shu!2shu!4v1234567890'
    },
    {
        id: 3,
        title: 'Private Tour',
        distance: 'Egyedi',
        difficulty: 'Egyedi',
        duration: 'Egyedi',
        price: 'Egyedi ár',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032701332/Xb6QhABQdnJddLwjydhfLD/107822149_709609273159979_9129000120561096367_n_5e6c5c28.jpg',
        description: 'Saját igények szerint szervezett magánúra',
        fullDescription: 'Szeretnél egy teljesen személyre szabott túrát? Nincs gond! Válassz ki a város bármely részét, és mi szervezzük meg az ideális útvonalat számodra. Minimum 3 fő szükséges, és 24 órás előzetes foglalás szükséges. Ingyenes szállítás Budapesten belül!',
        highlights: ['Teljes szabadság az útvonal kiválasztásában', 'Professzionális vezetés', 'Ingyenes szállítás', 'Csoportos kedvezmények'],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.7661462387347!2d19.04!3d47.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3d6e3e5555%3A0x1234567890abcdef!2sBudapest!5e0!3m2!1shu!2shu!4v1234567890'
    },
    {
        id: 4,
        title: 'Private E-Bike Tour',
        distance: 'Egyedi',
        difficulty: 'Könnyű',
        duration: 'Egyedi',
        price: 'Egyedi ár',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032701332/Xb6QhABQdnJddLwjydhfLD/107715822_207613657168457_8944885146072306719_n_9b40bc52.jpg',
        description: 'Magánúra elektromos kerékpárral - a legkényelmesebb választás',
        fullDescription: 'Szeretnél egy teljesen személyre szabott e-bike túrát? Nincs gond! Az elektromos kerékpárok segítségével még több helyet tudsz felfedezni, anélkül hogy fáradt lennél. Minimum 3 fő szükséges, és 24 órás előzetes foglalás szükséges.',
        highlights: ['E-bike technológia', 'Teljes szabadság az útvonal kiválasztásában', 'Professzionális vezetés', 'Csoportos kedvezmények'],
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.7661462387347!2d19.04!3d47.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3d6e3e5555%3A0x1234567890abcdef!2sBudapest!5e0!3m2!1shu!2shu!4v1234567890'
    }
];

// Open Tour Modal
function openTourModal(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    document.getElementById('tourTitle').textContent = tour.title;
    document.getElementById('tourImage').src = tour.image;
    document.getElementById('tourDistance').textContent = tour.distance;
    document.getElementById('tourDifficulty').textContent = tour.difficulty;
    document.getElementById('tourDuration').textContent = tour.duration;
    document.getElementById('tourPrice').textContent = tour.price;
    document.getElementById('tourDescription').textContent = tour.fullDescription;
    document.getElementById('tourMap').src = tour.mapEmbed;

    // Highlights
    const highlightsContainer = document.getElementById('tourHighlights');
    highlightsContainer.innerHTML = '';
    tour.highlights.forEach(highlight => {
        const div = document.createElement('div');
        div.className = 'd-flex align-items-center gap-2 mb-2';
        div.innerHTML = `
            <span class="text-success fw-bold">✓</span>
            <span class="text-muted">${highlight}</span>
        `;
        highlightsContainer.appendChild(div);
    });

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('tourModal'));
    modal.show();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Tours page loaded');
});
