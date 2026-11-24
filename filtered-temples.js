const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/laie-hawaii.jpg"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, March, 16",
    area: 100000,
    imageUrl: "images/rexburg-idaho.jpg"
  }
];

const filters = {
  home: () => true,
  old: t => parseInt(t.dedicated) < 1900,
  new: t => parseInt(t.dedicated) > 2000,
  large: t => t.area > 90000,
  small: t => t.area < 10000
};

const headings = {
  home: "Home",
  old: "Old Temples",
  new: "New Temples",
  large: "Large Temples",
  small: "Small Temples"
};

const cardContainer = document.getElementById("temple-cards");
const heading = document.getElementById("page-heading");

function displayTemples(filterKey) {
  const visible = temples.filter(filters[filterKey]);
  cardContainer.innerHTML = "";

  visible.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="details">
        <h3>${t.templeName}</h3>
        <p><span class="label">Location:</span> <span class="value">${t.location}</span></p>
        <p><span class="label">Dedicated:</span> <span class="value">${t.dedicated}</span></p>
        <p><span class="label">Area:</span> <span class="value">${t.area.toLocaleString()} sq ft</span></p>
      </div>
      <img src="${t.imageUrl}" alt="${t.templeName} Temple" width="600" height="400" loading="lazy" decoding="async">
    `;
    cardContainer.appendChild(card);
  });

  heading.textContent = headings[filterKey];
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displayTemples(btn.dataset.filter);
  });
});

document.getElementById("last-modified").textContent =
  "Last modified: " + document.lastModified;

displayTemples("home");