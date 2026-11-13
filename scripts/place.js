// ===========================
// Footer: current year + last modified date
// ===========================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===========================
// Weather / Wind Chill
// ===========================

// Static values for now — will be swapped for live API data in a later course.
// These are in metric units (Celsius / km per hour) to match Lagos's displayed
// weather above.
const temperature = 29; // °C
const windSpeed = 6; // km/h

/**
 * Calculates wind chill using the metric wind chill formula.
 * Only valid for temp <= 10°C and wind speed > 4.8 km/h.
 */
function calculateWindChill(tempC, windKph) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKph, 0.16) + 0.3965 * tempC * Math.pow(windKph, 0.16)).toFixed(1);
}

const windChillEl = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
  windChillEl.textContent = "N/A";
}