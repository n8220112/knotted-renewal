document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 기본 제출 방지

  //필수 입력 항목 정리 (전체 인풋에 대한 정보)
  const requiredFields = [
    { id: "name", label: "이름" },
    { id: "tel", label: "연락처" },
    { id: "email", label: "이메일" },
    { id: "store", label: "수령 매장" },
    { id: "menu", label: "구매메뉴 및 수량" },
    { id: "date", label: "예약일자" },
    { id: "request", label: "기타 요청사항" },
    { id: "info", label: "구매목적 및 행사명" },
    { id: "upload", label: "사업자 등록증 / 회사 소개서" }
  ];

  //입력 안된 input 정보를 받아올 배열정보
  let missingFields = [];

  requiredFields.forEach(field => {
    const el = document.getElementById(field.id);
    if (!el) return;

    // 파일 업로드 필드 체크
    if (el.type === "file" && el.files.length === 0) {
      missingFields.push(field.label);
    }
    // 일반 필드 체크 (내용이 없는 경우)
    else if (!el.value || el.value.trim() === "") {
      missingFields.push(field.label);
    }
  });

  // 체크박스 개별 체크
  const checkboxes = [
    { id: "check01", label: "주의사항 1" },
    { id: "check02", label: "주의사항 2" },
    { id: "check03", label: "주의사항 3" },
    { id: "check04", label: "주의사항 4" },
    { id: "agree", label: "개인정보 수집 및 이용 동의여부" }
  ];
  //모든 체크박스가 체크되었는지 확인
  checkboxes.forEach(box => {
    const el = document.getElementById(box.id);
    if (!el.checked) {
      missingFields.push(box.label);
    }
  });

  if (missingFields.length > 0) {
    //모든 항목이 체크되지 않은 경우 만들어 놓은 배열에 입력된 내용을 연결해 보여줌.
    alert("다음 항목을 입력 또는 체크해주세요:\n\n " + missingFields.join("\n "));
  } else {
    alert("제출되었습니다!");
    // 모든 항목을 입력한 경우 제출되었습니다. 표시하기
    location.reload(); // 페이지 새로고침
  }
});
