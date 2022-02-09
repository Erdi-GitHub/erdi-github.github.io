(async () => {
    const { pages } = await import("./pages.js");
    const navBar = document.createElement("header");

    navBar.className = "nav-bar";

    for([pageName, href] of Object.entries(pages)) {
        const element = document.createElement("a");
        
        element.href = href;
        element.innerText = pageName;

        navBar.appendChild(element);
    }

    document.body.prepend(navBar);
})();
