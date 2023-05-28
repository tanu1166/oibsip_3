const CelsiusEl = document.getElementById("Celsius");
const FahrenheitEl = document.getElementById("Fahrenheit");
const KelvinEl = document.getElementById("Kelvin");
function computeTemp() {
    const currentvalue = +event.target.value;
    switch (event.target.name) {
        case "Celsius":
            KelvinEl.value = currentvalue + 273.15;
            FahrenheitEl.value = currentvalue * 1.8 + 32;




            break;
        case "Fahrenheit":
            CelsiusEl.value = (currentvalue - 32) / 1.8;
            KelvinEl.value = (currentvalue - 32) / 1.8 + 273.15;




            break;
        case "Kelvin":
            CelsiusEl.value = currentvalue - 273.15;
            FahrenheitEl.value = (currentvalue - 273.15) * 1.8 + 32;




            break;

        default:
            break;
    }
}