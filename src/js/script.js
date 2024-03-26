document.getElementById("main-action-button").onclick = () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

document.querySelectorAll(".menu-item > a").forEach(link => {
    link.onclick = () => {
        document.getElementById(link.getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    };
});

document.querySelectorAll(".products-button").forEach(button => {
    button.onclick = () => {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    };
});

document.getElementById("change-currency").onclick = (e) => {
    let currentCurrency = e.target.innerText;
    let currencies = { "$": ["₴", 38], "₴": ["€", 1.08], "€": ["¥", 6.9] };
    let [newCurrency, coefficient] = currencies[currentCurrency];
    e.target.innerText = newCurrency;
    document.querySelectorAll(".products-item-price").forEach(price => {
        let basePrice = parseFloat(price.getAttribute("data-base-price"));
        let convertedPrice = Math.round(basePrice * coefficient);
        price.innerText = convertedPrice + newCurrency;
    });
};