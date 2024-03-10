function changeHtmlIntoClass(className, htmlCode) {
    let div = document.getElementsByClassName(className)[0];
    div.innerHTML = htmlCode;
}

function fillSectionWithHtml(className, htmlPath) {
    fetch(htmlPath).then(res => res.text()).then(text => {
        changeHtmlIntoClass(className, text);
    });
}

// Usage: openPage("page.html");
function openPage(pageName) {
    let pagePath = `assets/pages/${pageName}`;
    fillSectionWithHtml("page-section", pagePath);
}

fillSectionWithHtml("header-section", "assets/pages/parts/header.html");
openPage("main.html");