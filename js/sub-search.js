function enterInput (event, text){
  event.preventDefault(); // a 태그의 기본 동작(페이지 이동) 막기
    const input = document.getElementById("sideSearchInput");
    input.value = text;
  }
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("sideSearchInput");
  const button = document.getElementById("sideSearchBtn");

  //../html/sub-search.html여기로 검색어인 keyword를 담아서 이동!
  function goToSearchPage() {
    const keyword = input.value.trim();
    if (keyword) {
      window.location.href = `/Knotted/html/sub-search.html?keyword=${encodeURIComponent(keyword)}`;
    }
  }

  if (input && button) {
    //검색 버튼 클릭하거나 엔터 입력 
    button.addEventListener("click", goToSearchPage);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        goToSearchPage();
      }
    });
  }

  // 검색 결과 페이지에서 keyword 추출
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("keyword")?.trim();

  const title = document.getElementById("searchTitle");
  const resultBox = document.getElementById("searchResultsBox");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  const allData = [
    ...(window.menus || []),
    ...(window.products || [])
  ];

  if (title && resultBox && keyword !== null) {
    document.title = `"${keyword}" 검색 결과`;
    title.innerHTML = `" <span class="highlight">${keyword}</span> "에 대한 검색 결과`;

    // 키워드 포함 항목(데이터) 필터링
    // 서브-온라인샵.JS, 서브-메뉴리스트.JS에서 배열 가지고 옴.
    // 메뉴, 제품 배열에서 name이나 engname이 키워드에 포함되면 그 값 가져옴
    const matched = allData.filter(item => {
      const name = item.name || "";
      const engname = item.engname || "";
      return (
        name.includes(keyword) ||
        engname.includes(keyword)
      );
    });

    if (matched.length === 0) {
      resultBox.innerHTML = `<p class="no-result">검색 결과가 없습니다.</p>`;
      loadMoreBtn.style.display = "none";
      return;
    }

    //결과 출력 !
    const ITEMS_PER_PAGE = 15;
    let currentIndex = 0;

    function renderItems() {
      const slice = matched.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);
      const html = slice.map(item => `
        <li>
          <a href="${item.link || '#'}">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <strong>${item.name}</strong>
            </div>
          </a>
        </li>
      `).join("");

      // 처음 렌더링이면 새로 쓰기, 이후면 추가
      if (currentIndex === 0) {
        resultBox.innerHTML = `<ul class="result-list">${html}</ul>`;
      } else {
        const ul = resultBox.querySelector("ul.result-list");
        ul.insertAdjacentHTML("beforeend", html);
      }

      currentIndex += ITEMS_PER_PAGE;

      // 더 보여줄 아이템 있으면 버튼 보이기, 없으면 숨기기
      if (currentIndex < matched.length) {
        loadMoreBtn.style.display = "block";
      } else {
        loadMoreBtn.style.display = "none";
      }
    }

    // 초기 15개 렌더링
    renderItems();

    loadMoreBtn.addEventListener("click", () => {
      renderItems();
    });
  }
});




