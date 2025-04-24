const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');
const resumeBtns = document.querySelectorAll('.resume-btn');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

resumeBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach((detail) => {
            detail.classList.remove('active');
        });
        resumeDetails[i].classList.add('active');
    });
});