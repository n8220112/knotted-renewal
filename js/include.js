let basePath = location.pathname.includes('/html/') ? '../html/' : 'html/';

fetch(basePath + 'header.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.header-include').innerHTML = data;
  /* ~~~~~~~~~~ haeder script ~~~~~~~~~~ */
  // 서브메뉴, 사이드 메뉴 열고 닫기
  const menuBtn = document.querySelector('.menu-box'); 
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-box');
  const loginBtn = document.getElementById('loginBtn');
  
  const menuItems = sideMenu.querySelectorAll('nav > ul > li > a');
  const submenus = sideMenu.querySelectorAll('nav > ul > li > ul.submenu');

  // 사이드 메뉴 열기
  menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('on');
  });

  // 닫기 버튼 클릭 시 닫기
  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('on');
    submenus.forEach(submenu => submenu.classList.remove('on'));
  });

  // 로그인 버튼 클릭 시 사이드 메뉴 열고 서브메뉴 모두 열기
  if (loginBtn) {
      loginBtn.addEventListener('click', (e) => {
        // 기본 이동 동작은 유지하거나 필요하면 막고 싶으면 e.preventDefault() 사용 가능
        sideMenu.classList.remove('on'); // 사이드 메뉴 닫기
        submenus.forEach(submenu => submenu.classList.remove('on')); // 서브메뉴 모두 닫기
      });
    }

  // 메뉴 리스트 클릭 → 해당 서브메뉴 토글, 나머지 닫기, 사이드메뉴는 닫지 않음
  menuItems.forEach((menuItem, idx) => {
    menuItem.addEventListener('click', (e) => {
      e.preventDefault();

      const submenu = submenus[idx];
      if (!submenu) return;

      if (submenu.classList.contains('on')) {
        // 이미 열려있으면 닫기
        submenu.classList.remove('on');
      } else {
        // 모두 닫고 클릭한 것만 열기
        submenus.forEach(sm => sm.classList.remove('on'));
        submenu.classList.add('on');
      }
    });
  });

  // 서브메뉴 a 클릭 시 사이드 메뉴 닫기
  submenus.forEach(submenu => {
    submenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        sideMenu.classList.remove('on');
        submenus.forEach(s => s.classList.remove('on'));
      });
    });
  });
});
/* footer */
fetch(basePath + 'footer.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.footer-include').innerHTML = data;
  /* ~~~~~~~~~~ footer script ~~~~~~~~~~ */
  
});
/* top */
fetch(basePath + 'top.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.top-include').innerHTML = data;
  /* ~~~~~~~~~~ footer script ~~~~~~~~~~ */
  
});
