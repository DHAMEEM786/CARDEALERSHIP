document.addEventListener('DOMContentLoaded', function() {
    // Data for the car inventory
    const inventoryData = [
        {
            title: '2023 Tata Harrier XZA+',
            imageSrc: 'https://tse2.mm.bing.net/th/id/OIP.mDUUT5QVuYN5iQ-3PWrF4wHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            // Field mapping: 'date' from original prompt is now 'specs'
            specs: '18,000 km | Automatic | Diesel',
            // Field mapping: 'shortdescription' is now 'price'
            price: '₹ 22,50,000',
            detailsLink: '#',
            isAvailable: true // This car will be shown
        },
        {
            title: '2022 Hyundai Creta SX(O)',
            imageSrc: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744607863052/front-left-side-47.jpg',
            specs: '25,000 km | Automatic | Petrol',
            price: '₹ 17,80,000',
            detailsLink: '#',
            isAvailable: true // This car will be shown
        },
        {
            title: '2023 Kia Seltos GTX+',
            imageSrc: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/33372/seltos-exterior-right-front-three-quarter.jpeg?q=85',
            specs: '12,500 km | Automatic | Petrol',
            price: '₹ 19,20,000',
            detailsLink: '#',
            isAvailable: true // This car will be shown
        },
        {
            title: '2024 Mahindra Scorpio-N',
            imageSrc: 'https://images.unsplash.com/photo-1669251878809-56de3052a71fhttps://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1740050844896/front-left-side-47.jpg?tr=w-664',
            specs: '9,000 km | Manual | Diesel',
            price: '₹ 24,00,000',
            detailsLink: '#',
            isAvailable: false // This car will NOT be shown
        },
        {
            title: '2023 Maruti Suzuki Vitara Brezza',
            imageSrc: 'https://wallpaperaccess.com/full/6905958.jpg',
            specs: '15,000 km | Automatic | Petrol',
            price: '₹ 11,50,000',
            detailsLink: '#',
            isAvailable: false // This car will be shown
        }

    ];

    const inventoryContainer = document.getElementById('inventory-container');
    
    // Loop through the data and render tiles
    for (let i = 0; i < inventoryData.length; i++) {
        const car = inventoryData[i];

        // Only render the tile if the car is available
        if (car.isAvailable === true) {
            // Create a new div element for the tile
            const tile = document.createElement('div');
            tile.className = 'vehicle-tile'; // Add the CSS class

            // Set the inner HTML of the tile using the object data
            tile.innerHTML = `
                <img src="${car.imageSrc}" alt="Image of ${car.title}">
                <div class="vehicle-tile-content">
                    <h3>${car.title}</h3>
                    <p class="details">${car.specs}</p>
                    <p class="price">${car.price}</p>
                    <a href="${car.detailsLink}" target="_blank" class="details-link">View Details →</a>
                </div>
            `;

            // Append the new tile to the container
            inventoryContainer.appendChild(tile);
        }
    }

    // Contact form submission logic
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your request! We will contact you shortly.');
        contactForm.reset();
    });
});
