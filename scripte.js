function toggleView(view) {
    const gallery = document.querySelector('.gallery');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    if (view === 'grid') {
        gallery.classList.remove('list-view');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    } else if (view === 'list') {
        gallery.classList.add('list-view');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    }
}

function openPhotoPage(url) {
    window.location.href = url;
}
