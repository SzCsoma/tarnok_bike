const toursData = [
    {
        id: 1,
        title: 'Fix Grand Budapest Sightseeing Tour',
        price: '15 000 HUF',
        distance: '~25 km',
        duration: '3-3.5 hrs',
        image: 'images/thumb_00_resize.jpg',
        description: 'Classic tour showcasing the city\'s most beautiful attractions',
        fullDescription: 'The old Hungarian song said: "Budapest, Budapest, you wonderful city!" Our goal is for every guest to experience the unique beauty of the Hungarian capital on a pleasant and relaxed bicycle tour. The tour starts from our office (1052 Budapest, Semmelweis Street 14.).',
        schedule: {
            spring_summer: 'April - October: Daily | Departure: 10:00 / 14:30 | Duration: 3.0-3.5 hrs',
            autumn_winter: 'November - March: Daily | Departure: 11:00 | Duration: 2.5-3.5 hrs'
        },
        highlights: [
            'Danube Promenade',
            'Chain Bridge',
            'Castle District',
            'Danube Riverside - Buda Side',
            'Margaret Bridge',
            'Margaret Island',
            'Danube Riverside - Pest Side',
            'Parliament',
            'Freedom Square',
            'St. Stephen\'s Basilica'
        ],
        highlights_if_time: [
            'Andrássy Avenue',
            'Hungarian State Opera',
            'House of Terror Museum',
            'Heroes Square',
            'Vajdahunyad Castle',
            'Széchenyi Thermal Bath',
            'City Zoo',
            'Ruin Pubs Area',
            'Synagogue'
        ],
        notes: 'Tours operate in all weather conditions. Please dress appropriately. Transfer must be booked 90 minutes before the tour.',
        mapEmbed: 'https://www.google.com/maps?q=Semmelweis+utca+14+Budapest+to+Szechenyi+Lanchid+Budapest+to+Buda+Castle+Budapest+to+Margaret+Island+Budapest+to+Parliament+Budapest+to+Szent+Istvan+Bazilika+Budapest&output=embed'
    },
    {
        id: 2,
        title: 'Sightseeing Tour +',
        price: '20 000 HUF',
        distance: '~25 km',
        duration: '3-3.5 hrs + end of day',
        image: 'images/107692010_293571288509390_6244455257136255083_n.jpg',
        description: 'Classic tour + bike rental until end of day + free transfer',
        fullDescription: 'The Fix Grand Budapest Sightseeing Tour (starting from our office), PLUS you can keep the bike until the end of the day, PLUS free transfer to your accommodation.',
        schedule: {
            spring_summer: 'April - October: Daily | Departure: 10:00 / 14:30 | Duration: 3.0-3.5 hrs',
            autumn_winter: 'November - March: Daily | Departure: 11:00 | Duration: 2.5-3.5 hrs'
        },
        highlights: [
            'Danube Promenade',
            'Chain Bridge',
            'Castle District',
            'Danube Riverside - Buda Side',
            'Margaret Bridge',
            'Margaret Island',
            'Danube Riverside - Pest Side',
            'Parliament',
            'Freedom Square',
            'St. Stephen\'s Basilica',
            'Bike rental until end of day',
            'Free transfer to accommodation'
        ],
        highlights_if_time: [
            'Andrássy Avenue',
            'Hungarian State Opera',
            'House of Terror Museum',
            'Heroes Square',
            'Vajdahunyad Castle',
            'Széchenyi Thermal Bath',
            'City Zoo',
            'Ruin Pubs Area',
            'Synagogue'
        ],
        notes: 'Tours operate in all weather conditions. Please dress appropriately. Transfer must be booked 90 minutes before the tour.',
        mapEmbed: 'https://www.google.com/maps?q=Semmelweis+utca+14+Budapest+to+Szechenyi+Lanchid+Budapest+to+Buda+Castle+Budapest+to+Margaret+Island+Budapest+to+Parliament+Budapest+to+Szent+Istvan+Bazilika+Budapest&output=embed'
    },
    {
        id: 3,
        title: 'Private Tour',
        price: 'Inside Budapest: 22,000 HUF | Szentendre: 38,000 HUF',
        distance: 'Custom',
        difficulty: 'Custom',
        duration: 'Custom',
        image: 'images/thumb_00_resize.jpg',
        description: 'Customized private tour tailored to your preferences',
        fullDescription: 'This program is up to your fantasy! Tell us your desires (what, when and where you want to go), and we will organize the ideal route for you. Free transfer within Budapest!',
        schedule: {
            availability: 'January - December: Anytime, 24 hours prior booking required',
            minimum: 'Minimum 3 persons'
        },
        highlights: [
            'Complete freedom in route selection',
            'Professional guidance',
            'Free transfer within Budapest',
            'Group discounts available',
            'Personalized experience'
        ],
        highlights_if_time: [],
        notes: 'Minimum 3 persons required. 24 hours prior booking required. Free transfer within Budapest!',
        mapEmbed: 'https://www.google.com/maps?q=Budapest&output=embed'
    },
    {
        id: 4,
        title: 'Fix E-Bike Grand Budapest Sightseeing Tour',
        price: '20 000 HUF',
        distance: '~25 km',
        duration: '3-3.5 hrs',
        image: 'images/ebike_resize.jpg',
        description: 'Classic tour on electric bikes - easier and more comfortable',
        fullDescription: 'The same wonderful route as the classic Grand Budapest tour, but on electric bikes! With e-bikes, you can explore the city\'s most beautiful places even more easily and comfortably. Ideal for those who want to enjoy the adventure without fatigue.',
        schedule: {
            spring_summer: 'April - October: Daily | Departure: 10:00 / 14:30 | Duration: 3.0-3.5 hrs',
            autumn_winter: 'November - March: Daily | Departure: 11:00 | Duration: 2.5-3.5 hrs'
        },
        highlights: [
            'Danube Promenade',
            'Chain Bridge',
            'Castle District',
            'Danube Riverside - Buda Side',
            'Margaret Bridge',
            'Margaret Island',
            'Danube Riverside - Pest Side',
            'Parliament',
            'Freedom Square',
            'St. Stephen\'s Basilica',
            'E-bike Technology (Pedelec System)'
        ],
        highlights_if_time: [
            'Andrássy Avenue',
            'Hungarian State Opera',
            'House of Terror Museum',
            'Heroes Square',
            'Vajdahunyad Castle',
            'Széchenyi Thermal Bath',
            'City Zoo',
            'Ruin Pubs Area',
            'Synagogue'
        ],
        notes: 'Tours operate in all weather conditions. Please dress appropriately. Transfer must be booked 90 minutes before the tour. Maximum 12 persons.',
        mapEmbed: 'https://www.google.com/maps?q=Semmelweis+utca+14+Budapest+to+Szechenyi+Lanchid+Budapest+to+Buda+Castle+Budapest+to+Margaret+Island+Budapest+to+Parliament+Budapest+to+Szent+Istvan+Bazilika+Budapest&output=embed'
    },
    {
        id: 5,
        title: 'Private E-Bike Tour',
        price: 'Inside Budapest: 25,000 HUF | Szentendre: 42,000 HUF',
        distance: 'Custom',
        duration: 'Custom',
        image: 'images/ebike_01.jpg',
        description: 'Private tour on electric bikes - the most comfortable choice',
        fullDescription: 'Want a completely personalized e-bike tour? No problem! With electric bikes, you can discover even more places without getting tired. Tell us your preferences, and we will organize the ideal route for you.',
        schedule: {
            availability: 'January - December: Anytime, 24 hours prior booking required',
            minimum: 'Minimum 3 persons, Maximum 12 persons'
        },
        highlights: [
            'E-bike Technology (Pedelec System)',
            'Complete freedom in route selection',
            'Professional guidance',
            'Group discounts available',
            'Free transfer within Budapest',
            'Personalized experience'
        ],
        highlights_if_time: [],
        notes: 'Minimum 3 persons, Maximum 12 persons required. 24 hours prior booking required. Free transfer within Budapest!',
        mapEmbed: 'https://www.google.com/maps?q=Budapest&output=embed'
    },
    {
        id: 6,
        title: 'Bike Rental',
        price: 'Half Day: 5,500 HUF | Full Day: 7,000 HUF',
        distance: 'Custom',
        duration: 'Custom',
        image: 'images/tour_cover_resize.jpg',
        description: 'Rent a bike and explore the city at your own pace',
        fullDescription: 'Rent a high-quality bicycle and explore Budapest on your own terms. We provide excellent quality locks and helmets with every rental. Available daily from our office.',
        schedule: {
            availability: 'Every day at the office'
        },
        highlights: [
            'High-quality bicycles',
            'Free helmet and lock',
            'Flexible rental periods',
            'Professional advice',
            'Explore at your own pace'
        ],
        highlights_if_time: [],
        notes: 'Half day: maximum 5 hours. Full day: entire day. Available daily at our office.',
        mapEmbed: 'https://www.google.com/maps?q=Best+Bike+Tours+Budapest&output=embed'
    },
    {
        id: 7,
        title: 'E-Bike Rental',
        price: 'Half Day: 12,000 HUF | Full Day: 15,000 HUF',
        distance: 'Custom',
        duration: 'Custom',
        image: 'images/ebike_resize.jpg',
        description: 'Rent an electric bike and explore effortlessly',
        fullDescription: 'Rent a high-quality electric bike and explore Budapest without effort. E-bikes make it easy to cover more distance and enjoy the city comfortably. We provide excellent quality locks and helmets with every rental.',
        schedule: {
            availability: 'Every day at the office'
        },
        highlights: [
            'High-quality e-bikes',
            'Free helmet and lock',
            'Flexible rental periods',
            'E-bike Technology (Pedelec System)',
            'Explore effortlessly',
            'Professional advice'
        ],
        highlights_if_time: [],
        notes: 'Half day: maximum 5 hours. Full day: entire day. Available daily at our office.',
        mapEmbed: 'https://www.google.com/maps?q=Best+Bike+Tours+Budapest&output=embed'
    }
];


// Open Tour Modal
function openTourModal(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    document.getElementById('tourTitle').textContent = tour.title;
    document.getElementById('tourImage').src = tour.image;
    document.getElementById('tourDistance').textContent = tour.distance;
    document.getElementById('tourDuration').textContent = tour.duration;
    document.getElementById('tourPrice').textContent = tour.price;
    document.getElementById('tourDescription').textContent = tour.fullDescription;
    document.getElementById('tourMap').src = tour.mapEmbed;

    // Schedule
    const scheduleContainer = document.getElementById('tourSchedule');
    scheduleContainer.innerHTML = '';
    if (tour.schedule) {
        const scheduleDiv = document.createElement('div');
        scheduleDiv.className = 'alert alert-info';
        let scheduleHtml = '<strong>Schedule:</strong><br>';
        if (tour.schedule.spring_summer) {
            scheduleHtml += `🌞 ${tour.schedule.spring_summer}<br>`;
        }
        if (tour.schedule.autumn_winter) {
            scheduleHtml += `❄️ ${tour.schedule.autumn_winter}`;
        }
        if (tour.schedule.availability) {
            scheduleHtml += `📅 ${tour.schedule.availability}<br>`;
        }
        if (tour.schedule.minimum) {
            scheduleHtml += `👥 ${tour.schedule.minimum}`;
        }
        scheduleDiv.innerHTML = scheduleHtml;
        scheduleContainer.appendChild(scheduleDiv);
    }

    // Highlights
    const highlightsContainer = document.getElementById('tourHighlights');
    highlightsContainer.innerHTML = '';
    const highlightsCols = document.createElement('div');
    highlightsCols.className = 'row';
    const col = document.createElement('div');
    col.className = 'col-12';
    tour.highlights.forEach(highlight => {
        const div = document.createElement('div');
        div.className = 'd-flex align-items-center gap-2 mb-2';
        div.innerHTML = `
            <span class="text-success fw-bold">✓</span>
            <span class="text-muted">${highlight}</span>
        `;
        col.appendChild(div);
    });
    highlightsCols.appendChild(col);
    highlightsContainer.appendChild(highlightsCols);

    // Highlights if time
    const highlightsIfTimeContainer = document.getElementById('tourHighlightsIfTime');
    highlightsIfTimeContainer.innerHTML = '';
    if (tour.highlights_if_time && tour.highlights_if_time.length > 0) {
        const h6 = document.createElement('h6');
        h6.className = 'fw-bold mt-4 mb-2';
        h6.textContent = 'If time permits:';
        highlightsIfTimeContainer.appendChild(h6);
        tour.highlights_if_time.forEach(highlight => {
            const div = document.createElement('div');
            div.className = 'd-flex align-items-center gap-2 mb-2';
            div.innerHTML = `
                <span class="text-warning fw-bold">+</span>
                <span class="text-muted">${highlight}</span>
            `;
            highlightsIfTimeContainer.appendChild(div);
        });
    }

    // Notes
    const notesContainer = document.getElementById('tourNotes');
    notesContainer.innerHTML = '';
    if (tour.notes) {
        notesContainer.innerHTML = `<div class="alert alert-warning"><small>ℹ️ ${tour.notes}</small></div>`;
    }

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('tourModal'));
    modal.show();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log('Tours page loaded');
});
