document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('agreementForm');
  const agree = document.getElementById('agree');
  const disagree = document.getElementById('disagree');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 제출 막기

    if (!agree.checked && !disagree.checked) {
      alert('동의 여부를 선택해주세요.');
    } else if (disagree.checked) {
      alert('신청을 원하시면 동의를 부탁드립니다.');
    } else if (agree.checked) {
      alert('신청서 양식 폼으로 이동합니다.');
      // 새 창(탭)으로 이동
      window.open('https://docs.google.com/forms/d/163CSh0FOrTYlS2ctgOqC0k9648eMaxvX3MXwK1dwBIg/viewform?edit_requested=true', '_blank');
      // 현재 창 새로고침
      location.reload();
    }
  });
});
