const langArr = {
    "unit" : {
        "ru": "Дом бургеров",
        "ua": "Будинок бургерів",
    },
    "first" : {
        "ru": "Почему у нас",
        "ua": "Чому у нас",
    },
    "second": {
        "ru": "Меню бургеров",
        "ua": "Меню бургерів",
    },
    "third": {
        "ru": "Оформление заказа",
        "ua": "Оформлення заказу",
    },


    "new": {
        "ru": "Новое меню",
        "ua": "Нове меню",
    },
    "title": {
        "ru": "Бургер чеддер",
        "ua": "Бургер чеддер",
    },
    "subtitle": {
        "ru": "Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.",
        "ua": "Ми оновили наше меню, поспішайте спробувати сезонні новинки та насолодитися відмінним смаком наших бургерів. Готуємо для вас найкращі бургери у місті із добірної мармурової яловичини.",
    },
    "button": {
        "ru": "Смотреть меню",
        "ua": "Дивитися меню",
    },


    "why-title": {
        "ru": "Почему нас выбирают?",
        "ua": "Чому нас обирають?",
    },
    "why-item1": {
        "ru": "Авторские рецепты",
        "ua": "Авторські рецепти",
    },
    "why-subitem1": {
        "ru": "Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.",
        "ua": "Наші бургери мають унікальне поєднання смаків і не схожі ні на які інші. Ми ретельно відбираємо найкращі інгредієнти та поєднання смаків для нашого меню.",
    },
    "why-item2": {
        "ru": "Мраморная говядина",
        "ua": "Мармурова телятина",
    },
    "why-subitem2": {
        "ru": "Для наших бургеров мы используем отборную 100% мраморную говядину, которую закупаем исключительно у фермеров. Мы уверены в качестве нашего мяса.",
        "ua": "Для наших бургерів ми використовуємо добірну 100% мармурову яловичину, яку закуповуємо виключно у фермерів. Ми впевнені як наше м'ясо.",
    },
    "why-item3": {
        "ru": "Быстрая доставка",
        "ua": "Швидка доставка",
    },
    "why-subitem3": {
        "ru": "Мы доставляем в пределах 30 минут, а если не успеем — доставка бесплатно. Мы тщательно упаковываем наши бургеры, чтобы по дороге они не остыли.Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.",
        "ua": "Ми доставляємо в межах за 30 хвилин, а якщо не встигнемо, доставка безкоштовно. Ми ретельно упаковуємо наші бургери, щоб дорогою вони не охолонули.",
    },


    "products-title": {
        "ru": "Наше меню",
        "ua": "Наше меню",
    },
    "products-item-title1": {
        "ru": "Бургер чеддер & бекон",
        "ua": "Бургер чеддер & бекон",
    },
    "products-item-text1": {
        "ru": "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
        "ua": "Котлета з яловичини криспі, булочка, томат, сир Чеддер, грудинка, цибуля червона, салат айсбер, майонез, кетчуп, сирний соус",
    },
    "products-item-button1": {
        "ru": "Заказать",
        "ua": "Замовити",
    },
    
    "products-item-title2": {
        "ru": "BBQ с беконом и курицей",
        "ua": "BBQ з беконом та куркою",
    },
    "products-item-text2": {
        "ru": "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
        "ua": "Булочка бриоша з кунжутом, куряча котлета, сир чеддер, томат, маринований огірок, цибуля маринована, салат Ромен, бекон, соус BBQ",
    },
    "products-item-button2": {
        "ru": "Заказать",
        "ua": "Замовити",
    },

    "products-item-title3": {
        "ru": "Дабл биф бургер",
        "ua": "Дабл біф бургер",
    },
    "products-item-text3": {
        "ru": "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук,соус бургер, горчица",
        "ua": "Дві яловичі котлети, сир чеддер, салат романо, мариновані огірки, свіжий томат, бекон, червона цибуля, соус бургер, гірчиця",
    },
    "products-item-button3": {
        "ru": "Заказать",
        "ua": "Замовити",
    },


    "order-title": {
        "ru": "Оформление заказа",
        "ua": "Оформлення заказу",
    },
}

const select = document.querySelector('select');
const allLang = ['ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;

    
    document.title = langArr['unit'][hash];
    document.querySelector('.lng-first').innerHTML = langArr['first'][hash];
    document.querySelector('.lng-second').innerHTML = langArr['second'][hash];
    document.querySelector('.lng-third').innerHTML = langArr['third'][hash];

    document.querySelector('.lng-new').innerHTML = langArr['new'][hash];
    document.querySelector('.lng-title').innerHTML = langArr['title'][hash];
    document.querySelector('.lng-subtitle').innerHTML = langArr['subtitle'][hash];
    document.querySelector('.lng-button').innerHTML = langArr['button'][hash];

    document.querySelector('.lng-why-title').innerHTML = langArr['why-title'][hash];
    document.querySelector('.lng-why-item1').innerHTML = langArr['why-item1'][hash];
    document.querySelector('.lng-why-subitem1').innerHTML = langArr['why-subitem1'][hash];
    document.querySelector('.lng-why-item2').innerHTML = langArr['why-item2'][hash];
    document.querySelector('.lng-why-subitem2').innerHTML = langArr['why-subitem2'][hash];
    document.querySelector('.lng-why-item3').innerHTML = langArr['why-item3'][hash];
    document.querySelector('.lng-why-subitem3').innerHTML = langArr['why-subitem3'][hash];

    document.querySelector('.lng-order').innerHTML = langArr['order-title'][hash];
}

changeLanguage();
