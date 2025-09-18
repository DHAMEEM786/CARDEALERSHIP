document.addEventListener('DOMContentLoaded', function() {
    // Data for the car inventory
    const inventoryData = [
        {
            title: '2023 Tata Harrier XZA+',
            imageSrc: 'https://images.unsplash.com/photo-1619256802113-754d72a088a8',
            // Field mapping: 'date' from original prompt is now 'specs'
            specs: '18,000 km | Automatic | Diesel',
            // Field mapping: 'shortdescription' is now 'price'
            price: '₹ 22,50,000',
            detailsLink: '#',
            isAvailable: true // This car will be shown
        },
        {
            title: '2022 Hyundai Creta SX(O)',
            imageSrc: 'https://images.unsplash.com/photo-1617814086918-474c10a112c1',
            specs: '25,000 km | Automatic | Petrol',
            price: '₹ 17,80,000',
            detailsLink: '#',
            isAvailable: true // This car will be shown
        },
        {
            title: '2023 Kia Seltos GTX+',
            imageSrc: 'https://images.unsplash.com/photo-1628182189689-9a2b9637e19d',
            specs: '12,500 km | Automatic | Petrol',
            price: '₹ 19,20,000',
            detailsLink: '#',
            isAvailable: true // This car will be shown
        },
        {
            title: '2024 Mahindra Scorpio-N',
            imageSrc: 'https://images.unsplash.com/photo-1669251878809-56de3052a71f',
            specs: '9,000 km | Manual | Diesel',
            price: '₹ 24,00,000',
            detailsLink: '#',
            isAvailable: false // This car will NOT be shown
        },
        {
            title: '2023 Maruti Suzuki Vitara Brezza',
            imageSrc: 'https://images.unsplash.com/photo-1616628187761-3a5e4f4b8b6c',
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
