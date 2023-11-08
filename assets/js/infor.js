document.getElementById("edit-btn").addEventListener("click", function() {
    const existingPerson = sessionStorage.getItem('person');

    const image = document.getElementById('student-portrait');
    const imageSrc = image.src;

    if(!existingPerson) {
        const person = {
            ten: document.getElementById('phamvananh_ten').textContent,
            namvao: document.getElementById('phamvananh_namvao').textContent,
            bacdaotao: document.getElementById('phamvananh_bacdaotao').textContent,
            chuongtrinh: document.getElementById('phamvananh_chuongtrinh').textContent,
            khoaquanly: document.getElementById('phamvananh_khoaquanly').textContent,
            tthoctap: document.getElementById('phamvananh_tthoctap').textContent,
            gioitinh: document.getElementById('phamvananh_gioitinh').textContent,
            lop: document.getElementById('phamvananh_lop').textContent,
            khoahoc: document.getElementById('phamvananh_khoahoc').textContent,
            email: document.getElementById('phamvananh_email').textContent,
            mssv: document.getElementById('phamvananh_mssv').textContent,
            photo: imageSrc,
        };

        
        sessionStorage.setItem('person', JSON.stringify(person));
        sessionStorage.setItem('initperson', JSON.stringify(person));
    }

    window.location.href = "editpage.html";   
});



document.addEventListener('DOMContentLoaded', function () {
    const savedPerson = sessionStorage.getItem('person');

    if (savedPerson) {
        const person = JSON.parse(savedPerson);
        document.getElementById('phamvananh_ten').textContent = person.ten;
        document.getElementById('phamvananh_namvao').textContent = person.namvao;
        document.getElementById('phamvananh_bacdaotao').textContent = person.bacdaotao;
        document.getElementById('phamvananh_chuongtrinh').textContent = person.chuongtrinh;
        document.getElementById('phamvananh_khoaquanly').textContent = person.khoaquanly;
        document.getElementById('phamvananh_tthoctap').textContent = person.tthoctap;
        document.getElementById('phamvananh_gioitinh').textContent = person.gioitinh;
        document.getElementById('phamvananh_lop').textContent = person.lop;
        document.getElementById('phamvananh_khoahoc').textContent = person.khoahoc;
        document.getElementById('phamvananh_email').textContent = person.email;
        document.getElementById('phamvananh_mssv').textContent = person.mssv;
        document.getElementById('student-portrait').src = person.photo;
    }

    console.log(savedPerson);
});
