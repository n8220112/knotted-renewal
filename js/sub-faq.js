/* faq */
const faqLists = [
  {
    question: "재고 확인이 가능한가요?",
    answer: "매장 상황은 실시간으로 변동되기 때문에 재고 확인이 어렵습니다. 방문을 원하실 경우 구매보다는, 당일 현장 상황에 따라 조기 소진 및 대기가 발생할 수 있는 점 참고 부탁드립니다."
  },
  {
    question: "배송이 가능한가요?",
    answer: "현재 저희 제품은 수령지 픽업이며, 이용 지역에 따라 픽업 매장 선택 후 매장 운영 일정에 따라 개별 픽업 주문이 가능합니다."
  },
  {
    question: "매장에서 제품을 구매한 후 보관이 가능한가요?",
    answer: "제품 수령 후 빠른 섭취 권장드리며, 보관은 냉장 보관을 권장 드립니다."
  },
  {
    question: "대량 구매는 어떻게 할 수 있나요?",
    answer: `대량 구매는 사전 예약으로 이루어지며 픽업 일 기준 최소 1일 전까지 1:1 게시판을 통해 문의해 주셔야 합니다.
도넛 기준 1000개 이하의 주문 건의 경우 월~목 예약이 가능하며, 1000개 이상 구매 건의 경우 매장 상황에 따라 예약 가능 여부를 확인해 드리고 있습니다.

[대량 구매 기준]
도넛: 200개 초과
케이크 및 베이커리: 20개 초과`
  },
  {
    question: "예약을 원하는 매장에 예약가능한 일자/제품이 없어요",
    answer: "일부 매장은 온라인 예약을 진행하지 않아 예약 가능한 일정/제품이 노출되지 않습니다. 예약이 불가한 매장은 방문 구매를 부탁드리며, 당일 현장 상황에 따라 제품의 조기 소진 및 대기가 발생할 수 있습니다."
  },
  {
    question: "원하는 도넛/케이크가 예약리스트에 없어요",
    answer: "예약 페이지에는 예약이 가능한 제품만 노출되며, 예약 가능 수량 품절 등으로 예약이 불가 할 수 있습니다. 또한 케이크의 경우 일부 매장은 케이크가 미 판매되어 예약이 불가 한 점 참고 부탁드립니다."
  },
  {
    question: "예약하고 싶은 날짜/시간이 선택이 안돼요",
    answer: "예약은 픽업일 기준 최소 3일~최대 7일 전까지로 설정되어 있으며, 일자별 예약 가능한 수량이 노출됩니다. 일정 수량 이상 예약을 원하실 경우에는 해당 매장으로 직접 문의해 주시기 바랍니다."
  },
  {
    question: "노티드 바우처로 온라인 예약이 가능한가요?",
    answer: "죄송합니다. 바우처는 현장 구매만 가능하며 온라인 사전 예약 사용이 불가합니다."
  },
  {
    question: "기프트콘으로 온라인 예약이 가능한가요?",
    answer: "기프트콘은 현재 온라인 예약은 불가하며, 수령 매장에서 이용 가능한 매장만 별도 사용이 가능합니다. 매장별 기프트콘 이용 가능 여부는 매장 방문 전 원매장에 꼭 문의 주시기 바랍니다."
  },
  {
    question: "대량 구매 시 필요한 서류가 있나요?",
    answer: "서류가 필요하신 경우 사전 예약 시 요청 사항에 작성 부탁드리며, 매장 측 전달 후 수령일 함께 전달 드리고 있습니다."
  },
  {
    question: "모든 매장에서 대량 구매가 가능한가요?",
    answer: "백화점/몰 입점 매장 등 일부 매장은 대량구매가 불가할 수 있습니다."
  },
  {
    question: "구매한 제품 보관 방법을 알고 싶어요",
    answer: "당일 섭취를 권장드리며, 도넛은 제품 특성상 냉장 보관하지 마시고, 2일 이내 빠르게 섭취 권장 드립니다. 케이크의 경우 냉장 보관 권장드리며, 수령 시 보관 방법은 제품 박스에 안내되어 있습니다."
  },
  {
    question: "제품 맛/알레르기 성분이 어떻게 되나요?",
    answer: "제품별로 원재료와 성분이 상이하며, 제조 매장에 문의해 주시기 바랍니다. 알레르기 유발 가능 성분은 제품 라벨 또는 상세 페이지에 별도 표기되어 있습니다."
  },
  {
    question: "제품 유통기한이 어떻게 되나요?",
    answer: "제품 상황에 따라 도넛 유통기한은 제조일 기준 당일 권장됩니다. 노티드 도넛은 당일 섭취/보관을 권장드리며, 케이크 제품은 수령일로부터 2일 권장 유통기한입니다. 유통기한 정보는 제품 박스나 라벨에 함께 기재되어 있습니다."
  }
];


let faqContent = document.querySelector('.faq-content');
let paginationContent = document.getElementById('pagination');
let listsPerPage = 10;
let currentPage = 1;
let filteredFaqs = [...faqLists];
/* 전체 렌더링 함수 */
function renderFaqs(){
  faqContent.innerHTML = '';
  /* 페이지네이션용 */
  let start = (currentPage - 1) * listsPerPage;
  let end = start + listsPerPage;
  let pageFaqs = filteredFaqs.slice(start, end);
  /* 콘텐츠 추가 */
  pageFaqs.forEach(list => {
    let faqGroup = document.createElement('div');
    faqGroup.className = "faq-group";
    faqGroup.innerHTML = `
      <div class="faq-question"><span>Q.</span><p>${list.question}</p><i class="fa-solid fa-chevron-down"></i></div>
      <div class="faq-answer"><span>A.</span><p>${list.answer}</p></div>
    `;
    faqContent.appendChild(faqGroup);
  })
  clickFaqBtns();
  renderPagination();
} 

/* 클릭버튼 이벤트 함수 */
function clickFaqBtns(){
  let faqBtns = document.querySelectorAll('.faq-group');
  console.log(faqBtns,faqBtns.length);
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  })
}

/* 페이지네이션 함수 */
function renderPagination(){
  paginationContent.innerHTML = '';
  let totalPages = Math.ceil(filteredFaqs.length / listsPerPage);
  const prevBtn = document.createElement('a');
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevBtn.classList.add('arrow');
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderFaqs();
    }
  });
  paginationContent.appendChild(prevBtn);

  // 페이지 번호
  for (let i = 1; i <= totalPages; i++) {
    let btn = document.createElement('a');
    btn.textContent = `${i}`;
    btn.classList.toggle('active', i === currentPage);
    btn.addEventListener('click', () => {
      currentPage = i;
      renderFaqs();
    });
    paginationContent.appendChild(btn);
  }

  // ▶ 다음 버튼
  const nextBtn = document.createElement('a');
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextBtn.classList.add('arrow');
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderFaqs();
    }
  });
  paginationContent.appendChild(nextBtn);
}
document.addEventListener('DOMContentLoaded', () => {
    renderFaqs();
  });
