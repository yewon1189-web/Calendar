const brochure = document.getElementById('brochure');
let isOpen = false;

document.addEventListener('mousemove', (e) => {
    if (isOpen) return;

    const x = e.clientX;
    const y = e.clientY;
    const midX = window.innerWidth / 2;
    const midY = window.innerHeight / 2;

    // 양면 확인을 위해 회전 범위를 180도까지 확장
    const rotateY = ((x - midX) / midX) * 180;
    const rotateX = ((y - midY) / midY) * -30;

    brochure.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

brochure.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        brochure.classList.add('open');
    } else {
        brochure.classList.remove('open');
        brochure.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
});