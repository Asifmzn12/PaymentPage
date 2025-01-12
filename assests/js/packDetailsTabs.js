document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 

        
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));

       
        this.classList.add('active');

       
        document.querySelectorAll('.packbox').forEach(box => box.style.display = 'none');

       
        const targetId = this.getAttribute('href').substring(1); // Get target ID
        document.getElementById(targetId).style.display = 'block';
    });
});
