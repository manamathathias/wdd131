const COUNT_KEY = "reviewCount";
const params = new URLSearchParams(window.location.search);

// Only count when this page is reached through a form submission
if (params.has("product")) {
  try {
    const current = parseInt(localStorage.getItem(COUNT_KEY), 10) || 0;
    localStorage.setItem(COUNT_KEY, current + 1);
  } catch (error) {
    console.warn("localStorage is unavailable:", error);
  }
}

try {
  document.getElementById("count").textContent = localStorage.getItem(COUNT_KEY) || 0;
} catch (error) {
  document.getElementById("count").textContent = "unavailable";
}

// Show the submitted answers. textContent keeps the output safe from injected HTML.
const labels = {
  product: "Product",
  rating: "Rating",
  installDate: "Installed",
  features: "Feature",
  review: "Review",
  userName: "Name"
};

const summary = document.getElementById("summary");

for (const [key, value] of params) {
  if (!value) continue;
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = `${labels[key] || key}: `;
  p.append(strong, document.createTextNode(value));
  summary.appendChild(p);
}