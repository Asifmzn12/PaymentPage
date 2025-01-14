document.addEventListener("DOMContentLoaded", () => {
    const inputMobile = document.getElementById("OperatorMobile");
    const dropdownMenuMobile = document.getElementById("dropdownMenu");
    const selectedOperatorLogoMobile = document.getElementById("selectedOperatorLogo");

    const inputD2H = document.getElementById("OperatorD2H");
    const dropdownMenuD2H = document.getElementById("dropdownMenuD2H");
    const selectedOperatorLogoD2H = document.getElementById("selectedOperatorLogo");

    // Mobile operator dropdown
    inputMobile.addEventListener("click", () => {
        dropdownMenuMobile.classList.toggle("show");
    });

    dropdownMenuMobile.addEventListener("click", (e) => {
        if (e.target.classList.contains("dropdown-item")) {
            e.preventDefault();
            const selectedValue = e.target.getAttribute("data-value");
            const logoUrl = e.target.getAttribute("data-logo");

            inputMobile.value = selectedValue;
            selectedOperatorLogoMobile.src = logoUrl;
            selectedOperatorLogoMobile.classList.remove("d-none");

            dropdownMenuMobile.classList.remove("show");
        }
    });

    // D2H operator dropdown
    inputD2H.addEventListener("click", () => {
        dropdownMenuD2H.classList.toggle("show");
    });

    dropdownMenuD2H.addEventListener("click", (e) => {
        if (e.target.classList.contains("dropdown-item")) {
            e.preventDefault();
            const selectedValue = e.target.getAttribute("data-value");
            const logoUrl = e.target.getAttribute("data-logo");

            inputD2H.value = selectedValue;
            selectedOperatorLogoD2H.src = logoUrl;
            selectedOperatorLogoD2H.classList.remove("d-none");

            dropdownMenuD2H.classList.remove("show");
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdownMenuMobile.contains(e.target) && e.target !== inputMobile) {
            dropdownMenuMobile.classList.remove("show");
        }
        if (!dropdownMenuD2H.contains(e.target) && e.target !== inputD2H) {
            dropdownMenuD2H.classList.remove("show");
        }
    });
});

