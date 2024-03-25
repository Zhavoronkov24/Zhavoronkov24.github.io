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

const infoCheckbox = document.getElementById('info');
const successCheckbox = document.getElementById('success');
const redirectCheckbox = document.getElementById('redirect');
const clientCheckbox = document.getElementById('client');
const serverCheckbox = document.getElementById('server');

const infoCard = document.querySelector('.info-code');
const successCard = document.querySelector('.success-code');
const redirectCard = document.querySelector('.redirect-code');
const clientCard = document.querySelector('.client-code');
const serverCard = document.querySelector('.server-code');

infoCheckbox.addEventListener('change', function() {
  if (!this.checked) {
    infoCard.classList.add('hidden');
  } else {
    infoCard.classList.remove('hidden');
  }
});

successCheckbox.addEventListener('change', function() {
    if (!this.checked) {
      successCard.classList.add('hidden');
    } else {
      successCard.classList.remove('hidden');
    }
  });

  redirectCheckbox.addEventListener('change', function() {
    if (!this.checked) {
      redirectCard.classList.add('hidden');
    } else {
      redirectCard.classList.remove('hidden');
    }
  });

  clientCheckbox.addEventListener('change', function() {
    if (!this.checked) {
      clientCard.classList.add('hidden');
    } else {
      clientCard.classList.remove('hidden');
    }
  });

  serverCheckbox.addEventListener('change', function() {
    if (!this.checked) {
      serverCard.classList.add('hidden');
    } else {
      serverCard.classList.remove('hidden');
    }
  });
