// Actor names clickable to their IMDb page
document.querySelectorAll('#Actors li').forEach(function (actor) {
    actor.addEventListener('click', function () {
        const url = actor.getAttribute('data-imdb');
        window.open(url, '_blank'); // opens IMDb in new tab
    });
});
