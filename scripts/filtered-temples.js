const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();
document.getElementById("lastModified").textContent = 'Last Modified ' + document.lastModified;


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cardston Alberta",
        location: "Cardston, Alberta, Canada",
        dedicated: "1913, July, 27",
        area: 88562,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/800x500/cardston-alberta-temple-exterior-1126230-wallpaper.jpg"
    },
    {
        templeName: "Calgary Alberta",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 5",
        area: 33000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/800x500/calgary-albert-temple-lds-1059122-wallpaper.jpg"
    },
    {
        templeName: "Birmingham Alabama",
        location: "Birmingham, Alabama",
        dedicated: "2000, September, 3",
        area: 10700,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/26997a0eac228b51de04df861686ccc0cb3bbf92/full/800%2C/0/default"
    },
];

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const templeCardsContainer = document.querySelector("#temple-cards-container");

const oldTemples = function (temple) {
    const dedicated = temple.dedicated.split(',');
    return parseInt(dedicated[0]) < 1900;
}
const newTemples = function (temple) {
    const dedicated = temple.dedicated.split(',');
    return parseInt(dedicated[0]) > 2000;
}
const largeTemples = function (temple) {
    return temple.area > 90000;
}
const smallTemples = function (temple) {
    return temple.area < 10000;
}
const allTemples = function (temple) {
    return true;
}

const displayTemples = function (temples) {
    templeCardsContainer.replaceChildren();
    temples.forEach(function (temple, index) {
        const card = `
        <div class='card'>
            <h2>${temple.templeName}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Location:</th>
                        <td>${temple.location}</td>
                    </tr>
                    <tr>
                        <th>Dedicated:</th>
                        <td>${temple.dedicated}</td>
                    </tr>
                    <tr>
                        <th>Size:</th>
                        <td>${temple.area} sq ft</td>
                    </tr>
                </tbody>
            </table>
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="275" height="170">
                <figcaption></figcaption>
            </figure>
        </div>
    `;
        templeCardsContainer.insertAdjacentHTML('beforeend', card);

    });
}

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

navigation.addEventListener("click", (e) => {
    const link = e.target.closest('a');
    e.preventDefault(); 
    let filterFunction = allTemples;
    if (link.title === 'Old') {
        filterFunction = oldTemples;
    } else if (link.title === 'New') {
        filterFunction = newTemples;
    } else if (link.title === 'Large') {
        filterFunction = largeTemples;
    } else if (link.title === 'Small') {
        filterFunction = smallTemples;
    }
    displayTemples(temples.filter(filterFunction));
});



displayTemples(temples);
