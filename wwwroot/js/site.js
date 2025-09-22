// Actor name to IMDb link mapping
const actorLinks = {
    "Daniel Radcliffe": "https://www.imdb.com/name/nm0705356/",
    "Emma Watson": "https://www.imdb.com/name/nm0914612/",
    "Rupert Grint": "https://www.imdb.com/name/nm0342488/"
};

// Hover and click functionality
document.querySelectorAll("#Actors li").forEach(actor => {
    // Click to open IMDb in new tab
    actor.addEventListener("click", () => {
        const name = actor.textContent.trim();
        if (actorLinks[name]) {
            window.open(actorLinks[name], "_blank");
        }
    });
});
