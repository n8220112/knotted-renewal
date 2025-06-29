function renderEventCards() {
    const eventData = [
      { img: '../images/event01.png', text: 'Dripping with Summer🏖️ 6월 이달의 맛 신메뉴 2종 출시 (6/1~)' },
      { img: '../images/event02.png', text: '🍉SWEET INSIDE🍉 노티드 여름 시즌 음료 4종 출시 (5/20~)' },
      { img: '../images/event03.png', text: '나이키 2025 After Dark Tour Seoul 10K의 여정에 노티드가 함께합니다🔥' },
      { img: '../images/event04.png', text: '노티드 X 카러플 🎉 세상에서 가장 달콤한 축하 파티🎉' },
      { img: '../images/event05.png', text: '🌷노티드 가정의 달 케이크 & 타르트 도넛 (5/1~)🌷' },
      { img: '../images/event06.png', text: '🍩저당 도넛 4종 구매 시, 아메리카노 2잔 무료 EVENT (4/11~)☕️' },
      { img: '../images/event07.png', text: '노티드 X 교촌치킨 달콤바삭한 만남, 츄러스 신메뉴 출시 🍗🍟' },
      { img: '../images/event08.png', text: '🍓노티드 생딸기 파티 사전예약 (2/28~3/4)🍓' },
      { img: '../images/event09.png', text: '🍓STRAWBERRY DRINKS🍓' },
      { img: '../images/event10.png', text: '🎀2025 노티드 발렌타인 사전예약 (2/6~10)🎀' },
      { img: '../images/event11.png', text: '2/1(토) 노티드 신메뉴 🍫스모어 도넛 출시' },
      { img: '../images/event12.png', text: '1/1(수) 노티드 신메뉴 Low-Sugar 저당 크림 도넛 출시' },
      { img: '../images/event13.png', text: '🎄2024 노티드 크리스마스 시즌한정 도너&음료 출시🎄' },
      { img: '../images/event14.png', text: '🍰2024 노티드 크리스마스 케이크 사전예약 최대 20% OFF🍰' },
      { img: '../images/event15.png', text: '노티드X레드벨벳 10주년 콜라보"Sweet Dreams"' },
      { img: '../images/event16.png', text: 'NEW Brunch Salted Bread 🥐 (4+1 프로모션 종료)' },
      { img: '../images/event17.png', text: 'Knotted Studio Open🎀' },
      { img: '../images/event18.png', text: '추석 한정 기프트 박스 예약 OPEN 🎁' },
      
    ];
  
    const container = document.querySelector('.content-items');
    if (!container) {
      console.error('❗ .content-items 요소를 찾을 수 없습니다.');
      return;
    }
  
    let html = '';
    for (const item of eventData) {
      html += `
        <a href ="#" class="item-card">
        <div class= "img-box">  <img src="${item.img}" alt="${item.text}">
        </div>
        
          <p>${item.text}</p>
        </a>
      `;
    }
    container.innerHTML = html;
  }
  document.addEventListener('DOMContentLoaded', renderEventCards);
  