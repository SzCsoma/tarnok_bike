// Service Categories Data
const serviceCategories = [
    {
        title: 'Kerék',
        items: [
            { name: 'Belső csere', price: '3 000 Ft' },
            { name: 'Külső + belső csere (agyváltós / kontrás / gyerek kerékpár)', price: '4 000 Ft' },
            { name: 'Kerékfűzés', price: '10 000 Ft' },
            { name: 'Centírozás', price: '3 000 Ft' },
            { name: 'Küllő csere (centírozással)', price: '5 500 Ft' },
            { name: 'Agyváltó szerviz (olajfürdős tisztítás)', price: '10 000 Ft' },
            { name: 'Kónusz állítás', price: '1 700 Ft' },
            { name: 'Tubeless átalakítás (folyadék, szalag, szelep)', price: '8 000 Ft / kerék' },
            { name: 'Tubeless kerékszett csere', price: '25 000 Ft' }
        ]
    },
    {
        title: 'Kormányzás',
        items: [
            { name: 'Kormánycsapágy beállítás', price: '1 700 Ft' },
            { name: 'Kormánycsapágy generál', price: '2 300 Ft' },
            { name: 'Kormánycsapágy csere', price: '4 600 Ft' },
            { name: 'Kormányszár csere', price: '2 900 Ft' },
            { name: 'Kormány csere', price: '4 000 Ft' },
            { name: 'Bandázsolás', price: '4 000 Ft' },
            { name: 'Markolat csere', price: '1 200 Ft' }
        ]
    },
    {
        title: 'Fékrendszer',
        items: [
            { name: 'Fék állítás', price: '3 000 Ft' },
            { name: 'Féktest csere', price: '3 500 Ft' },
            { name: 'Fékkar csere (pár)', price: '3 500 Ft' },
            { name: 'Fékpofa csere', price: '3 000 Ft' },
            { name: 'Tárcsafék betét csere', price: '3 500 Ft' },
            { name: 'Fék légtelenítés (hidraulikus)', price: '8 000 Ft / fék' },
            { name: 'Hidraulikus fékcső csere', price: '10 000 Ft / fék' },
            { name: 'Bowden csere (fékenként)', price: '3 500 Ft' }
        ]
    },
    {
        title: 'Váltórendszer',
        items: [
            { name: 'Váltóállítás', price: '3 500 Ft' },
            { name: 'Váltó egyengetés', price: '4 600 Ft' },
            { name: 'Váltó csere', price: '4 000 Ft' },
            { name: 'Váltókar csere', price: '3 500 Ft' },
            { name: 'Bowden csere', price: '3 500 Ft' }
        ]
    },
    {
        title: 'Hajtásrendszer',
        items: [
            { name: 'Hajtókar szerelés / csere', price: '4 600 Ft' },
            { name: 'Középcsapágy szerelés / csere', price: '4 600 Ft' },
            { name: 'Lánctányér csere', price: '3 500 Ft' },
            { name: 'Racsni / fogaskeréksor csere', price: '4 600 Ft' },
            { name: 'Lánc csere', price: '2 300 Ft' },
            { name: 'Lánc tisztítás (ultrahangos)', price: '4 000 Ft' },
            { name: 'Lánc olajozás', price: '1 000 Ft' },
            { name: 'Pedál csere', price: '1 200 Ft' },
            { name: 'Hajtás teljes tisztítása (ultrahangos)', price: '15 000 Ft' }
        ]
    },
    {
        title: 'Váz és kerékpár',
        items: [
            { name: 'Villa csere', price: '6 900 Ft' },
            { name: 'Váz átépítés', price: '29 000 Ft' },
            { name: 'Váz és villa szinterezés', price: '23 000 Ft' },
            { name: 'Teljes kerékpár építés', price: '29 000 Ft' }
        ]
    },
    {
        title: 'Általános szerviz',
        items: [
            { name: 'Kis szerviz', price: '15 000 Ft' },
            { name: 'Kis szerviz (E-bike)', price: '20 000 Ft' },
            { name: 'Nagy szerviz', price: '29 000 Ft' },
            { name: 'Nagy szerviz (E-bike)', price: '34 000 Ft' },
            { name: 'Teleszkóp szerviz', price: 'Egyedi ár' },
            { name: 'Tag szerviz', price: 'Egyedi ár' }
        ]
    },
    {
        title: 'Kiegészítők',
        items: [
            { name: 'Sárvédő felszerelés', price: '3 500 Ft' },
            { name: 'Csomagtartó / kosár felszerelés', price: '3 500 Ft' },
            { name: 'Gyerekülés felszerelés', price: '4 000 Ft' },
            { name: 'Computer felszerelés', price: '2 900 Ft' },
            { name: 'Lámpa felszerelés / elemcsere', price: '2 300 Ft' }
        ]
    },
    {
        title: 'Egyéb szolgáltatások',
        items: [
            { name: 'Első kötelező szerviz (nálunk vásárolt kerékpár)', price: 'Ingyenes' },
            { name: 'Első kötelező szerviz', price: '10 000 Ft' },
            { name: 'Kerékpár átvizsgálás, árajánlat', price: '5 000 Ft' },
            { name: 'Nyereg csere', price: '2 000 Ft' },
            { name: 'Erősen szennyezett kerékpár tisztítása', price: '15 000 Ft' },
            { name: 'Szoftver frissítés', price: '10 000 Ft' },
            { name: 'Lánc waxolás', price: '10 000 Ft' },
            { name: 'Munkadíj', price: '11 500 Ft / óra' }
        ]
    }
];

// Render Service Categories
function renderServiceCategories() {
    const container = document.getElementById('serviceCategories');
    container.innerHTML = '';

    serviceCategories.forEach((category, index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'card shadow-lg border-0 mb-4';
        categoryDiv.innerHTML = `
            <div class="card-header bg-gradient text-white">
                <h3 class="card-title fw-bold mb-0 fs-5">${category.title}</h3>
            </div>
            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <tbody>
                        ${category.items.map((item, itemIndex) => `
                            <tr class="${itemIndex % 2 === 0 ? '' : 'table-light'}">
                                <td class="text-muted">${item.name}</td>
                                <td class="text-end" style="white-space: nowrap;">
                                    <span class="badge bg-primary fw-bold">${item.price}</span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        container.appendChild(categoryDiv);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderServiceCategories();
    console.log('Service page loaded');
});
