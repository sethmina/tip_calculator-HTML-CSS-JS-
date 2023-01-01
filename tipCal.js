let totalPayment = document.getElementById("totalPayment")
let valueofMembers = document.getElementById("valueofMembers")
let plus = document.getElementById("plus")
let sub = document.getElementById("sub")
let precentRange = document.getElementById("precentRange")
let tipPrecentage = document.getElementById("tipPrecentage")
let precentageValue = document.getElementById("precentageValue")
let tipValue = document.getElementById("tipValue")
let currency = document.getElementById("currency")
let cur1 = currency.options[currency.selectedIndex].value



tipPrecentage.oninput = valofPrec;


function valofPrec() {
    let co_precentage = tipPrecentage.value;
    precentageValue.innerText = co_precentage + "%"




    const payment = () => {

        let cur1 = currency.options[currency.selectedIndex].value

        let tipPrice = ((totalPayment.value * co_precentage) / 100) / valueofMembers.value;

        if (tipPrice < 0) {
            tipValue.innerText = "Enter Valid Values for Total and Members Input Fields!"

            tipValue.style.fontSize = "15px"
            tipValue.style.color = "red"
        } else {

            tipValue.style.fontSize = ""
            tipValue.style.color = ""

            if (cur1 == 1) {
                tipValue.innerText = "$" + tipPrice;
            } else if (cur1 == 2) {
                tipValue.innerText = "€" + tipPrice;
            } else if (cur1 == 3) {
                tipValue.innerText = "£" + tipPrice;
            } else {
                tipValue.innerText = "¥" + tipPrice;
            }
        }
    }

    payment();
}

plus.onclick = () => {

    const inc = () => {

        valueofMembers.value++;

        return valueofMembers.value;
    }

    inc();
}

sub.onclick = () => {

    const disin = () => {

        if (valueofMembers.value > 1) {

            valueofMembers.value--
        }
        return valueofMembers.value;
    }

    disin();

}











