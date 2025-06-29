/* 매장 */
let stores = [
  { name: "노티드 스튜디오 청담", region: "서울", address: "서울 강남구 도산대로53길 15", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: true }, image: '../images/store01.jpg' },
  { name: "노티드월드 (잠실롯데월드몰)", region: "서울", address: "서울 송파구 올림픽로 300 롯데월드몰 5층 (F05~11호)", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store02.jpg' },
  { name: "노티드 가산퍼블릭", region: "서울", address: "서울 금천구 디지털로 178 A동 지상1층 117호", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store03.jpg' },
  { name: "노티드 강남신세계", region: "서울", address: "서울 서초구 신반포로 176 지하 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store04.jpg' },
  { name: "노티드 강남역", region: "서울", address: "서울 서초구 강남대로 429 3층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store05.jpg' },
  { name: "노티드 구의역", region: "서울", address: "서울시 광진구 아차산로 402 이스트폴 지하 2층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store06.png' },
  { name: "노티드 김포롯데몰", region: "서울", address: "서울 강서구 하늘길 77 롯데몰 김포공항점 GF층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store07.jpg' },
  { name: "노티드 삼성", region: "서울", address: "서울 강남구 테헤란로103길 9 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store08.jpg' },
  { name: "노티드 서울로에너지플러스", region: "서울", address: "서울 중구 회현동 84-17 에너지플러스 3층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store09.jpeg' },
  { name: "노티드 신림", region: "서울", address: "서울 관악구 신림로 364 우장빌딩 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store10.jpg' },
  { name: "노티드 안국", region: "서울", address: "서울 종로구 북촌로 6-3", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store11.jpg' },
  { name: "노티드 여의도IFC몰", region: "서울", address: "서울 영등포구 국제금융로 10 L2층 234호", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store12.jpg' },
  { name: "노티드 종각하이커", region: "서울", address: "서울 중구 청계천로 40 5층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store13.png' },
  { name: "노티드 김포현대아울렛", region: "경기", address: "경기 김포시 고촌읍 아라육로152번길 100 현대프리미엄아울렛 EAST 2층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store14.jpg' },
  { name: "노티드 광교힐스테이트", region: "경기", address: "수원시 영통구 도청로66번길 6 힐스테이트 광교중앙역 퍼스트 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store15.png' },
  { name: "노티드 다산현대아울렛", region: "경기", address: "경기 남양주시 다산순환로 50, 현대프리미엄아울렛 남양주점 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store16.jpg' },
  { name: "노티드 동탄롯데", region: "경기", address: "경기 화성시 동탄역로 160(오산동) 롯데백화점 동탄점 지하 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store17.jpg' },
  { name: "노티드 수원스타필드", region: "경기", address: "경기 수원시 장안구 수성로 175, 1층 1272호", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store18.jpg' },
  { name: "노티드 안성스타필드", region: "경기", address: "경기 안성시 공도읍 서동대로 3930-39 스타필드 안성 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store19.jpeg' },
  { name: "노티드 여주프리미엄아울렛", region: "경기", address: "경기 여주시 명품로 370 여주프리미엄아울렛 2.0 200동 640호", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store20.jpg' },
  { name: "노티드 의정부신세계", region: "경기", address: "경기 의정부시 평화로 525 3층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store21.png' },
  { name: "노티드 죽전스타필드마켓", region: "경기", address: "경기 용인시 수지구 포은대로 552 스타필드 마켓 죽전점 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store22.jpg' },
  { name: "노티드 중동현대", region: "경기", address: "경기 부천시 원미구 길주로 180, 지하1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store23.jpg' },
  { name: "노티드 판교현대", region: "경기", address: "경기 성남시 분당구 판교역로146번길 20 현대백화점 판교점 지하 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store24.jpg' },
  { name: "노티드 평촌롯데", region: "경기", address: "경기 안양시 동안구 시민대로 180 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store25.jpg' },
  { name: "노티드 하남스타필드", region: "경기", address: "경기 하남시 미사대로 750 3층 잇토피아 내부", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store26.png' },
  { name: "노티드 송도현대아울렛", region: "인천", address: "인천 연수구 송도국제대로 123 현대프리미엄 아울렛 송도점 지하1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store27.jpg' },
  { name: "노티드 대전갤러리아", region: "대전", address: "대전 서구 대덕대로 219 갤러리아타임월드백화점 EAST 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store28.jpg' },
  { name: "노티드 대전신세계", region: "대전", address: "대전 유성구 엑스포로 1, 지하 1층 A34호", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store29.jpg' },
  { name: "노티드 천안갤러리아", region: "충청", address: "충남 천안시 서북구 공원로 227, 천안갤러리아백화점 센터시티점 지하1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store30.jpg' },
  { name: "노티드 천안아산신세계", region: "충청", address: "충남 천안시 동남구 만남로 43 본관 2동 4층 푸드스트리트", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store31.jpg' },
  { name: "노티드 대구신세계", region: "대구", address: "대구 동구 동부로 149 대구 신세계백화점 지하1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store32.jpg' },
  { name: "노티드 대구더현대", region: "대구", address: "대구 중구 달구벌대로 2077 더현대 대구, 지하 2층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store33.jpg' },
  { name: "노티드 대구빌리브헤리티지", region: "대구", address: "대구 수성구 수성동4가 2266 빌리브 헤리티지 근린생활시설 206호, 207호", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store34.jpg' },
  { name: "노티드 부산롯데본점", region: "부산", address: "부산 부산진구 가야대로 772", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store35.png' },
  { name: "노티드 부산신세계센텀시티", region: "부산", address: "부산 해운대구 센텀남대로 35", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store36.jpg' },
  { name: "노티드 부산프리미엄아울렛", region: "부산", address: "부산 기장군 장안읍 정관로 1133 부산프리미엄아울렛 지하 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store37.jpg' },
  { name: "노티드 부산해운대", region: "부산", address: "부산 해운대구 구남로 17", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store38.jpg' },
  { name: "노티드 김해신세계", region: "경남", address: "경남 김해시 김해대로 2232 신세계백화점 김해점 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store39.jpg' },
  { name: "노티드 광주신세계", region: "광주", address: "광주 서구 무진대로 932 신세계백화점광주점, 지하 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store40.jpg' },
  { name: "노티드 전주롯데", region: "전북", address: "전북 전주시 완산구 온고을로 2, 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store41.jpeg' },
  { name: "노티드 제주DT", region: "제주", address: "제주특별자치도 제주시 연오로 5, 1층", tel: "02", hours: "09:00~22:00", lastOrder: "21:30", features: { wifi: true, parking: false, valet: false }, image: '../images/store42.jpg' }
];
/* 메뉴 */
let menus = [
  /* 도넛 */
  { name: '초당 옥수수 크림 도넛', engname: 'sweet corn cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut01.png", category: 'donut', description: '초당 옥수수 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '메론 크림 도넛', engname: 'melon cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut02.png", category: 'donut', description: '메론 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '민트 초코 크림 도넛', engname: 'mint choco cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut03.png", category: 'donut', description: '민트 초코 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '스마일 보스톤 크림 도넛', engname: 'smile boston cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut04.png", category: 'donut', description: '스마일 보스톤 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '저당 크림 도넛', engname: 'low-sugar cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut05.png", category: 'donut', description: '저당 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '저당 요거 크림 도넛', engname: 'low-sugar yogurt cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut06.png", category: 'donut', description: '저당 요거 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '저당 초코 크림 도넛', engname: 'low-sugar choco cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut07.png", category: 'donut', description: '저당 초코 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '저당 말차 크림 도넛', engname: 'low-sugar matcha cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut08.png", category: 'donut', description: '저당 말차 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '우유 생크림 도넛', engname: 'milk cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut09.jpg", category: 'donut', description: '우유 생크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '딸기우유 생크림 도넛', engname: 'strawberry milk cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut10.png", category: 'donut', description: '딸기우유 생크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '피스타치오 크림 도넛', engname: 'pistachio cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut11.png", category: 'donut', description: '피스타치오 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '클래식 바닐라 도넛', engname: 'classic vanilla donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut12.jpg", category: 'donut', description: '클래식 바닐라 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '얼그레이 도넛', engname: 'earl gray donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut13.jpg", category: 'donut', description: '얼그레이 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '초코푸딩 도넛', engname: 'choco pudding donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut14.jpg", category: 'donut', description: '초코푸딩 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '레몬 슈가 도넛', engname: 'lemon sugar donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut15.png", category: 'donut', description: '레몬 슈가 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '라즈베리 도넛', engname: 'raspberry donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut16.jpg", category: 'donut', description: '라즈베리 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '카야버터 도넛', engname: 'kaya butter donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut17.jpg", category: 'donut', description: '카야버터 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '노티드 글레이즈 도넛', engname: 'knotted glazed donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut18.png", category: 'donut', description: '노티드 글레이즈 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '오메기 찰떡 쑥크림 도넛', engname: 'omegi riced cake mugwort cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut19.png", category: 'donut', description: '오메기 찰떡 쑥크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '우도 땅콩 크림 도넛', engname: 'udo peanut cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut20.png", category: 'donut', description: '우도 땅콩 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '몬딱 흑임자 크림 도넛', engname: 'monttak black sesame cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut21.png", category: 'donut', description: '몬딱 흑임자 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  { name: '유자 한라봉 크림 도넛', engname: 'yuza hallabong cream donut', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-donut22.png", category: 'donut', description: '유자 한라봉 크림 도넛은 부드러운 도넛 생지에 달콤한 필링이 가득 들어간 메뉴입니다.' },
  /* 베이커리 */
  { name: '고구마 카스테라 크림 소금빵', engname: 'SWEET POTATO CUSTARD CREAM SALTED BREAD', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-bakery01.png", category: 'bakery', description: '고구마 카스테라 크림 소금빵은 겉은 바삭하고 속은 쫄깃한 식감의 소금빵 계열 제품입니다.' },
  { name: '플레인 소금빵', engname: 'PLAIN SALTED BREAD', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-bakery02.png", category: 'bakery', description: '플레인 소금빵은 겉은 바삭하고 속은 쫄깃한 식감의 소금빵 계열 제품입니다.' },
  { name: '우유 생크림 소금빵', engname: 'MILK CREAM SALTED BREAD', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-bakery03.png", category: 'bakery', description: '우유 생크림 소금빵은 겉은 바삭하고 속은 쫄깃한 식감의 소금빵 계열 제품입니다.' },
  { name: '피스타치오 크림 소금빵', engname: 'PISTACHIO CREAM SALTED BREAD', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-bakery04.png", category: 'bakery', description: '피스타치오 크림 소금빵은 겉은 바삭하고 속은 쫄깃한 식감의 소금빵 계열 제품입니다.' },
  { name: '말차 크림 소금빵', engname: 'MATCHA CREAM SALTED BREAD', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-bakery05.png", category: 'bakery', description: '말차 크림 소금빵은 겉은 바삭하고 속은 쫄깃한 식감의 소금빵 계열 제품입니다.' },
  { name: '모카번 연유 크림 소금빵', engname: 'MOCHA BUN SWEET MILK CREAM SALTED BREAD', link: '#none', allergens: ["밀", "우유", "계란"], image: "../images/menu-bakery06.png", category: 'bakery', description: '모카번 연유 크림 소금빵은 겉은 바삭하고 속은 쫄깃한 식감의 소금빵 계열 제품입니다.' },
  /* 케이크 */
  { name: '마스카포네 티라미수', engname: 'MASCARPONE TIRAMISU', link: '#none', allergens: ["밀", "우유", "계란", "대두"], image: "../images/menu-cake01.png", category: 'cake', description: '마스카포네 티라미수는 진한 크림과 부드러운 시트가 조화를 이루는 감성 케이크입니다.' },
  { name: '옐로우 스마일', engname: 'yellow smile', link: '#none', allergens: ["밀", "우유", "계란", "대두"], image: "../images/menu-cake02.png", category: 'cake', description: '옐로우 스마일은 진한 크림과 부드러운 시트가 조화를 이루는 감성 케이크입니다.' },
  { name: '크림버니의 핑크 가든', engname: 'pink garden of cream bunny', link: '#none', allergens: ["밀", "우유", "계란", "대두"], image: "../images/menu-cake03.png", category: 'cake', description: '크림버니의 핑크 가든은 진한 크림과 부드러운 시트가 조화를 이루는 감성 케이크입니다.' },
  { name: '밀크 데이지 케이크', engname: 'milk daisy cake', link: '#none', allergens: ["밀", "우유", "계란", "대두"], image: "../images/menu-cake04.png", category: 'cake', description: '밀크 데이지 케이크는 진한 크림과 부드러운 시트가 조화를 이루는 감성 케이크입니다.' },
  { name: '땡큐 블루베리 머치', engname: 'thank you blueberry much', link: '#none', allergens: ["밀", "우유", "계란", "대두"], image: "../images/menu-cake05.png", category: 'cake', description: '땡큐 블루베리 머치는 진한 크림과 부드러운 시트가 조화를 이루는 감성 케이크입니다.' },
  { name: '마스카포네 치즈 케이크', engname: 'mascarpone cheese cake', link: '#none', allergens: ["밀", "우유", "계란", "대두"], image: "../images/menu-cake06.png", category: 'cake', description: '마스카포네 치즈 케이크는 진한 크림과 부드러운 시트가 조화를 이루는 감성 케이크입니다.' },
  /* 베버리지 */
  { name: '수박 주스', engname: 'watermelon juice', link: '#none', allergens: [], image: "../images/menu-beverage01.png", category: 'beverage', subcategory: 'non-coffee', description: '제주산 수박을 담아낸 시원 달달 수박 주스' },
  { name: '수박 화채', engname: 'watermelon punch', link: '#none', allergens: [], image: "../images/menu-beverage02.png", category: 'beverage', subcategory: 'non-coffee', description: '제주산 수박 주스에 달콤한 야쿠르트와 후르츠 칵테일, 쫀득한 코코 젤리를 더한 시원한 수박 화채.' },
  { name: '망고 애플티 에이드', engname: 'mango apple tea ade', link: '#none', allergens: [], image: "../images/menu-beverage03.png", category: 'beverage', subcategory: 'non-coffee', description: '망고와 피치의 달콤함에 애플티의 향긋함을 더한 스파클링 에이드.' },
  { name: '통통 단팥 우유 빙수', engname: 'sweet red bean milk shake', link: '#none', allergens: ["우유", "대두"], image: "../images/menu-beverage04.png", category: 'beverage', subcategory: 'non-coffee', description: '망고와 피치의 달콤함에 애플티의 향긋함을 더한 스파클링 에이드.' },
  { name: '설향 딸기 라떼', engname: 'seolhyang strawberry latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage05.png", category: 'beverage', subcategory: 'non-coffee', description: '설향 딸기 라떼는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' },
  { name: '제주 말차 딸기 라떼', engname: 'jeju matcha strawberry latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage06.png", category: 'beverage', subcategory: 'signature', description: '제주 말차 딸기 라떼는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '크림 아메리카노', engname: 'cream americano', link: '#none', allergens: ["우유"], image: "../images/menu-beverage07.png", category: 'beverage', subcategory: 'signature', description: '크림 아메리카노는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '크림 라떼', engname: 'cream latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage08.png", category: 'beverage', subcategory: 'signature', description: '크림 라떼는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '크림 제주 말차 라떼', engname: 'cream jeju matcha latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage09.png", category: 'beverage', subcategory: 'signature', description: '크림 제주 말차 라떼는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '제주 말차 라떼', engname: 'jeju matcha latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage10.png", category: 'beverage', subcategory: 'signature', description: '제주 말차 라떼는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '아이스 제주 말차 라떼', engname: 'ice jeju matcha latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage11.png", category: 'beverage', subcategory: 'signature', description: '아이스 제주 말차 라떼는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '노티드 밀크 클라우드', engname: 'knotted milk cloud', link: '#none', allergens: ["우유"], image: "../images/menu-beverage12.png", category: 'beverage', subcategory: 'signature', description: '노티드 밀크 클라우드는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '제주 말차 클라우드', engname: 'jeju matcha cloud', link: '#none', allergens: ["우유"], image: "../images/menu-beverage13.png", category: 'beverage', subcategory: 'signature', description: '제주 말차 클라우드는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '티라미수 클라우드', engname: 'tiramisu cloud', link: '#none', allergens: ["우유"], image: "../images/menu-beverage14.png", category: 'beverage', subcategory: 'signature', description: '티라미수 클라우드는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '타로 클라우드', engname: 'taro cloud', link: '#none', allergens: ["우유"], image: "../images/menu-beverage15.png", category: 'beverage', subcategory: 'signature', description: '타로 클라우드는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '프레시 ABC 주스', engname: 'fresh abc juice', link: '#none', allergens: [], image: "../images/menu-beverage16.png", category: 'beverage', subcategory: 'signature', description: '프레시 ABC 주스는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '퓨어 그린 부스트', engname: 'pure green boost', link: '#none', allergens: [], image: "../images/menu-beverage17.png", category: 'beverage', subcategory: 'signature', description: '퓨어 그린 부스트는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '글로우 오렌지 블렌드', engname: 'glow orange blend', link: '#none', allergens: [], image: "../images/menu-beverage18.png", category: 'beverage', subcategory: 'signature', description: '글로우 오렌지 블렌드는 독창적인 비주얼과 조화로운 맛이 특징인 시그니처 음료입니다.' },
  { name: '에스프레소', engname: 'espresso', link: '#none', allergens: [], image: "../images/menu-beverage19.png", category: 'beverage', subcategory: 'coffee', description: '에스프레소는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '아메리카노', engname: 'americano', link: '#none', allergens: [], image: "../images/menu-beverage20.png", category: 'beverage', subcategory: 'coffee', description: '아메리카노는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '아이스 아메리카노', engname: 'iced americano', link: '#none', allergens: [], image: "../images/menu-beverage21.png", category: 'beverage', subcategory: 'coffee', description: '아이스 아메리카노는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '카페라떼', engname: 'cafe latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage22.png", category: 'beverage', subcategory: 'coffee', description: '카페라떼는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '아이스 카페라떼', engname: 'iced cafe latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage23.png", category: 'beverage', subcategory: 'coffee', description: '아이스 카페라떼는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '바닐라빈 라떼', engname: 'vanilla bean latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage24.png", category: 'beverage', subcategory: 'coffee', description: '바닐라빈 라떼는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '아이스 바닐라빈 라떼', engname: 'iced vanilla bean latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage25.png", category: 'beverage', subcategory: 'coffee', description: '아이스 바닐라빈 라떼는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '콜드 브루', engname: 'cold brew', link: '#none', allergens: [], image: "../images/menu-beverage26.png", category: 'beverage', subcategory: 'coffee', description: '콜드 브루는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '콜드 브루 라떼', engname: 'cold brew latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage27.png", category: 'beverage', subcategory: 'coffee', description: '콜드 브루 라떼는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '디카페인 콜드 브루', engname: 'decaffeine cold brew', link: '#none', allergens: [], image: "../images/menu-beverage28.png", category: 'beverage', subcategory: 'coffee', description: '디카페인 콜드 브루는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '디카페인 콜드 브루 라떼', engname: 'decaffeine cold brew latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage29.png", category: 'beverage', subcategory: 'coffee', description: '디카페인 콜드 브루 라떼는 깊고 진한 풍미가 느껴지는 클래식한 커피 음료입니다.' },
  { name: '초콜릿 라떼', engname: 'chocolate latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage30.png", category: 'beverage', subcategory: 'non-coffee', description: '초콜릿 라떼는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' },
  { name: '아이스 초콜릿 라떼', engname: 'iced chocolate latte', link: '#none', allergens: ["우유"], image: "../images/menu-beverage31.png", category: 'beverage', subcategory: 'non-coffee', description: '아이스 초콜릿 라떼는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' },
  { name: '레몬에이드', engname: 'lemonade', link: '#none', allergens: [], image: "../images/menu-beverage32.png", category: 'beverage', subcategory: 'non-coffee', description: '레몬에이드는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' },
  { name: '자몽 레몬에이드', engname: 'grapefruit lemonade', link: '#none', allergens: [], image: "../images/menu-beverage33.png", category: 'beverage', subcategory: 'non-coffee', description: '자몽 레몬에이드는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' },
  { name: '제로슈가 레몬에이드', engname: 'zero-sugar lemonade', link: '#none', allergens: [], image: "../images/menu-beverage34.png", category: 'beverage', subcategory: 'non-coffee', description: '제로슈가 레몬에이드는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' },
  { name: '레몬티', engname: 'lemon tea', link: '#none', allergens: [], image: "../images/menu-beverage35.png", category: 'beverage', subcategory: 'tea', description: '레몬티는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '자몽 허니 블랙티', engname: 'grapefruit honey black tea', link: '#none', allergens: [], image: "../images/menu-beverage36.png", category: 'beverage', subcategory: 'tea', description: '자몽 허니 블랙티는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '피치 레몬 블랙티', engname: 'peach lemon black tea', link: '#none', allergens: [], image: "../images/menu-beverage37.png", category: 'beverage', subcategory: 'tea', description: '피치 레몬 블랙티는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '제로슈가 복숭아 아이스티', engname: 'zero-sugar peach iced tea', link: '#none', allergens: [], image: "../images/menu-beverage38.png", category: 'beverage', subcategory: 'tea', description: '제로슈가 복숭아 아이스티는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '제로슈가 복숭아 아이스티 스파클링', engname: 'zero-sugar peach iced tea sparkling', link: '#none', allergens: [], image: "../images/menu-beverage39.png", category: 'beverage', subcategory: 'tea', description: '제로슈가 복숭아 아이스티 스파클링은 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '제로슈가 아샷추', engname: 'zero-sugar iced tea and espresso shot', link: '#none', allergens: [], image: "../images/menu-beverage40.png", category: 'beverage', subcategory: 'tea', description: '제로슈가 아샷추는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '캐모마일', engname: 'chamomile tea', link: '#none', allergens: [], image: "../images/menu-beverage41.png", category: 'beverage', subcategory: 'tea', description: '캐모마일은 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '아이스 캐모마일', engname: 'iced chamomile tea', link: '#none', allergens: [], image: "../images/menu-beverage42.png", category: 'beverage', subcategory: 'tea', description: '아이스 캐모마일은 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '얼그레이', engname: 'earl gray tea', link: '#none', allergens: [], image: "../images/menu-beverage43.png", category: 'beverage', subcategory: 'tea', description: '얼그레이는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '아이스 얼그레이', engname: 'iced earl gray tea', link: '#none', allergens: [], image: "../images/menu-beverage44.png", category: 'beverage', subcategory: 'tea', description: '아이스 얼그레이는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '페퍼민트', engname: 'peppermint tea', link: '#none', allergens: [], image: "../images/menu-beverage45.png", category: 'beverage', subcategory: 'tea', description: '페퍼민트는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '아이스 페퍼민트', engname: 'iced peppermint tea', link: '#none', allergens: [], image: "../images/menu-beverage46.png", category: 'beverage', subcategory: 'tea', description: '아이스 페퍼민트는 은은한 향과 깔끔한 맛이 어우러진 티 음료입니다.' },
  { name: '얼 그레이 밀크티', engname: 'earl gray milk tea', link: '#none', allergens: ["우유"], image: "../images/menu-beverage47.png", category: 'beverage', subcategory: 'non-coffee', description: '얼 그레이 밀크티는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' },
  { name: '아이스 얼 그레이 밀크티', engname: 'iced earl gray milk tea', link: '#none', allergens: ["우유"], image: "../images/menu-beverage48.png", category: 'beverage', subcategory: 'non-coffee', description: '아이스 얼 그레이 밀크티는 달콤하고 부드러운 맛이 매력적인 논커피 음료입니다.' }
]

//입력 정보 받을 배열, 메뉴만 여러개 담을 수 있음.
let selected = {
  store: '',
  menu: {}, // 메뉴에 대한 정보를 받을 배열
  date: '',
  time: ''
};
/* active */
let statusBar = document.querySelectorAll('#status-bar > span');
/* 상단 바 초기값 */
statusBar[0].classList.add('active')

/* 상단 진행 상태(status-bar) 실시간 업데이트 하는 함수 */
function updateStatusBar() {
  /* 실시간으로 값이 입력되면 해당 값으로 변경 */
  document.getElementById('selected-store').innerText = selected.store || '매장 선택';
  document.getElementById('selected-menu').innerText = Object.keys(selected.menu).length > 0
  ? '메뉴 확인'
  : '메뉴 선택';
  document.getElementById('selected-date').innerText = (selected.date && selected.time)
    ? `${selected.date} ${selected.time}`
    : '일자 선택';
}


/* ########## 스토어 ########## */

/* 매장 정보 불러오기 */
let storeCardWrap = document.getElementById('storeCardWrap');


stores.forEach(store =>{
  let storeCard = document.createElement('div');
  storeCard.className = 'store-card';
  storeCard.innerHTML = `
  <img src=${store.image} alt="store-img">
  <div class="text-wrap">
  <h6>${store.name}</h6>
  <p>${store.address}</p>
  </div>
  `;
  //스토어 카드를 만들며 클릭 시, 매장명을 상단 타이틀로 보내기
  storeCard.addEventListener('click', () => {
    selectStore(store.name); 
  });
  storeCardWrap.appendChild(storeCard);
})

/* 스토어 정보를 상단 바에 넣을 함수, 이벤트 */
function selectStore(storeName) {
  selected.store = storeName;
  updateStatusBar();
}

/* 매장 선택 버튼 : 클릭 시 정보가 있으면 메뉴 선택으로 이동, 아닌 경우 매장 정보 선택하도록 이동  */
function confirmStore() {
  if (!selected.store) {
    alert("매장을 선택해주세요.");
    return;
  }
  document.getElementById('store-step').style.display = 'none';
  document.getElementById('menu-step').style.display = 'block';
  statusBar.forEach(btn => {
    btn.classList.remove('active')
  })
  statusBar[1].classList.add('active')
}

/* ########## 메뉴 ########## */

/* 메뉴 정보 불러오기 */
let menuCardWrap = document.getElementById('menuCardWrap');

/* 메뉴 불러오는데, 전달된 메뉴 배열로 생성  */
function renderMenus(menusToRender) {
  menuCardWrap.innerHTML = ''; // 기존 메뉴 지우기
  //받은 배열로 메뉴 생성
  menusToRender.forEach(menu => {
    let menuCard = document.createElement('div');
    menuCard.className = 'menu-card';
    menuCard.innerHTML = `
      <img src="${menu.image}" alt="menu-img">
      <div class="text-wrap">
        <h6>${menu.name}</h6>
        <div class="btn-wrap">
          <button class="cart-btn">담기</button>
          <button class="info-btn">상세정보</button>
        </div>
      </div>
    `;
    // 담기 버튼 클릭 시 메뉴 담기
    let cartBtn = menuCard.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => {
      addMenu(menu.name); 
    });
    //상세정보 클릭 시 메뉴 정보 전달
    let infoBtn = menuCard.querySelector('.info-btn');
    infoBtn.addEventListener('click', (e) => {
      showPopup(menu, e.currentTarget.closest('.menu-card'));
      /* closest : 해당 요소가 속한 전체의 요소 */
    });
    menuCardWrap.appendChild(menuCard);
    });
}

/* 메뉴를 장바구니에 담아주며, 중복해서 담을 수 있도록 하는 함수 */
function addMenu(menuName) {
  if (selected.menu[menuName]) {
    selected.menu[menuName]++;
  } else {
    selected.menu[menuName] = 1;
  }
  updateStatusBar();
  renderMenuCart();
}

/* 클릭한 메뉴 장바구니에 담아 화면에 출력함 */

function renderMenuCart() {
  let container = document.getElementById('menu-cart');
  container.innerHTML = '';
  for (let [item, count] of Object.entries(selected.menu)) {
    container.innerHTML += `
      <div class="cart-item">
        <p>${item} </p>
        <div class="cart-btn-wrap">
          <button onclick="removeMenu('${item}')">-</button>
          ${count} 
          <button onclick="addMenu('${item}')">+</button>
        </div>
      </div>
    `;
  }
}

/* 장바구니에 담긴 메뉴 중 - 클릭 시 수량을 하나 줄임 */
function removeMenu(menuName) {
  if (selected.menu[menuName]) {
    selected.menu[menuName]--;
    if (selected.menu[menuName] <= 0) delete selected.menu[menuName];
  }
  updateStatusBar();
  renderMenuCart();
}

renderMenus(menus); // 초기 전체 렌더링

/* 카테고리 필터 버튼을 클릭하면 해당 카테고리 배열 만들기 */
document.querySelectorAll('#category-filter button').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    // active 클래스 관리
    document.querySelectorAll('#category-filter button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 메뉴 필터링
    let filteredMenus = category === 'all'
      ? menus
      : menus.filter(menu => menu.category === category);

    renderMenus(filteredMenus);
  });
});

/* 확인 필요 */
/* 상세 정보 클릭시 열릴 팝업창 함수 */

function showPopup(menu, cardElement) {
  let popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-btn">&times;</span>
      <h2>${menu.name}</h2>
      <h3>${menu.engname}</h3>
      <img src="${menu.image}" alt="${menu.name}" />
      <p>${menu.description}</p>
      ${menu.allergens.length
        ? `<p><strong>알레르기 정보</strong> ${menu.allergens.join(', ')}</p>`
        : `<p><strong>알레르기 정보</strong> 없음</p>`}
    </div>
  `;

  menuCardWrap.appendChild(popup);

  // 버튼을 누른 카드 위치 기준으로 팝업 위치 설정
  let rect = cardElement.getBoundingClientRect();
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  let top = rect.top + scrollTop + rect.height / 2;

  popup.style.position = 'absolute';
  popup.style.top = `${top}px`;
  popup.style.left = `50%`;
  popup.style.transform = 'translate(-50%, -50%)';

  // 닫기 이벤트
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.remove();
  });
  popup.querySelector('.close-btn').addEventListener('click', () => {
    popup.remove();
  });
}

/* 장바구니에 담긴 메뉴 중 + 클릭 시 수량을 하나씩 늘리는 역활과 장바구니에 메뉴를 담고 다음단계로 이동할 수 있도록 하는 함수 */
function confirmMenu() {
  if (Object.keys(selected.menu).length === 0) {
    alert("메뉴를 하나 이상 선택해주세요.");
    return;
  }
  document.getElementById('menu-step').style.display = 'none';
  document.getElementById('date-step').style.display = 'block';
    statusBar.forEach(btn => {
    btn.classList.remove('active')
  })
  statusBar[2].classList.add('active')

  //장바구니에 담긴 메뉴 정보를 보여줌
  renderSelectedMenuSummary();
}

/* 장바구니에 담겼던 메뉴를 한번 더 HTML에출력해줌 */
function renderSelectedMenuSummary() {
  let container = document.getElementById('selected-menu-summary');
  container.innerHTML = '<h6>선택한 메뉴</h6>';

  if (Object.keys(selected.menu).length === 0) {
    container.innerHTML += '없음';
    return;
  }

  for (let [item, count] of Object.entries(selected.menu)) {
    container.innerHTML += `<p>${item} : ${count}개</p>`;
  }
}

/* 일자 선택에서 일자가 재대로 입력 했는지 확인하고 일자값이 반환되지 않는 경우 경고창 띄움 */
function submitReservation() {
  // selected.date, selected.time은 이미 버튼 클릭 시 세팅됨
  if (!selected.date || !selected.time) {
    alert("날짜와 시간을 입력해주세요.");
    return;
  }

  updateStatusBar();

  let menuSummary = Object.entries(selected.menu)
    .map(([item, count]) => `${item} - ${count}개`).join(', ');

  alert(`예약 완료!\n\n매장: ${selected.store}\n메뉴: ${menuSummary}\n날짜: ${selected.date} ${selected.time}\n\n 결제 페이지로 이동합니다.`);
  // 현재 창 새로고침
  location.reload();
}

/* 날짜 및 시간 버튼 생성 */
let dateList = document.querySelector('#dateSwiper > .swiper-wrapper');
let timeList = document.getElementById('time-list');
let menuSummary = document.getElementById('menu-summary');

//실시간 날짜 정보 반영 2주간
let dates = [];
let today = new Date();
let dayNames = ['일', '월', '화', '수', '목', '금', '토'];

for (let i = 0; i < 14; i++) {
  let date = new Date(today);
  date.setDate(today.getDate() + i);

  let yyyy = date.getFullYear();
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let dd = String(date.getDate()).padStart(2, '0');
  let day = dayNames[date.getDay()];

  dates.push({
    date: `${yyyy}-${mm}-${dd}`,
    label: `${mm}/${dd}<br>${day}요일`
  });
}

// 시간 정보 클릭하면 반영하도록
const times = ['11:00~14:00', '14:00~17:00', '17:00~20:00'];

let selectedDate = '';
let selectedTime = '';

dates.forEach(({ date, label }) => {
  let btn = document.createElement('div');
  btn.className='swiper-slide';
  btn.innerHTML = label;
  btn.onclick = () => {
    selected.date = date;
    updateStatusBar();
  };
  dateList.appendChild(btn);
});

times.forEach(time => {
  let btn = document.createElement('button');
  btn.innerText = time;
  btn.onclick = () => {
    selected.time = time;
    updateStatusBar();
  };
  timeList.appendChild(btn);
});


/* 날짜에 대한 스크롤 스와이퍼 */
var dateSwiper = new Swiper(".date-swiper", {
    slidesPerView: "auto", 
    spaceBetween: 16, 
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true, 
    },
    freeMode: true,
  });

  /* 버튼 클릭시 class 추가해서 배경 색 지정 */
  let dateBtns = document.querySelectorAll('.swiper-slide');
  let timeBtns = document.querySelectorAll('#time-list button');
  dateBtns.forEach((date,idx) => {
    date.addEventListener('click', () =>{
      dateBtns.forEach(dates => 
        {dates.classList.remove('click')
      });
      date.classList.add('click')
    })
  })
  timeBtns.forEach((time,idx) => {
    time.addEventListener('click', () =>{
      timeBtns.forEach(times => 
        {times.classList.remove('click')
      });
      time.classList.add('click')
    })
  })