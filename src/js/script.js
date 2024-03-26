document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("products-button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}


let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₴";
        coefficient = 38;
    } else if (currentCurrency === "₴") {
        newCurrency = "€";
        coefficient = 1.08;
    } else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        let basePrice = parseFloat(prices[i].getAttribute("data-base-price"));
        let convertedPrice = Math.round(basePrice * coefficient); 
        prices[i].innerText = convertedPrice + newCurrency; 
    }
}


$('.special_carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true
});
$(".prev-btn").click(function () {
    $(".special_carousel").slick("slickPrev");
});

$(".next-btn").click(function () {
    $(".special_carousel").slick("slickNext");
});
$(".prev-btn").addClass("slick-disabled");
$(".special_carousel").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn").addClass("slick-disabled");
    } else {
        $(".prev-btn").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn").addClass("slick-disabled");
    } else {
        $(".next-btn").removeClass("slick-disabled");
    }
});