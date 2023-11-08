const person = JSON.parse(sessionStorage.getItem('person'));
const initperson = JSON.parse(sessionStorage.getItem('initperson'));

if(!person){
    window.location.href="studentinfo.html";
}

document.addEventListener('DOMContentLoaded', function () {
    const savedPerson = sessionStorage.getItem('person');
    if (savedPerson) {
        const person = JSON.parse(savedPerson);
        document.getElementById('phamvananh_mssv_edit').value = person.mssv;
        document.getElementById('phamvananh_ten_edit').value = person.ten;
        document.getElementById('phamvananh_chuongtrinh_edit').value = person.chuongtrinh;
        document.getElementById('phamvananh_lop_edit').value = person.lop;
        document.getElementById('phamvananh_email_edit').value = person.email;
        const image = document.getElementById('student-portrait');
        image.src = person.photo;
    }
});

const image = document.getElementById('student-portrait');
const input = document.getElementById('upload-image');
input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
})



document.getElementById('okButton').addEventListener('click', function (event) {
    event.preventDefault();

    const image = document.getElementById('student-portrait');
    const imageSrc = image.src;

    const editedPerson = {
        ten: document.getElementById('phamvananh_ten_edit').value,
        namvao: document.getElementById('phamvananh_namvao_edit').value,
        bacdaotao: document.getElementById('phamvananh_bacdaotao_edit').value,
        chuongtrinh: document.getElementById('phamvananh_chuongtrinh_edit').value,
        khoaquanly: document.getElementById('phamvananh_khoaquanly_edit').value,
        tthoctap: document.getElementById('phamvananh_tthoctap_edit').value,
        gioitinh: document.getElementById('phamvananh_gioitinh_edit').value,
        lop: document.getElementById('phamvananh_lop_edit').value,
        khoahoc: document.getElementById('phamvananh_khoahoc_edit').value,
        email: document.getElementById('phamvananh_email_edit').value,
        photo: imageSrc,
        mssv: document.getElementById('phamvananh_mssv_edit').value,
    };

    sessionStorage.setItem('person', JSON.stringify(editedPerson));
    window.location.href = "studentinfo.html";
    
});

document.getElementById('cancelButton').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "studentinfo.html";
    
});

document.getElementById('resetButton').addEventListener('click', function (event) {
    event.preventDefault();
    sessionStorage.setItem('person', JSON.stringify(initperson));
    window.location.href = "studentinfo.html";
})
