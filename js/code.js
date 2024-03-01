let cards = document.querySelectorAll('.card');
function searchCards() {
    let input = document.getElementById('searchInput').value.toLowerCase();

    for (let card of cards) {
        
            let statusCode = card.querySelector('.status-code').textContent.toLowerCase();
            if (statusCode.startsWith(input)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        
    }
}
