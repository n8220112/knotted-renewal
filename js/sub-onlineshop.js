/* 
name: '이름',
priceOriginal: 38000,
discountPercent: 10,
priceDiscounted: 34200,
soldOut: true,
image: '',
category: "",
subcategory: ""
 */

/* food
      dessert
      chocolateCandy
      coffeeBeverage
      vitamin
living
      partySupplies
      stationery
      homeDecoKitchen
      outdoor */
window.products = [
   {name: "[노티드] 크림버니 드라이버 커버", priceOriginal: 31000, discountPercent: 0, priceDiscounted: 31000, soldOut: false, image: "/Knotted/images/online-product01.png", category: "living", subcategory: "outdoor"},
   {name: "[노티드] 슈가베어 쿠키 선물세트", priceOriginal: 25900, discountPercent: 0, priceDiscounted: 25900, soldOut: false, image: "/Knotted/images/online-product02.png", category: "food", subcategory: "dessert"},
   {name: "[노티드X폴라앳홈] 베이커리 테이블 미니플레이트 세트", priceOriginal: 38000, discountPercent: 10, priceDiscounted: 34200, soldOut: false, image: "/Knotted/images/online-product03.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드X그로미미] 슈가베어 인형 선물세트", priceOriginal: 54900, discountPercent: 0, priceDiscounted: 54900, soldOut: false, image: "/Knotted/images/online-product04.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드] 가나슈 초코무스 케이크", priceOriginal: 31000, discountPercent: 0, priceDiscounted: 31000, soldOut: false, image: "/Knotted/images/online-product05.png", category: "food", subcategory: "dessert"},
   {name: "[노티드] 슈가베이커리 인형 4종 + 더스트백", priceOriginal: 23000, discountPercent: 0, priceDiscounted: 23000, soldOut: false, image: "/Knotted/images/online-product06.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드] 크림도넛 BEST 5종", priceOriginal: 11500, discountPercent: 0, priceDiscounted: 11500, soldOut: false, image: "/Knotted/images/online-product07.jpg", category: "food", subcategory: "dessert"},
   {name: "[노티드] 슈가베어 파베 초콜릿", priceOriginal: 19500, discountPercent: 0, priceDiscounted: 19500, soldOut: false, image: "/Knotted/images/online-product08.jpg", category: "food", subcategory: "chocolateCandy"},
   {name: "[노티드] 셀레브레이션 아기곰 케이크", priceOriginal: 35900, discountPercent: 0, priceDiscounted: 35900, soldOut: false, image: "/Knotted/images/online-product09.png", category: "food", subcategory: "dessert"},
   {name: "[노티드] 초코베리 팡팡 아이스크림 케이크", priceOriginal: 35900, discountPercent: 0, priceDiscounted: 35900, soldOut: false, image: "/Knotted/images/online-product10.png", category: "food", subcategory: "dessert"},
   {name: "[노티드] 슈가베어 카드 파우치 키링", priceOriginal: 19000, discountPercent: 0, priceDiscounted: 19000, soldOut: false, image: "/Knotted/images/online-product11.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드] 크림가득 스마일 롤케이크", priceOriginal: 19975, discountPercent: 0, priceDiscounted: 19975, soldOut: false, sale: "15%", image: "/Knotted/images/online-product12.png", category: "food", subcategory: "dessert"},
   {name: "[노티드] 곡물발효 효소", priceOriginal: 27900, discountPercent: 0, priceDiscounted: 27900, soldOut: false, image: "/Knotted/images/online-product13.png", category: "food", subcategory: "vitamin"},
   {name: "[노티드] 촉촉 콜라겐 앰플", priceOriginal: 36900, discountPercent: 0, priceDiscounted: 36900, soldOut: false, image: "/Knotted/images/online-product14.png", category: "food", subcategory: "vitamin"},
   {name: "[노티드] 그래놀라 단백질바", priceOriginal: 27900, discountPercent: 0, priceDiscounted: 27900, soldOut: false, image: "/Knotted/images/online-product15.png", category: "food", subcategory: "dessert"},
   {name: "[노티드] 슈가베어 도넛가방 키링", priceOriginal: 12000, discountPercent: 0, priceDiscounted: 12000, soldOut: false, image: "/Knotted/images/online-product16.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드] 슈가베어 미니 파우치 키링", priceOriginal: 16000, discountPercent: 0, priceDiscounted: 16000, soldOut: false, image: "/Knotted/images/online-product17.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드] 스마일 만쥬(슈크림)", priceOriginal: 5900, discountPercent: 0, priceDiscounted: 5900, soldOut: false, image: "/Knotted/images/online-product18.png", category: "food", subcategory: "dessert"},
   {name: "[노티드X파이렉스] 믹싱볼 3P 세트", priceOriginal: 29900, discountPercent: 0, priceDiscounted: 29900, soldOut: false, image: "/Knotted/images/online-product19.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드X파이렉스] 계량컵 3P 세트", priceOriginal: 36800, discountPercent: 0, priceDiscounted: 36800, soldOut: false, image: "/Knotted/images/online-product20.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드X볼빅] 러블리 슈가베어 골프공&볼마커 세트", priceOriginal: 32000, discountPercent: 0, priceDiscounted: 32000, soldOut: false, image: "/Knotted/images/online-product21.png", category: "living", subcategory: "outdoor"},
   {name: "[노티드x펠로우] 스마일 스트로우 텀블러 16oz", priceOriginal: 59000, discountPercent: 0, priceDiscounted: 59000, soldOut: false, image: "/Knotted/images/online-product22.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드X네추럴라이즈] 이뮨 멀티 비타민", priceOriginal: 26900, discountPercent: 0, priceDiscounted: 26900, soldOut: false, image: "/Knotted/images/online-product23.jpg", category: "food", subcategory: "vitamin"},
   {name: "[노티드X네추럴라이즈] 알로에 젤리", priceOriginal: 16900, discountPercent: 0, priceDiscounted: 16900, soldOut: false, image: "/Knotted/images/online-product24.jpg", category: "food", subcategory: "vitamin"},
   {name: "스마일 옐로우 9종 굿즈 기프트 세트", priceOriginal: 120000, discountPercent: 0, priceDiscounted: 120000, soldOut: false, image: "/Knotted/images/online-product25.jpg", category: "living", subcategory: "stationery"},
   {name: "스마일 리걸 노트", priceOriginal: 6000, discountPercent: 0, priceDiscounted: 6000, soldOut: false, image: "/Knotted/images/online-product26.jpg", category: "living", subcategory: "stationery"},
   {name: "크림버니 리걸 노트", priceOriginal: 6000, discountPercent: 0, priceDiscounted: 6000, soldOut: false, image: "/Knotted/images/online-product27.jpg", category: "living", subcategory: "stationery"},
   {name: "스마일 반자동 투명 우산", priceOriginal: 16800, discountPercent: 0, priceDiscounted: 16800, soldOut: false, image: "/Knotted/images/online-product28.jpg", category: "living", subcategory: "stationery"},
   {name: "스마일 인센스 스틱 & 홀더 기프트 세트", priceOriginal: 75800, discountPercent: 0, priceDiscounted: 75800, soldOut: false, image: "/Knotted/images/online-product29.png", category: "living", subcategory: "stationery"},
   {name: "스마일 케이크 캔들", priceOriginal: 4800, discountPercent: 0, priceDiscounted: 4800, soldOut: false, image: "/Knotted/images/online-product30.jpg", category: "living", subcategory: "partySupplies"},
   {name: "스마일 농구공", priceOriginal: 65000, discountPercent: 0, priceDiscounted: 65000, soldOut: false, image: "/Knotted/images/online-product31.jpg", category: "living", subcategory: "outdoor"},
   {name: "HBD 메시지 카드 & 데코 스티커 세트", priceOriginal: 3500, discountPercent: 0, priceDiscounted: 3500, soldOut: false, image: "/Knotted/images/online-product32.png", category: "living", subcategory: "stationery"},
   {name: "스마일 쇼핑백", priceOriginal: 1000, discountPercent: 0, priceDiscounted: 1000, soldOut: false, image: "/Knotted/images/online-product33.jpg", category: "living", subcategory: "stationery"},
   {name: "[노티드X네추럴라이즈] 멀티 비타민 꾸미 비타 젤리", priceOriginal: 18900, discountPercent: 0, priceDiscounted: 18900, soldOut: false, image: "/Knotted/images/online-product34.jpg", category: "food", subcategory: "vitamin"},
   {name: "[노티드X네추럴라이즈] 비타민 C 꾸미 비타 젤리", priceOriginal: 18900, discountPercent: 0, priceDiscounted: 18900, soldOut: false, image: "/Knotted/images/online-product35.jpg", category: "food", subcategory: "vitamin"},
   {name: "[노티드X네추럴라이즈] 비타민 D 꾸미 비타 젤리", priceOriginal: 18900, discountPercent: 0, priceDiscounted: 18900, soldOut: false, image: "/Knotted/images/online-product36.jpg", category: "food", subcategory: "vitamin"},
   {name: "[노티드] 스마일 만쥬 (우유크림)", priceOriginal: 5900, discountPercent: 0, priceDiscounted: 5900, soldOut: false, image: "/Knotted/images/online-product37.jpg", category: "food", subcategory: "dessert"},
   {name: "[노티드] 밀크데이지 우유무스 케이크", priceOriginal: 29000, discountPercent: 0, priceDiscounted: 29000, soldOut: true, image: "/Knotted/images/online-product38.jpg", category: "food", subcategory: "dessert"},
   {name: "[노티드] 초콜릿 봉봉 2종", priceOriginal: 16900, discountPercent: 0, priceDiscounted: 16900, soldOut: true, image: "/Knotted/images/online-product39.png", category: "food", subcategory: "chocolateCandy"},
   {name: "[노티드] 슈가베어 콛드브루", priceOriginal: 4500, discountPercent: 0, priceDiscounted: 4500, soldOut: true, image: "/Knotted/images/online-product40.png", category: "food", subcategory: "coffeeBeverage"},
   {name: "[노티드] 스마일 크림빵 2종", priceOriginal: 11500, discountPercent: 0, priceDiscounted: 11500, soldOut: true, image: "/Knotted/images/online-product41.jpg", category: "food", subcategory: "dessert"},
   {name: "스마일 인센스 홀더", priceOriginal: 43000, discountPercent: 0, priceDiscounted: 43000, soldOut: true, image: "/Knotted/images/online-product42.png", category: "living", subcategory: "homeDecoKitchen"},
   {name: "HBD 케이크픽", priceOriginal: 4500, discountPercent: 0, priceDiscounted: 4500, soldOut: true, image: "/Knotted/images/online-product43.jpg", category: "living", subcategory: "partySupplies"},
   {name: "[노티드X라브아] 프래그런스 태그", priceOriginal: 12000, discountPercent: 0, priceDiscounted: 12000, soldOut: true, image: "/Knotted/images/online-product44.jpg", category: "living", subcategory: "homeDecoKitchen"},
   {name: "[노티드X덴티끄] 스마일 트래블키트", priceOriginal: 9900, discountPercent: 0, priceDiscounted: 9900, soldOut: true, image: "/Knotted/images/online-product45.jpg", category: "living", subcategory: "homeDecoKitchen"},
];

/* 정렬 */

// 상태 변수 추가
let currentSortOption = "newArrival";

// 정렬 함수
function applySorting(data) {
   const sorted = [...data]; // 원본 배열 손상 방지용 복사

   switch (currentSortOption) {
      case "lowCost":
         sorted.sort((a, b) => a.priceDiscounted - b.priceDiscounted);
         break;
      case "highCost":
         sorted.sort((a, b) => b.priceDiscounted - a.priceDiscounted);
         break;
      case "name":
         sorted.sort((a, b) => a.name.localeCompare(b.name));
         break;
      case "nameReverse":
         sorted.sort((a, b) => b.name.localeCompare(a.name));
         break;
      // 기본은 최신순 (데이터 순서 유지)
      case "newArrival":
      default:
         break;
   }

   return sorted;
}

// 1) 상태 관리 변수
let currentMainCategory = "all";
let currentSubCategory = "all";

// 2) 메인 카테고리 선택
function filterMainCategory(category) {
   currentMainCategory = category;
   currentSubCategory = "all";

   // 메인카테고리 버튼 active 처리
   const mainButtons = document.querySelectorAll(".category-filters a");
   mainButtons.forEach((btn) => btn.classList.remove("active"));
   const clickedButton = document.querySelector(`.category-filters a[data-category="${category}"]`);
   if (clickedButton) clickedButton.classList.add("active");

   // 서브필터 표시
   document.getElementById("foodSubfilters").style.display = category === "food" ? "flex" : "none";
   document.getElementById("livingSubfilters").style.display = category === "living" ? "flex" : "none";

   // 서브카테고리 all 초기화
   const allSubButtons = document.querySelectorAll("#foodSubfilters a, #livingSubfilters a");
   allSubButtons.forEach((btn) => btn.classList.remove("active"));
   const defaultSubButton = document.querySelector(`#${category}Subfilters a[data-subcategory="all"]`);
   if (defaultSubButton) defaultSubButton.classList.add("active");

   applyFilters();
}

// 3) 서브카테고리 선택
function filterSubCategory(subcategory) {
   currentSubCategory = subcategory;

   // 서브카테고리 버튼 active 처리
   const subButtons = document.querySelectorAll("#foodSubfilters a, #livingSubfilters a");
   subButtons.forEach((btn) => btn.classList.remove("active"));
   const clickedSubButton = document.querySelector(`a[data-subcategory="${subcategory}"]`);
   if (clickedSubButton) clickedSubButton.classList.add("active");

   applyFilters();
}

// 4) 필터 적용 후 렌더링
function applyFilters() {
   let filtered = products; // 기존 products 배열

   // -- 메인 카테고리 필터링
   if (currentMainCategory !== "all") {
      filtered = filtered.filter((p) => p.category === currentMainCategory);
   }

   // -- 서브카테고리 필터링
   if (currentSubCategory !== "all") {
      filtered = filtered.filter((p) => p.subcategory === currentSubCategory);
   }

   // 정렬 적용
   const sorted = applySorting(filtered);

   // 화면에 다시 그리기
   renderProductList(sorted); // 정렬된 데이터로 렌더링
}

// 상품 렌더링 함수
function renderProductList(data) {
   const container = document.getElementById("productList");
   container.innerHTML = "";

   data.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";

      //품절시 클래스 추가
      if (p.soldOut) {
         card.classList.add("sold-out");

         const soldOverlay = document.createElement("div");
         soldOverlay.className = "sold-out-label";
         soldOverlay.innerText = "Sold Out";
         card.appendChild(soldOverlay);
      }

      const priceHTML =
         p.discountPercent > 0
            ? `<div><p class="price-original">${p.priceOriginal.toLocaleString()}원</p>
            <p class="price-discount"><span>${p.discountPercent}%</span> ${p.priceDiscounted.toLocaleString()}원</p></div>`
            : `<div><p class="price-discount">${p.priceOriginal.toLocaleString()}원</p></div>`;

      card.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <h4>${p.name}</h4>
          ${priceHTML}
          <button class="addCart">담기</button>
        `;

      card.addEventListener("click", function (e) {
         if (e.target.classList.contains("addCart")) {
            console.log("테스트");
            showModal(p);
         }
      });

      container.appendChild(card);
   });
}

document.getElementById("sortFilter").addEventListener("change", function (e) {
   currentSortOption = e.target.value;
   applyFilters();
});

/* 품절 상품 제외 */
document.getElementById("soldOutCheck").addEventListener("change", function () {
   let soldOutCards = document.querySelectorAll(".sold-out");
   soldOutCards.forEach(function (card) {
      if (this.checked) {
         card.style.display = "none";
      } else {
         card.style.display = "flex";
      }
   }, this);
});

/* 모달 */
function showModal(product) {
   document.getElementById("modalImage").setAttribute("src", `${product.image}`);
   document.getElementById("modalName").textContent = product.name;
   document.getElementById("modalPrice").textContent = product.priceDiscounted + "원";
   document.getElementById("productModal").style.display = "flex";
   document.getElementById("modalClose").addEventListener("click", function () {
      document.getElementById("productModal").style.display = "none";
   });
}

// 페이지 로드 시 전체 표시
applyFilters();
