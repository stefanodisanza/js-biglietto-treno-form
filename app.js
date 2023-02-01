function calculateTicketPrice() {
  const km = parseFloat(document.getElementById("km").value);
  const nameSurname = (document.getElementById("nameSurname").value);
  const discountOption = document.getElementById("discount").value;
  let discount = 0;

  if (discountOption === "minor") {
    discount = 0.2;
  } else if (discountOption === "senior") {
    discount = 0.4;
  }

  const ticketPrice = km * 0.21;
  const discountedTicketPrice = ticketPrice - ticketPrice * discount;
  

  console.log("km da fare: " + km.toFixed(2));
  console.log("nome e cognome passeggero: " + nameSurname);
  console.log("tipo di sconto: " + discount);

  document.getElementById("nameSurname").innerHTML = `Noeme e cognome passeggero: ${discountedTicketPrice.toFixed(2)}€`;
  document.getElementById("result").innerHTML = `Prezzo biglietto: ${discountedTicketPrice.toFixed(2)}€`;

  console.log("prezzo biglietto: " + discountedTicketPrice.toFixed(2));
}