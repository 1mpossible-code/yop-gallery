// Customizing
let maxPhotosImages = 3;

// Introduced variables
let whatVisible = 1;
let currentPage = 1;

// functions
function makePages(maxPhotos) {
    let countPhotos = -1;
    let page = 1;
    for (const el of document.querySelectorAll('.yop_gal')) {
        countPhotos++;
        if (countPhotos >= maxPhotos) {
            page++;
            countPhotos = 0
        }
        el.classList.add("page" + page);
    }
    return page;
}

function makeNavigation(pages) {
    let paginator = document.getElementById("yop-navigation-paginator");
    // prev nav
    let prevPage = document.createElement("div");
    let prevPageNode = document.createTextNode("<");
    prevPage.appendChild(prevPageNode);
    prevPage.setAttribute("id", "nav-prev");
    paginator.appendChild(prevPage);
    // nav nums
    for (let i = 1; i <= pages; i++) {
        let newNavPage = document.createElement("div");
        let navNum = i.toString();
        let newNavPageNode = document.createTextNode(navNum);
        newNavPage.appendChild(newNavPageNode);
        newNavPage.setAttribute("id", "nav-page-" + navNum);
        paginator.appendChild(newNavPage);
    }
    // next nav
    let nextPage = document.createElement("div");
    let nextPageNode = document.createTextNode(">");
    nextPage.appendChild(nextPageNode);
    nextPage.setAttribute("id", "nav-next");
    paginator.appendChild(nextPage);
}

function nonePages(pages, whatVisible) {
    for (let i = 0; i < 10; i++) {
        for (const el of document.querySelectorAll('.page' + i)) {
            if (i === whatVisible) {
                el["style"]["display"] = "block";
            } else {
                el["style"]["display"] = "none";
            }
        }
    }
}

// Creating gallery
pages = makePages(maxPhotosImages);
nonePages(pages, whatVisible);
makeNavigation(pages);

function pagesHandler() {
    if (currentPage.toString() === pages.toString()) {
        document.getElementById("yop-paginator").style.display = "none";
        document.getElementById("nav-next").style.display = "none";
    }
    if (currentPage.toString() === "1") {
        document.getElementById("nav-prev").style.display = "none";
    }
    if (currentPage > 1) {
        document.getElementById("nav-prev").style.display = "block";
    }
    if (currentPage < pages) {
        document.getElementById("yop-paginator").style.display = "block";
        document.getElementById("nav-next").style.display = "block";
    }
}

function navPaginatorHandler(navTab, isNum) {
    document.getElementById("nav-page-" + (currentPage)).className = "";
    if (isNum === true) {
        currentPage = navTab.id.substr(9);
    }
    if (isNum === false) {
        if (navTab.id.substr(4) === "next") {
            currentPage++;
        }
        if (navTab.id.substr(4) === "prev") {
            currentPage--;
        }
    }
    pagesHandler();
    document.getElementById("nav-page-" + currentPage).className = "active";
    for (let el of document.querySelectorAll(".yop_gal")) {
        if (el.className.split(" ").pop() === "page" + currentPage) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    }
}

// Onclick events
function updater() {
    document.getElementById("yop-paginator").onclick = function () {
        for (const elem of document.querySelectorAll(".page" + ++currentPage)) {
            elem["style"]["display"] = "block";
            pagesHandler();
            document.getElementById("nav-page-" + currentPage).className = "active";
            document.getElementById("nav-page-" + (currentPage - 1)).className = "";
        }
    }
    document.getElementById("nav-page-" + currentPage).className = "active";
    pagesHandler();
    for (let navTab of document.getElementById("yop-navigation-paginator").childNodes) {
        document.getElementById(navTab.id).onclick = function () {
            if (navTab.id === "nav-page-" + navTab.id.substr(9)) {
                navPaginatorHandler(navTab, true);
            } else {
                navPaginatorHandler(navTab, false);
            }
        }

    }
}

updater()