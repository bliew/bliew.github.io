const buttons = document.querySelectorAll('.tabs button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabId = button.textContent.toLowerCase();
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
