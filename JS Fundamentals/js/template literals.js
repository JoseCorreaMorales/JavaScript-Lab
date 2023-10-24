let orden1 = "Pizza",
    precio1 = 10,

    orden2 = "Tacos",
    precio2 = 20,

    orden3 = "Hamburgesas",
    precio3 = 30;


/* let html;
let total = 0;

html = document.querySelector(".order");


html.innerHTML = '<ul>' +
                 '<li>' + orden1 + ' </li>' + 
                 '<li>' + precio1 + ' </li>' +
                 '<li>' + orden2 + ' </li>' + 
                 '<li>' + precio2 + ' </li>' +
                 '<li>' + orden3 + ' </li>' + 
                 '<li>' + precio3 + ' </li>' +
                 '<li>' + '<strong>' + (precio1 + precio2 + precio3) +'</strong>' + ' </li>' +
                 '</ul>'; */



let html = document.querySelector('.order').innerHTML = `<ul>
                                                        <li>${orden1}</li>
                                                        <li>${precio1}</li>

                                                        <li>${orden1}</li>
                                                        <li>${precio1}</li>

                                                        <li>${orden1}</li>
                                                        <li>${precio1}</li>
                                                        <li>${total(precio1, precio2, precio3)}</li>
                                                        </ul>`;

function total(p1, p2, p3) {
    return p1 + p2 + p3;
}