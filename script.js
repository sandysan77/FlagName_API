var country = fetch("https://restcountries.com/v3.1/all");
var country1 = country.then((one) => one.json()).then((one1) => foo(one1))

var UI_Country = document.createElement("div");

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(values) {
    for (var i = 0; i < values.length; i++) {
        // console.log(values);
        var column = document.createElement("div");
        // column.className = "col-md-4";
        column.className = "col-md-4";

        column.innerHTML +=
            // `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            // <div class="card-header">${values[i].name.common}</div>
            // <div class="card-body">
            //   <h5 class="card-title">Primary card title</h5>
            //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            // </div>`

            `<div class="card" style="width: 18rem;">
               <img src="${values[i].flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"><b>Name:</b> ${values[i].name.common}</p>
                    <p class="card-text"><b>CountryName:</b> ${values[i].capital}</p>
                </div>
            </div>`


        // card-title.innerHTML = values[i].name.common;


        row.append(column);
        container.append(row);
        document.body.append(container);
    }
}




