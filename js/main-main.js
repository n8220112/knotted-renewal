// 메인페이지, 메인스와이퍼
var swiper = new Swiper(".mainSwiper", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});


/* new menu */
const newMenus = [
  {
  "title": "초당 옥수수 크림 도넛",
  "category": "도넛",
  "imageUrl": "/Knotted/images/new-menu01.png"
  },
  {
  "title": "메론 크림 도넛",
  "category": "도넛",
  "imageUrl": "/Knotted/images/new-menu02.png"
  },
  {
  "title": "민트 초코 크림 도넛",
  "category": "도넛",
  "imageUrl": "/Knotted/images/new-menu03.png"
  },
  {
  "title": "스마일 보스톤 크림 도넛",
  "category": "도넛",
  "imageUrl": "/Knotted/images/new-menu04.png"
  },
  {
  "title": "수박 주스",
  "category": "음료",
  "imageUrl": "/Knotted/images/new-menu06.png"
  },
  {
  "title": "수박 화채",
  "category": "음료",
  "imageUrl": "/Knotted/images/new-menu07.png"
  },
  {
  "title": "망고 애플티 에이드",
  "category": "음료",
  "imageUrl": "/Knotted/images/new-menu08.png"
  },
  {
  "title": "통통 단팥 우유 빙수",
  "category": "디저트",
  "imageUrl": "/Knotted/images/new-menu09.png"
  }
]

let NewMenuWrapper = document.querySelector('.newMenu-Swiper .swiper-wrapper');
//console.log(NewMenuWrapper);
newMenus.forEach(menu => {
  let menuSlide = document.createElement('div');
  menuSlide.className = "swiper-slide";
  menuSlide.innerHTML = `
  <a href="/Knotted/html/sub-menulist.html">
      <img src=${menu.imageUrl} alt="상품 이미지">
  </a>
  `;
  NewMenuWrapper.appendChild(menuSlide);
})

var newMenuSwiper = new Swiper(".newMenu-Swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
  delay: 4000,
  disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  on: {
  slideChange: function () {
    const currentIndex = this.realIndex; // 현재 슬라이드 인덱스
      const newMenuTitle = document.getElementById('newMenuTitle');
      newMenuTitle.textContent = newMenus[currentIndex].title;
  }
  }
});

/* online Shop */
const onlineShop = [
  {
  name: "[노티드] 가나슈 초코무스 케이크",
  price: 31000,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/babfe06fbe181.png"
  },
  {
  name: "[노티드] 크림도넛 BEST 5종",
  price: 11500,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/18a935cda9a81.jpg"
  },
  {
  name: "[노티드] 슈가베어 파베 초콜릿",
  price: 19500,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/46b445f97efc0.jpg"
  },
  {
  name: "[노티드] 셀레브레이션 아기곰 케이크",
  price: 35900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/58f495a94cbe4.png"
  },
  {
  name: "[노티드] 초코베리 팡팡 아이스크림 케이크",
  price: 35900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/2ace95a70f0e0.jpg"
  },
  {
  name: "[노티드] 크림가득 스마일 롤케이크",
  price: 19975,
  soldOut: false,
  sale: "15%",
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/c7fe3a7a3f290.png"
  },
  {
  name: "[노티드] 곡물발효 효소",
  price: 27900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/c1bc241d85d42.png"
  },
  {
  name: "[노티드] 촉촉 콜라겐 앰플",
  price: 36900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/dfd4ab1cbc9f8.png"
  },
  {
  name: "[노티드] 그래놀라 단백질바",
  price: 27900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/582d9e105e881.png"
  },
  {
  name: "[노티드] 스마일 만쥬(슈가베어)",
  price: 5900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/ad826a8c20f6e.jpg"
  },
  {
  name: "[노티드 X네추럴라이즈] 이뮨 멀티 비타민",
  price: 26900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/6694304690e14.jpg"
  },
  {
  name: "[노티드 X네추럴라이즈] 알로에 젤리",
  price: 16900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/5fc7359571fd5.jpg"
  },
  {
  name: "[노티드 X네추럴라이즈] 멀티 비타민 꾸미 비타 젤리",
  price: 18900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/3f4f9ca561c51.jpg"
  },
  {
  name: "[노티드X네추럴라이즈] 비타민 C 꾸미 비타 젤리",
  price: 18900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/0994b598cec3c.jpg"
  },
  {
  name: "[노티드X네추럴라이즈] 비타민 D 꾸미 비타 젤리",
  price: 18900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/90926ca7eab93.jpg"
  },
  {
  name: "[노티드] 스마일 만쥬 (우유크림)",
  price: 5900,
  soldOut: false,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/499029ad06aac.jpg"
  },
  {
  name: "[노티드] 밀크데이지 우유무스 케이크",
  price: 29000,
  soldOut: true,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/c658330a496bd.jpg"
  },
  {
  name: "[노티드] 초콜릿 봉봉 2종",
  price: 16900,
  soldOut: true,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/95337c74c20dd.png"
  },
  {
  name: "[노티드] 슈가베어 골드브라운",
  price: 4500,
  soldOut: true,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/6eb04dd81312a.png"
  },
  {
  name: "[노티드] 스마일 크림빵 2종",
  price: 11500,
  soldOut: true,
  image: "https://cdn-optimized.imweb.me/upload/S2023090509034a75f0994/0a2e3f98d66e9.jpg"
  }
];

let shopWrapper = document.querySelector('.OnlineShop .swiper-wrapper');
onlineShop.forEach(item => {
if (item.soldOut) return; //sold out 정보는 안보이게
  let shopSlide = document.createElement('div');
let itemPrice = item.price.toLocaleString(); //금액 단위 구분
  shopSlide.className = "swiper-slide";
  shopSlide.innerHTML = `
  <a href = "/Knotted/html/sub-onlineshop.html">
  <img src=${item.image} alt="상품이미지" class="online-shop-img"/>
  <div class="online-shop-title">${item.name}</div>
  <p class="online-shop-price">${itemPrice}원</p>
  </a>
  `;
  shopWrapper.appendChild(shopSlide);
})
var OnlineShopSwiper = new Swiper(".OnlineShop", {
  slidesPerView: "auto", 
  spaceBetween: 16, 
  scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true, 
  },
  freeMode: true,
  });

/* notice */
const notices = [
  {
      id: 5,
      title: "노티드 2025 설 휴무 매장 안내",
      date: "2025-01-26",
      link: "/Knotted/html/sub-notice.html"
  },
  {
      id: 4,
      title: "노티드 2024 추석 휴무 매장 안내",
      date: "2024-09-09",
      link: "/Knotted/html/sub-notice.html"
  },
  {
      id: 3,
      title: "노티드 2024 설 휴무 매장 안내",
      date: "2024-02-01",
      link: "/Knotted/html/sub-notice.html"
  },
  {
      id: 2,
      title: "구)노티드오더 포인트 및 쿠폰 이관 안내 공지",
      date: "2023-12-15",
      link: "/Knotted/html/sub-notice.html"
  },
  {
      id: 1,
      title: "노티드 예약페이지 오픈 안내",
      date: "2023-10-24",
      link: "/Knotted/html/sub-notice.html"
  }
];

const mainNotices = notices.slice(0, 4);
console.log(mainNotices)

let noticeLists = document.querySelector('.notice-list');

mainNotices.forEach(list => {
let noticeList = document.createElement('li');
noticeList.className = "notice-items";
noticeList.innerHTML = `
  <a href="#none" class="notice-text-wrap">
  <p>${list.date}</p>
  <h6 class="body-title">${list.title}</h6>
  </a>
  <a href="${list.link}" class="notice-btn"><i class="fa-solid fa-arrow-right"></i></a>
`;
noticeLists.appendChild(noticeList);
})
