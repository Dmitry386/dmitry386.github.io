
const locAttributeName = "data-loc";
const langs = ["en", "ru"];

const localizations = {
    "ru": {
        "MAIN": "ГЛАВНАЯ",
        "CONTACT": "СВЯЗАТЬСЯ",
        "WEB": "САЙТЫ",
        "Web": "Сайты",
        "GAMES": "ИГРЫ",
        "Games": "Игры",
        "APPS": "ПРИЛОЖЕНИЯ",
        "Applications": "Приложения",
        "Skills": "Навыки",

        // main
        "Dmitry Volkov": "Волков Дмитрий",
        "Software Engineer": "Инженер програмного обеспечения",
        "About": "Обо мне",
        "Education": "Образование",
        "ABOUT.ME.INTRO": "Меня зовут Дмитрий, 21 год, в данный момент учусь на инженера ПО в магистратуре. Интересуюсь разработкой игр, мультиплеером для игр. Сейчас постепенно изучаю веб-разработку и Unity WebGL.",
        "Taras Shevchenko National University of Kiev.": "Киевский национальный университет имени Тараса Шевченко.",
        "ED.COURSEWORK": "Курсовая работа: Разработка прототипа стратегической игры в реальном времени с сетевым взаимодействием.",
        "Bachelor of Software Engineering.": "Бакалавр Инженерии Програмного Обеспечения",

        // apps
        "Windows applications": "Windows-приложения",

        // web
        "Web applications": "Веб-приложения",

        // project box
        "Link": "Ссылка",
        "Platform": "Платформа",
        "Description": "Описание",
        "Features": "Особенности",
    },
    "en":
    {
        "ABOUT.ME.INTRO": "My name is Dmitry, 21 years old, currently studying Software Engineer at Master's program. I am interested in game development, multiplayer for games. Now I am gradually learning web development and Unity WebGL.",
        "ED.COURSEWORK": "Coursework: Development of a prototype of a real-time strategy game with network interaction.",
    },
};

// ---------------------------- todo: to json

function getCurrentLanguage() {
    let lang = window.location.hash.substring(1);

    if (!langs.includes(lang)) {
        lang = langs[0];
    }

    return lang;
}

function getNextLanguageToSwitch() {
    let lang = getCurrentLanguage();
    let lang_id = langs.indexOf(lang);

    lang_id = (lang_id + 1) % langs.length;
    return langs[lang_id];
}

function setLanguage(lang) {
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function switchLanguage() {
    let nextLang = getNextLanguageToSwitch();
    setLanguage(nextLang);
}

function updatePageLocalization() {
    let lang = getCurrentLanguage();
    console.log("current lang: " + lang);

    let all = document.querySelectorAll('[' + locAttributeName + ']');
    console.log(all);

    for (var i = 0; i < all.length; i++) {
        let element = all[i];
        let locKey = element.textContent;

        if (locKey != null) {
            let localizationList = localizations[lang];
            try {
                var localizedString = localizationList[locKey];

                if (localizedString) {
                    element.textContent = localizedString;
                }
            }
            catch { }
        }
    }
}

function onPageMutated(mutations) {
    updatePageLocalization();
}

let observer = new MutationObserver(onPageMutated);
observer.observe(document.body, { childList: true, subtree: true });