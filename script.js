document.addEventListener("DOMContentLoaded", function() {
    const carGallery = document.querySelector('.car-gallery');
    const themeToggleButton = document.getElementById('theme-toggle');
    const form = document.querySelector('.contact-form');
    const body = document.body;

    // 6 ta avtomobil haqida ma'lumotlar
    const cars = [
        {
            name: "Audi Q7",
            year: 2021,
            engine: "3.0L V6",
            price: "$75,000",
            image: "https://yastatic.net/naydex/yandex-search/fwOn9z063/6136fcBTr/HwPOVTcRxnpCjCN8I-mqTWG7rtVhjTemEea3vm1DFrwf4XCQsEWrSK1pdmHcyp7p4uFqPQAySDMfOfP6_VRNzk4em0AGOOoDI_03EXPJpllpztvZJfxft2WPvs8UXxqUJq19OETJJ9EYla-AJHdrwILcPiAAX1xquoA",
            color: "Qizil"
        },
        {
            name: "BMW X5",
            year: 2020,
            engine: "3.5L V6",
            price: "$95,000",
            image: "https://yastatic.net/naydex/yandex-search/fwOn6z903/6136fcBTr/HwPOVTcRxnpCjCN8I-mqTWG7rtVhjTefeZOS3xhOUv03FH3QvAWveNlgImHtgprhu6FncTAuRWMLLL-GKVRol3uPN01TpXfG8hSS-I9JDvnNvpLVZchquyWWWjQ",
            color: "Oq"
        },
        {
            name: "Mercedes-Benz G-Class",
            year: 2021,
            engine: "5.0L V8 Bi-Turbo",
            price: "$120,000",
            image: "https://avatars.mds.yandex.net/i?id=22b0570a8f839b2a35566b7ce9df1b42d4e4bc88-16330772-images-thumbs&n=13",
            color: "Qora"
        },
        {
            name: "Tesla Model S",
            year: 2022,
            engine: "Elektr",
            price: "$85,000",
            image: "https://avatars.mds.yandex.net/i?id=b9f82736a2ed172e8af8e3a606e880b8b11bc9e8-7458047-images-thumbs&n=13",
            color: "Moviy"
        },
        {
            name: "Porsche 911",
            year: 2022,
            engine: "3.0L Turbo",
            price: "$150,000",
            image: "https://i.ytimg.com/vi/H2Ipa5121qA/maxresdefault.jpg",
            color: "Yashil"
        },
        {
            name: "Lamborghini Aventador",
            year: 2023,
            engine: "6.5L V12",
            price: "$300,000",
            image: "https://avatars.mds.yandex.net/i?id=06cb4819f1f21486e45d4f4f56d5b1bfe49700e1-4592892-images-thumbs&n=13",
            color: "Qizil"
        }
    ];

    // Dinamik avtomobillarni qo'shish
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p><strong>Yil:</strong> ${car.year}</p>
            <p><strong>Dvigatel:</strong> ${car.engine}</p>
            <p><strong>Rang:</strong> ${car.color}</p>
            <p class="price">${car.price}</p>
        `;
        carGallery.appendChild(carCard);
    });

    // Tema o'zgartirish funksiyasi (Light/Dark)
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // Formani yuborish
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Forma yuborilishini to'xtatish
        alert('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog’lanamiz.');
        form.reset(); // Formani tozalash
    });
});
