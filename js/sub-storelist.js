/* 와이파이
주차가능
발레파킹 */
const stores = [
   {name: "노티드 스튜디오 청담", region: "서울", address: "서울 강남구 도산대로53길 15", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store01.jpg"},
   {name: "노티드월드 (잠실롯데월드몰)", region: "서울", address: "서울 송파구 올림픽로 300 롯데월드몰 5층 (F05~11호)", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store02.jpg"},
   {name: "노티드 가산퍼블릭", region: "서울", address: "서울 금천구 디지털로 178 A동 지상1층 117호", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: false, wheelchair: false}, image: "/Knotted/images/store03.jpg"},
   {name: "노티드 강남신세계", region: "서울", address: "서울 서초구 신반포로 176 지하 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store04.jpg"},
   {name: "노티드 강남역", region: "서울", address: "서울 서초구 강남대로 429 3층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: false, wheelchair: false}, image: "/Knotted/images/store05.jpg"},
   {name: "노티드 구의역", region: "서울", address: "서울시 광진구 아차산로 402 이스트폴 지하 2층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: false, wheelchair: false}, image: "/Knotted/images/store06.png"},
   {name: "노티드 김포롯데몰", region: "서울", address: "서울 강서구 하늘길 77 롯데몰 김포공항점 GF층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store07.jpg"},
   {name: "노티드 삼성", region: "서울", address: "서울 강남구 테헤란로103길 9 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: false, wheelchair: false}, image: "/Knotted/images/store08.jpg"},
   {name: "노티드 서울로에너지플러스", region: "서울", address: "서울 중구 회현동 84-17 에너지플러스 3층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: false, wheelchair: false}, image: "/Knotted/images/store09.jpeg"},
   {name: "노티드 신림", region: "서울", address: "서울 관악구 신림로 364 우장빌딩 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store10.jpg"},
   {name: "노티드 안국", region: "서울", address: "서울 종로구 북촌로 6-3", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store11.jpg"},
   {name: "노티드 여의도IFC몰", region: "서울", address: "서울 영등포구 국제금융로 10 L2층 234호", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store12.jpg"},
   {name: "노티드 종각하이커", region: "서울", address: "서울 중구 청계천로 40 5층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store13.png"},
   {name: "노티드 김포현대아울렛", region: "경기", address: "경기 김포시 고촌읍 아라육로152번길 100 현대프리미엄아울렛 EAST 2층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store14.jpg"},
   {name: "노티드 광교힐스테이트", region: "경기", address: "수원시 영통구 도청로66번길 6 힐스테이트 광교중앙역 퍼스트 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store15.png"},
   {name: "노티드 다산현대아울렛", region: "경기", address: "경기 남양주시 다산순환로 50, 현대프리미엄아울렛 남양주점 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store16.jpg"},
   {name: "노티드 동탄롯데", region: "경기", address: "경기 화성시 동탄역로 160(오산동) 롯데백화점 동탄점 지하 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store17.jpg"},
   {name: "노티드 수원스타필드", region: "경기", address: "경기 수원시 장안구 수성로 175, 1층 1272호", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store18.jpg"},
   {name: "노티드 안성스타필드", region: "경기", address: "경기 안성시 공도읍 서동대로 3930-39 스타필드 안성 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store19.jpeg"},
   {name: "노티드 여주프리미엄아울렛", region: "경기", address: "경기 여주시 명품로 370 여주프리미엄아울렛 2.0 200동 640호", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store20.jpg"},
   {name: "노티드 의정부신세계", region: "경기", address: "경기 의정부시 평화로 525 3층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store21.png"},
   {name: "노티드 죽전스타필드마켓", region: "경기", address: "경기 용인시 수지구 포은대로 552 스타필드 마켓 죽전점 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store22.jpg"},
   {name: "노티드 중동현대", region: "경기", address: "경기 부천시 원미구 길주로 180, 지하1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store23.jpg"},
   {name: "노티드 판교현대", region: "경기", address: "경기 성남시 분당구 판교역로146번길 20 현대백화점 판교점 지하 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store24.jpg"},
   {name: "노티드 평촌롯데", region: "경기", address: "경기 안양시 동안구 시민대로 180 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store25.jpg"},
   {name: "노티드 하남스타필드", region: "경기", address: "경기 하남시 미사대로 750 3층 잇토피아 내부", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store26.png"},
   {name: "노티드 송도현대아울렛", region: "인천", address: "인천 연수구 송도국제대로 123 현대프리미엄 아울렛 송도점 지하1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store27.jpg"},
   {name: "노티드 대전갤러리아", region: "대전", address: "대전 서구 대덕대로 219 갤러리아타임월드백화점 EAST 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store28.jpg"},
   {name: "노티드 대전신세계", region: "대전", address: "대전 유성구 엑스포로 1, 지하 1층 A34호", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store29.jpg"},
   {name: "노티드 천안갤러리아", region: "충청", address: "충남 천안시 서북구 공원로 227, 천안갤러리아백화점 센터시티점 지하1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store30.jpg"},
   {name: "노티드 천안아산신세계", region: "충청", address: "충남 천안시 동남구 만남로 43 본관 2동 4층 푸드스트리트", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store31.jpg"},
   {name: "노티드 대구신세계", region: "대구", address: "대구 동구 동부로 149 대구 신세계백화점 지하1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store32.jpg"},
   {name: "노티드 대구더현대", region: "대구", address: "대구 중구 달구벌대로 2077 더현대 대구, 지하 2층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store33.jpg"},
   {name: "노티드 대구빌리브헤리티지", region: "대구", address: "대구 수성구 수성동4가 2266 빌리브 헤리티지 근린생활시설 206호, 207호", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store34.jpg"},
   {name: "노티드 부산롯데본점", region: "부산", address: "부산 부산진구 가야대로 772", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store35.png"},
   {name: "노티드 부산신세계센텀시티", region: "부산", address: "부산 해운대구 센텀남대로 35", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store36.jpg"},
   {name: "노티드 부산프리미엄아울렛", region: "부산", address: "부산 기장군 장안읍 정관로 1133 부산프리미엄아울렛 지하 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store37.jpg"},
   {name: "노티드 부산해운대", region: "부산", address: "부산 해운대구 구남로 17", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: false}, image: "/Knotted/images/store38.jpg"},
   {name: "노티드 김해신세계", region: "경남", address: "경남 김해시 김해대로 2232 신세계백화점 김해점 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store39.jpg"},
   {name: "노티드 광주신세계", region: "광주", address: "광주 서구 무진대로 932 신세계백화점광주점, 지하 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store40.jpg"},
   {name: "노티드 전주롯데", region: "전북", address: "전북 전주시 완산구 온고을로 2, 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: true}, image: "/Knotted/images/store41.jpeg"},
   {name: "노티드 제주DT", region: "제주", address: "제주특별자치도 제주시 연오로 5, 1층", tel: "02-123-4567", hours: "09:00~22:00", lastOrder: "21:30", features: {wifi: true, parking: true, wheelchair: false}, image: "/Knotted/images/store42.jpg"},
];

function renderStores(storeArray) {
   const container = document.getElementById("storeList");
   container.innerHTML = "";

   storeArray.forEach((store) => {
      const card = document.createElement("div");
      card.className = "store-card";
      card.innerHTML = `
    <div class="card-imgbox"><img src="${store.image}" alt="${store.name}"></div>
    <div class="card-textbox">    <h4>${store.name}</h4>
    <p>${store.address}</p></div>
  `;
      card.onclick = () => openModal(store); // 💡 클릭 시 모달 열기
      container.appendChild(card);
   });

   if (storeArray.length === 0) {
      container.innerHTML = "<p>검색 결과가 없습니다.</p>";
      return;
   }
}

renderStores(stores);

function openModal(store) {
   document.getElementById("modalName").textContent = store.name;
   document.getElementById("modalImg").setAttribute('src',store.image)
   document.getElementById("modalAddress").textContent = store.address;
   document.getElementById("modalTel").textContent = store.tel;
   document.getElementById("modalHours").textContent = store.hours;
   document.getElementById("modalLastOrder").textContent = store.lastOrder;

   const featureList = document.getElementById("modalFeatures");
   featureList.innerHTML = ""; // 초기화

   const icons = {
      wifi: `<i class="fa-solid fa-wifi"></i>`,
      parking: `<i class="fa-solid fa-car"></i>`,
      wheelchair: `<i class="fa-solid fa-wheelchair"></i>`,
   };

   for (let key in store.features) {
      const span = document.createElement("span");
      if (store.features[key] === true) {
         span.innerHTML = `${icons[key]}`;
         featureList.appendChild(span);
      }
      //li.textContent = `${store.features[key] ? `${icons[key]}` : ""}`;
   }

   document.getElementById("storeModal").style.display = "block";
}

// 모달 닫기
document.getElementById("modalClose").onclick = function () {
   document.getElementById("storeModal").style.display = "none";
};

/* 검색 기능 */
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function (e) {
   if (e.key === "Enter") {
      const keyword = searchInput.value.trim().toLowerCase();
      const filtered = stores.filter((store) => store.name.toLowerCase().includes(keyword) || store.region.toLowerCase().includes(keyword));
      renderStores(filtered);
   }
});

/* 지도 */
var mapOptions = {
   center: new naver.maps.LatLng(37.3595704, 127.105399),
   zoom: 10,
};

var map = new naver.maps.Map("map", mapOptions);
var HOME_PATH = window.HOME_PATH || ".";

var storeLocation = new naver.maps.LatLng(37.524295, 127.03818),
   map = new naver.maps.Map("map", {
      center: storeLocation.destinationPoint(0, 500),
      zoom: 15,
   }),
   marker = new naver.maps.Marker({
      map: map,
      position: storeLocation,
   });

var contentString = ['<div class="iw_inner">', "   <h3>노티드 스튜디오 청담</h3>", "   <p>서울 강남구 도산대로53길 15 1층<br />", "   </p>", "</div>"].join("");

var infowindow = new naver.maps.InfoWindow({
   content: contentString,

   backgroundColor: "#fff",
   borderColor: "#bdbdbd",
   borderWidth: 1,
   anchorSkew: true,
   anchorColor: "#fff",

});

naver.maps.Event.addListener(marker, "click", function (e) {
   if (infowindow.getMap()) {
      infowindow.close();
   } else {
      infowindow.open(map, marker);
   }
});

infowindow.open(map, marker);
