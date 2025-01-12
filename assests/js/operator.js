
        document.addEventListener("DOMContentLoaded", () => {
            const input = document.getElementById("Operator");
            const dropdownMenu = document.getElementById("dropdownMenu");
            const selectedOperatorLogo = document.getElementById("selectedOperatorLogo");

          
            input.addEventListener("click", () => {
                dropdownMenu.classList.toggle("show");
            });

       
            dropdownMenu.addEventListener("click", (e) => {
                if (e.target.classList.contains("dropdown-item")) {
                    e.preventDefault();
                    const selectedValue = e.target.getAttribute("data-value");
                    const logoUrl = e.target.getAttribute("data-logo");

                   
                    input.value = selectedValue;

                 
                    selectedOperatorLogo.src = logoUrl;
                    selectedOperatorLogo.classList.remove("d-none"); 

                 
                    dropdownMenu.classList.remove("show");
                }
            });

          
            document.addEventListener("click", (e) => {
                if (!dropdownMenu.contains(e.target) && e.target !== input) {
                    dropdownMenu.classList.remove("show");
                }
            });
        });

