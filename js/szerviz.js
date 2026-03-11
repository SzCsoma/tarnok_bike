// Service Categories Data
const serviceCategories = [
    {
        title: 'Kerekek',
        items: [
            { name: 'Tömlő csere', price: '2900 Ft' },
            { name: 'Gumi csere', price: '4000 Ft' },
            { name: 'Kerék építés', price: '9200 Ft' },
            { name: 'Kerék igazítás', price: '2900 Ft' },
            { name: 'Küllő csere igazítással', price: '5500 Ft' },
            { name: 'Csapágy beállítás', price: '1700 Ft' },
            { name: 'Nábcsapágy szerviz', price: '3500 Ft' }
        ]
    },
    {
        title: 'Fékrendszer',
        items: [
            { name: 'Fék beállítás/alkatrész', price: '2900 Ft' },
            { name: 'Fék szerelés', price: '3500 Ft' },
            { name: 'Fék csere', price: '3500 Ft' },
            { name: 'Fékkéz csere (pár)', price: '3500 Ft' },
            { name: 'Féktárcsa csere', price: '2900 Ft' },
            { name: 'Kábel csere beállítással', price: '3500 Ft' },
            { name: 'Hidraulikus tárcsafék csere/szerelés', price: '4600 Ft' },
            { name: 'Hidraulikus tárcsafék javítás', price: '5800 Ft' },
            { name: 'Hidraulikus tárcsafék beállítás', price: '3500 Ft' },
            { name: 'Féktárcsa egyenesítés/kiegyensúlyozás', price: '2300 Ft' },
            { name: 'Hidraulikus olajcsere és légtelenítés', price: '5800 Ft + olaj' }
        ]
    },
    {
        title: 'Váltórendszer',
        items: [
            { name: 'Váltó beállítás/alkatrész', price: '3500 Ft' },
            { name: 'Váltó javítás', price: '4600 Ft' },
            { name: 'Váltó csere/alkatrész', price: '4000 Ft' },
            { name: 'Váltókéz csere/alkatrész', price: '3500 Ft' },
            { name: 'Kábel csere beállítással/alkatrész', price: '3500 Ft' }
        ]
    },
    {
        title: 'Hajtáslánc',
        items: [
            { name: 'Pedálkar csere/szerelés', price: '4600 Ft' },
            { name: 'Középcsapágy csere', price: '4600 Ft' },
            { name: 'Középcsapágy szerviz', price: '4600 Ft' },
            { name: 'Fogaskerék csere', price: '3500 Ft' },
            { name: 'Szabad kerék csere', price: '4600 Ft' },
            { name: 'Lánc csere', price: '2300 Ft' },
            { name: 'Lánc szerviz', price: '2300 Ft' },
            { name: 'Lánc tisztítás + kenés', price: '3500 Ft' },
            { name: 'Lánc kenés', price: '900 Ft' },
            { name: 'Pedál csere', price: '1200 Ft' },
            { name: 'Hajtáslánc teljes szerviz', price: '6900 Ft' }
        ]
    },
    {
        title: 'Kormányzás',
        items: [
            { name: 'Csapágy beállítás', price: '1700 Ft' },
            { name: 'Csapágy szerviz', price: '2300 Ft' },
            { name: 'Csapágy szétszerelés és összeszerelés', price: '4600 Ft' },
            { name: 'Csapágy csere', price: '4000 Ft' },
            { name: 'Kormány csere', price: '4000 Ft' },
            { name: 'Szár csere', price: '2900 Ft' },
            { name: 'Kormányszalag szerelés', price: '3500 Ft' },
            { name: 'Markolat szerelés/csere', price: '1200 Ft' }
        ]
    },
    {
        title: 'Ülés',
        items: [
            { name: 'Nyeregcső/nyereg csere', price: '1200 Ft' }
        ]
    },
    {
        title: 'Kerékpár összeszerelés/szétszerelés',
        items: [
            { name: 'Teljes szerviz merev villával', price: '28800 Ft' },
            { name: 'Kerékpár építés', price: '28800 Ft' },
            { name: 'Kerékpár újraépítés/váz csere', price: '28800 Ft' },
            { name: 'Kerékpár festés - porcelánozás (RAL / 1 szín)', price: '23000 Ft' },
            { name: 'Villa csere', price: '6900 Ft' },
            { name: 'Kerékpár tisztítás', price: '6900 Ft' },
            { name: 'Új kerékpár összeszerelés, beállítás, garancia érvényesítés', price: '17300 Ft' },
            { name: 'Kerékpár kartondobozba csomagolás', price: '20700 Ft' }
        ]
    },
    {
        title: 'Felfüggesztés',
        items: [
            { name: 'Rugós villa szerviz', price: 'egyedi ár' },
            { name: 'Olajozott villa szerviz', price: 'egyedi ár' },
            { name: 'Lengéscsillapító szerviz', price: 'egyedi ár' }
        ]
    },
    {
        title: 'Kiegészítők',
        items: [
            { name: 'Sárvédő szerelés', price: '3500 Ft' },
            { name: 'Csomagtartó/kosár szerelés', price: '3500 Ft' },
            { name: 'Gyerekülés szerelés', price: '4000 Ft' },
            { name: 'Kerékpárszámláló szerelés beállítással', price: '2900 Ft' },
            { name: 'Világítás szerelés', price: '2300 Ft' }
        ]
    },
    {
        title: 'Egyéb',
        items: [
            { name: 'Egyéb szerviz, amely nem szerepel a fenti listában', price: '11500 Ft/óra' },
            { name: 'Kerékpár tárolás', price: '1200 Ft/nap' },
            { name: 'Harmadik fél alkatrészeinek díja', price: '150%' }
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
                <h3 class="card-title fw-bold mb-0">${category.title}</h3>
            </div>
            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <tbody>
                        ${category.items.map((item, itemIndex) => `
                            <tr class="${itemIndex % 2 === 0 ? '' : 'table-light'}">
                                <td class="text-muted">${item.name}</td>
                                <td class="text-end">
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
