document.addEventListener('DOMContentLoaded', () => {
    const newStoreBtn = document.getElementById('newStoreBtn')
    const contentDiv = document.getElementById('content')

    newStoreBtn.addEventListener('click', () => {
        fetch('../html/new_store.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
    })
})