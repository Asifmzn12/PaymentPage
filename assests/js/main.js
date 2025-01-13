const table = document.getElementById("myTable");

table.addEventListener("click", function (event) {
    let row = event.target.closest("tr");
    if (row && row.parentElement.tagName === "TBODY") {
        let rowData = Array.from(row.cells).map(cell => cell.textContent.replace(/\s+/g, ' ').trim());
        console.log("Row Details:", rowData);
    }
});

function validateInput(input) {
    input.value = input.value.replace(/\D/g, '');
}


document.querySelector('.applyCouponToggle').addEventListener('click', function () {
    const couponBox = document.querySelector('.couponBox');
    couponBox.classList.toggle('d-none');
});



