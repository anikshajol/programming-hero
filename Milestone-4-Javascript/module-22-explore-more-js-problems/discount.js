/* 
1. if ticket number is less than 100, per ticket price:100,

2. if ticket number is more than 100, but less than 200. First 100 tickets will be 100/ticket, rest ticket will be 90 taka .

3. if you purchase more than 200 tickets

        first 100 ---> 100 taka,
        101-200----> 90taka
        200+ ----> 70taka


*/

const ticket = 210;

function ticketPrice(ticket) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticket <= 100) {
    const price = ticket * first100Rate;
    return price;
  } else if (ticket > 100 && ticket < 200) {
    const first100Price = 100 * first100Rate;
    const tcktQuantity = ticket - 100;
    const second100Price = tcktQuantity * second100Rate;
    const totalPrice = first100Price + second100Price;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketPrice = ticket - 200;
    const restPrice = restTicketPrice * restTicketRate;

    const price = first100Price + second100Price + restPrice;

    return price;
  }
}

const priceOfTicket = ticketPrice(ticket);

console.log(priceOfTicket);
