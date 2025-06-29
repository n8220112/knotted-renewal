//아코디언 구현
//아코디언 해더 클릭 시 해당 항목만 열리고 닫히게 foreach로 토글처럼!

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const current = header.closest('.accordion-item');
      const isOpen = current.classList.contains('active');

      // 모든 아이템 닫기
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // 클릭한 아이템만 열기
      if (!isOpen) {
        current.classList.add('active');
      }
    });
  });
});
