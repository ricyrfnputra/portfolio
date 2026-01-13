import './style.css'


const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      // Saat di-scroll kebawah: tambah shadow dan border violet
      nav.classList.add('shadow-[0_10px_20px_-5px_rgba(139,92,246,0.4)]', 'border-b', 'border-violet-500/50');
      nav.classList.remove('shadow-none');
    } else {
      // Saat kembali ke paling atas: hapus shadow
      nav.classList.remove('shadow-[0_10px_20px_-5px_rgba(139,92,246,0.4)]', 'border-b', 'border-violet-500/50');
      nav.classList.add('shadow-none');
    }
});
