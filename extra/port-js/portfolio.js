const karty = document.getElementById('karty');
karty.innerHTML = '';

fetch('/getData')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((karta, index) => {
      let Orbital = `      
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5">
      <a>
        <div class="card h-300 w-200" data-bs-toggle="modal" data-country="${index + 1}">
          <div class="card-body">
            <h4 class="card-title">CreT:#${index + 1}</h4>
            <p><b>Velocities:</b> ${karta.velocites.join(', ')}<br>
            <b>Orbits:</b> ${karta.orbits.join(', ')}</p>
            
          </div>
        </div>
      </div>`;
      karty.innerHTML += Orbital;
    });

    // Move event listener attachment outside of the forEach loop
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.addEventListener('click', function() {
        sendDataToRoute(index);
      });
    });
  });


  function sendDataToRoute(cardNumber) {
    fetch(`/nova?card=${cardNumber}`, {})
        .then(() => {
            window.location.href = '/model';
        });
}

  