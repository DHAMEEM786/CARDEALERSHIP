document.addEventListener('DOMContentLoaded', function() {
    const inventoryData = [
        {
            title: '2023 Tata Harrier XZA+',
            imageSrc: 'https://tse2.mm.bing.net/th/id/OIP.mDUUT5QVuYN5iQ-3PWrF4wHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            specs: '18,000 km | Automatic | Diesel',
            price: '₹ 22,50,000',
            detailsLink: '#',
            isAvailable: true
        },
        {
            title: '2022 Hyundai Creta SX(O)',
            imageSrc: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744607863052/front-left-side-47.jpg',
            specs: '25,000 km | Automatic | Petrol',
            price: '₹ 17,80,000',
            detailsLink: '#',
            isAvailable: true
        },
        {
            title: '2023 Kia Seltos GTX+',
            imageSrc: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/33372/seltos-exterior-right-front-three-quarter.jpeg?q=85',
            specs: '12,500 km | Automatic | Petrol',
            price: '₹ 19,20,000',
            detailsLink: '#',
            isAvailable: true
        },
        {
            title: '2024 Mahindra Scorpio-N',
            imageSrc: 'https://tse2.mm.bing.net/th/id/OIP.mDUUT5QVuYN5iQ-3PWrF4wHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            specs: '9,000 km | Manual | Diesel',
            price: '₹ 24,00,000',
            detailsLink: '#',
            isAvailable: false
        },
        {
            title: '2023 Maruti Suzuki Vitara Brezza',
            imageSrc: 'https://wallpaperaccess.com/full/6905958.jpg',
            specs: '15,000 km | Automatic | Petrol',
            price: '₹ 11,50,000',
            detailsLink: '#',
            isAvailable: true 
        }
    ];

    const inventoryContainer = document.getElementById('inventory-container');

    for (let i = 0; i < inventoryData.length; i++) {
        const car = inventoryData[i];
        if (car.isAvailable === true) {
            const tile = document.createElement('div');
            tile.className = 'vehicle-tile'; 
            tile.innerHTML = `
                <img src="${car.imageSrc}" alt="Image of ${car.title}">
                <div class="vehicle-tile-content">
                    <h3>${car.title}</h3>
                    <p class="details">${car.specs}</p>
                    <p class="price">${car.price}</p>
                    <a href="${car.detailsLink}" target="_blank" class="details-link">View Details →</a>
                </div>
            `;
            inventoryContainer.appendChild(tile);
        }
    }
});