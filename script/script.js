const loadingPage = document.getElementById('loading-page');
const loadingBar = document.querySelector('.loading-bar');
const loadingText = document.querySelector('.load-text');
const loadingImage = document.querySelector('.loading-image img');

// 모든 이미지가 로드되었는지 확인
const waitForImages = () => {
  return new Promise((resolve) => {
    const images = document.querySelectorAll('img'); // 페이지 내 모든 이미지 선택
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === images.length) resolve();
        });
        img.addEventListener('error', () => {
          loadedCount++;
          if (loadedCount === images.length) resolve();
        });
      }
    });

    if (loadedCount === images.length) resolve(); // 이미 모든 이미지가 로드된 경우
  });
};

window.onload = async () => {
  await waitForImages(); // 모든 이미지가 로드될 때까지 대기

  // 로딩 바가 100%로 채워지는 애니메이션
  loadingBar.style.width = '100%';

  setTimeout(() => {
    // 로딩 이미지 축소 및 이동
    loadingImage.style.transform = 'scale(0.6) translate(-10%, 10%)';

    // 로딩 텍스트 변경
    loadingText.innerHTML = `
      포트폴리오가 도착했습니다!<br>
      <i>본 사이트는 1920x1080 해상도에 최적화되어 있습니다.</i>
    `;

    setTimeout(() => {
      // 로딩 이미지 날아가는 효과
      loadingImage.style.transform = 'scale(0.6) translate(135%, -135%)';

      setTimeout(() => {
        // 로딩 페이지를 서서히 사라지게 하기
        loadingPage.style.opacity = '0';

        setTimeout(() => {
          // 완전히 사라진 후 로딩 페이지 제거
          loadingPage.style.display = 'none';
        }, 1200); // opacity 애니메이션 완료 후
      }, 800); // 이미지 날아가는 애니메이션 완료 후
    }, 900); // 텍스트 변경 완료 후
  }, 1000); // 로딩 바 100% 채운 후
};


/* 메인 이미지 */
const main_photo = document.getElementById('main-photo');
const main_report = document.getElementById('main-report'); 

/* 모달 */
const modal = document.getElementById('modal');
const close_modal = document.getElementById('close-modal');

/* 메인프로필 페이지태그 */
const page_tag_01 = document.querySelector('.main_page_tag_01');
const page_tag_02 = document.querySelector('.main_page_tag_02');

main_photo.addEventListener('click',function(){
  main_report.classList.add('active');
  modal.classList.add('active');
  main_page_01.style.display = 'block';
  main_page_02.style.display = 'none';
  page_tag_01.style.display ='flex';
})

/* 마우스 커서 옵션 */ 
main_photo.addEventListener('mouseenter', function () {
  main_photo.style.cursor = "url('images/zoom_cursor.png'), auto"; 
});

main_photo.addEventListener('mouseleave', function () {
  main_photo.style.cursor = "auto";
});

page_tag_01.addEventListener('mouseenter', function () {
  page_tag_01.style.cursor = "url('images/hand_cursor.png'), auto"; 
});

page_tag_01.addEventListener('mouseleave', function () {
  page_tag_01.style.cursor = "auto";
});

page_tag_02.addEventListener('mouseenter', function () {
  page_tag_02.style.cursor = "url('images/hand_cursor.png'), auto"; 
});

page_tag_02.addEventListener('mouseleave', function () {
  page_tag_02.style.cursor = "auto";
});

/* 모달창 옵션 */ 
function closeModal() {
  modal.classList.remove('active');
  main_report.classList.remove('active')
  report_photo.style.display = `flex`
  remain_page.style.display = 'none';
  before_photo_modal.classList.remove('active');
  before_photo2_modal.classList.remove('active');
  before_img_modal_01.classList.remove('active');
  after_img_modal_01.classList.remove('active');
  before_img_modal_02.classList.remove('active');
  after_img_modal_02.classList.remove('active');
  before_img_modal_03.classList.remove('active');
  after_img_modal_03.classList.remove('active');
  before_img_modal_04.classList.remove('active');
  after_img_modal_04.classList.remove('active');
  before_img_modal_05.classList.remove('active');
  after_img_modal_05.classList.remove('active');
  before_img_modal_06.classList.remove('active');
  after_img_modal_06.classList.remove('active');
  before_img_modal_07.classList.remove('active');
  after_img_modal_07.classList.remove('active');
  detail_img_modal_01.classList.remove('active');
  detail_img_modal_02.classList.remove('active');
  detail_img_modal_03.classList.remove('active');
  detail_img_modal_04.classList.remove('active');
  detail_img_modal_05.classList.remove('active');
  responsive_img_modal_01.classList.remove('active');
  responsive_img_modal_02.classList.remove('active');
  responsive_img_modal_03.classList.remove('active');
  responsive_img_modal_04.classList.remove('active');
  responsive_img_modal_05.classList.remove('active');
  responsive_img_modal_06.classList.remove('active');
  file02_before_main_img_modal_01.classList.remove('active');
  file02_after_main_img_modal_01.classList.remove('active');
  file02_after_main_img_modal_02.classList.remove('active');
  file02_after_main_img_modal_03.classList.remove('active');
  file02_after_main_img_modal_04.classList.remove('active');
  file02_after_main_img_modal_05.classList.remove('active');
  file02_after_main_img_modal_06.classList.remove('active');
  file02_after_sub01_img_modal_01.classList.remove('active');
  file02_after_sub02_img_modal_01.classList.remove('active');
  file02_after_sub03_img_modal_01.classList.remove('active');
  file02_after_sub04_img_modal_01.classList.remove('active');
  file02_after_sub05_img_modal_01.classList.remove('active');
  file02_after_sub06_img_modal_01.classList.remove('active');
  file02_after_etc01_img_modal_01.classList.remove('active');
  file02_after_etc01_img_modal_02.classList.remove('active');
  file02_after_etc01_img_modal_03.classList.remove('active');
  file02_after_etc01_img_modal_04.classList.remove('active');
  file02_after_etc02_img_modal_01.classList.remove('active');
  file02_after_etc02_img_modal_02.classList.remove('active');
  file02_after_etc02_img_modal_03.classList.remove('active');
  ing_project_modal.classList.remove('active');
}

close_modal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') { 
    closeModal();
  }
});


// 프로필 
const profile_name = document.getElementById('profile-name');

profile_name.addEventListener('mouseenter',function(){
  profile_name.textContent=`Heojung`;
  profile_name.style.textDecoration =`underline`
})
profile_name.addEventListener('mouseleave',function(){
  profile_name.textContent=`허정`;
  profile_name.style.textDecoration =`none`
})

const report_photo = document.getElementById('report-photo');

report_photo.addEventListener('click',function(){
  report_photo.style.display = `none`
})

report_photo.addEventListener('mouseenter',function(){
  report_photo.style.cursor = "url('./images/hand_cursor.png'), auto"; 
})
report_photo.addEventListener('mouseleave',function(){
  report_photo.style.cursor = "auto"; 
})

// 메인 페이지태그 전환
const main_page_01 = document.getElementById('report-page-01')
const main_page_02 = document.getElementById('report-page-02')
const remain_page = document.getElementById('remain-page');

page_tag_01.addEventListener('click',function(){
  main_page_01.style.display = 'block';
  main_page_02.style.display = 'none';
});
page_tag_02.addEventListener('click',function(){
  main_page_01.style.display = 'none';
  main_page_02.style.display = 'block';
  page_tag_01.style.display ='none';
  remain_page.style.display = 'block';
});

remain_page.addEventListener('click',function(){
  main_page_01.style.display = 'block';
  main_page_02.style.display = 'none';
  page_tag_01.style.display ='flex';
  remain_page.style.display = 'none';
});



//  2페이지 스킬 
document.addEventListener('DOMContentLoaded', () => {
  const skills = [
    {
      id: 'skill01',
      detailId: 'skill01detail',
      title: 'HTML5',
      level: 'A'
    },
    {
      id: 'skill02',
      detailId: 'skill02detail',
      title: 'CSS3',
      level: 'A'
    },
    {
      id: 'skill03',
      detailId: 'skill03detail',
      title: 'JavaScript',
      level: 'B+'
    },
    {
      id: 'skill04',
      detailId: 'skill04detail',
      title: 'React',
      level: 'B+'
    },
    {
      id: 'skill05',
      detailId: 'skill05detail',
      title: 'Photoshop',
      level: 'A+'
    },
    {
      id: 'skill06',
      detailId: 'skill06detail',
      title: 'Figma',
      level: 'A'
    },
    {
      id: 'skill07',
      detailId: 'skill07detail',
      title: 'PowerPoint',
      level: 'B++'
    },
    {
      id: 'skill08',
      detailId: 'skill08detail',
      title: 'ChatGPT',
      level: 'A'
    }
  ];

  const skill_modal_close = document.querySelectorAll('.skill-modal-close');
  const skill_modal_back = document.querySelector('.skill-modal-back'); 
  const skill_image_boxes = document.querySelectorAll('.skill-image-box');
  const skill_info = document.querySelectorAll('.skill-info');
  const skill_rating = document.querySelectorAll('.skill-rating');

  const closeModal = () => {
    skill_modal_back.classList.remove('active');
    skills.forEach(({ detailId }) => {
      const detail = document.getElementById(detailId);
      if (detail) {
        detail.classList.remove('active');
      }
    });
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  skill_modal_close.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
      const skillData = skills[index]; 
      const skillItem = document.getElementById(skillData.id);
      const skillDetail = document.getElementById(skillData.detailId);

      closeModal();

      if (skillItem) {
        const titleElement = skillItem.querySelector('.title');
        if (titleElement) {
          titleElement.textContent = skillData.title;
        }

        const levelElement = skillItem.querySelector('.level h3');
        if (levelElement) {
          levelElement.textContent = skillData.level;
        }

        const skillImgElement = skillItem.querySelector('.skill-img img');
        if (skillImgElement) {
          skillImgElement.classList.remove('visible'); 
          void skillImgElement.offsetWidth;
          skillImgElement.classList.add('visible');
        }
      }
    });
  });

  skills.forEach((skill) => {
    const skillElement = document.getElementById(skill.id);
    const skillDetailElement = document.getElementById(skill.detailId);

    if (skillElement && skillDetailElement) {
      skillElement.addEventListener('click', () => {
        skills.forEach(({ detailId }) => {
          const detail = document.getElementById(detailId);
          if (detail) {
            detail.classList.remove('active');
          }
        });

        skillDetailElement.classList.add('active');
        skill_modal_back.classList.add('active');
      });
    }
  });

  skill_image_boxes.forEach((imagebox) => {
    imagebox.addEventListener('mouseenter', () => {
      imagebox.classList.add('visible');
    });
  });

  skill_info.forEach((info) => {
    info.addEventListener('mouseenter', () => {
      info.classList.add('visible');
    });
  });

  skill_rating.forEach((rating) => {
    rating.addEventListener('mouseenter', () => {
      rating.classList.add('visible');
    });
});
})

function copy() {
  // 복사문구값 가져오기
  const copyTxt = document.getElementById("copyTxt");

  var range = document.createRange();
  range.selectNode(copyTxt); // h3 태그 전체 텍스트 선택

  // 선택 범위 설정
  window.getSelection().removeAllRanges(); // 기존 선택 범위 제거
  window.getSelection().addRange(range);  // 새 범위 추가

  // 복사
  navigator.clipboard.writeText(copyTxt.textContent || copyTxt.innerText)
    .then(function() {
      // 복사 성공
      alert("복사되었습니다.");
    })
    .catch(function(err) {
      // 복사 실패
      alert("복사 실패: " + err);
    });

  // 선택 범위 초기화
  window.getSelection().removeAllRanges();

}

// 첫 번째 책 처리
const pages = Array.from(document.querySelectorAll(".book .page"));
const book = document.querySelector(".book");
let leftStack = [];
let rightStack = Array.from(pages).reverse();

// 두 번째 책 처리
const pages2 = Array.from(document.querySelectorAll(".book2 .page"));
const book2 = document.querySelector(".book2");
let leftStack2 = [];
let rightStack2 = Array.from(pages2).reverse();

// 초기 상태 업데이트
updatePagesDepth(pages, rightStack); // 첫 번째 책
updatePagesDepth(pages2, rightStack2); // 두 번째 책

// 첫 번째 책 클릭 이벤트
for (const page of pages) {
  page.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("flip")) {
      // 왼쪽 스택에서 페이지를 넘김
      const page = leftStack.pop();
      rightStack.push(page);
      page.classList.remove("flip");
      updatePagesDepth(pages, rightStack); // 첫 번째 책
      updatePageZIndex(page, "right", pages); 
    } else {
      // 오른쪽 스택에서 페이지를 넘김
      const page = rightStack.pop();
      leftStack.push(page);
      page.classList.add("flip");
      updatePagesDepth(pages, leftStack); // 첫 번째 책
      updatePageZIndex(page, "left", pages); 
    }
  });
}

// 두 번째 책 클릭 이벤트
for (const page of pages2) {
  page.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("flip")) {
      // 왼쪽 스택에서 페이지를 넘김
      const page = leftStack2.pop();
      rightStack2.push(page);
      page.classList.remove("flip");
      updatePagesDepth(pages2, rightStack2); // 두 번째 책
      updatePageZIndex(page, "right", pages2); 
    } else {
      // 오른쪽 스택에서 페이지를 넘김
      const page = rightStack2.pop();
      leftStack2.push(page);
      page.classList.add("flip");
      updatePagesDepth(pages2, leftStack2); // 두 번째 책
      updatePageZIndex(page, "left", pages2); 
    }
  });
}

// 공통 함수: 페이지 깊이 업데이트
function updatePagesDepth(pages, stack) {
  if (!stack) return; // stack이 undefined이면 함수 종료

  for (const [i, page] of stack.entries()) {
    if (stack === leftStack || stack === leftStack2) {
      page.style.transform = `rotateY(-180deg) translateZ(${-i}px)`;
      page.style.zIndex = pages.length - i; // 왼쪽 스택은 z-index 감소
    } else {
      page.style.transform = `rotateY(0) translateZ(${i}px)`;
      page.style.zIndex = pages.length - i; // 오른쪽 스택은 z-index 증가
    }
  }
}

// 페이지의 z-index 업데이트
function updatePageZIndex(page, stackSide, pages) {
  const side0 = page.querySelector(".side0");
  const side1 = page.querySelector(".side1");

  // 전환 효과: 페이드 아웃
  side0.style.transition = "opacity 0.5s";
  side1.style.transition = "opacity 0.5s";
  side0.style.opacity = "0.5";
  side1.style.opacity = "0.5";

  // 1초 후 z-index 변경 및 페이드 인
  setTimeout(() => {
    if (stackSide === "left") {
      side0.style.zIndex = "1";
      side1.style.zIndex = "2";
    } else {
      side0.style.zIndex = "2";
      side1.style.zIndex = "1";
    }
    // 전환 효과: 페이드 인
    side0.style.opacity = "1";
    side1.style.opacity = "1";
  }, 300); 

  // 클릭을 중지시키는 부분
  for (const page of pages) {
    const clickableElements = page.querySelectorAll(".clickable"); 
    for (const element of clickableElements) {
      element.addEventListener("click", function (e) {
        e.stopPropagation(); 
      });
    }
  }
}



const before_photo_modal = document.getElementById('before-photo-modal');
const before_photo_base = document.getElementById('before-photo-base');

const before_photo2_modal = document.getElementById('before-port02-photo-modal');
const before_photo2_base = document.getElementById('port02-base-img');

        
// 메인페이지 1-1
const before_img_01 = document.getElementById('before_img_01');
const after_img_01 = document.getElementById('after_img_01');
const before_img_modal_01 = document.getElementById('before-img-modal-01');
const after_img_modal_01 = document.getElementById('after-img-modal-01');
const after_postit_01 = document.getElementById('after-postit-01');
const before_detail_01 = document.getElementById('detail-before-01');
const after_detail_01 = document.getElementById('detail-after-01');

// 메인페이지 1-2

const before_img_02 = document.getElementById('before_img_02');
const after_img_02 = document.getElementById('after_img_02');
const before_img_modal_02 = document.getElementById('before-img-modal-02');
const after_img_modal_02 = document.getElementById('after-img-modal-02');
const after_postit_02 = document.getElementById('after-postit-02');
const before_detail_02 = document.getElementById('detail-before-02');
const after_detail_02 = document.getElementById('detail-after-02');

// 서브페이지 1-1
const before_img_03 = document.getElementById('before_img_03');
const after_img_03 = document.getElementById('after_img_03');
const before_img_modal_03 = document.getElementById('before-img-modal-03');
const after_img_modal_03 = document.getElementById('after-img-modal-03');
const after_postit_03 = document.getElementById('after-postit-03');
const before_detail_03 = document.getElementById('detail-before-03');
const after_detail_03 = document.getElementById('detail-after-03');


// 서브페이지 1-2
const before_img_04 = document.getElementById('before_img_04');
const after_img_04 = document.getElementById('after_img_04');
const before_img_modal_04 = document.getElementById('before-img-modal-04');
const after_img_modal_04 = document.getElementById('after-img-modal-04');
const after_postit_04 = document.getElementById('after-postit-04');
const before_detail_04 = document.getElementById('detail-before-04');
const after_detail_04 = document.getElementById('detail-after-04');


// 서브페이지 2-1
const before_img_05 = document.getElementById('before_img_05');
const after_img_05 = document.getElementById('after_img_05');
const before_img_modal_05 = document.getElementById('before-img-modal-05');
const after_img_modal_05 = document.getElementById('after-img-modal-05');
const after_postit_05 = document.getElementById('after-postit-05');
const before_detail_05 = document.getElementById('detail-before-05');
const after_detail_05 = document.getElementById('detail-after-05');


// 서브페이지 2-2
const before_img_06 = document.getElementById('before_img_06');
const after_img_06 = document.getElementById('after_img_06');
const before_img_modal_06 = document.getElementById('before-img-modal-06');
const after_img_modal_06 = document.getElementById('after-img-modal-06');
const after_postit_06 = document.getElementById('after-postit-06');
const before_detail_06 = document.getElementById('detail-before-06');
const after_detail_06 = document.getElementById('detail-after-06');

// 서브페이지 3
const before_img_07 = document.getElementById('before_img_07');
const after_img_07 = document.getElementById('after_img_07');
const before_img_modal_07 = document.getElementById('before-img-modal-07');
const after_img_modal_07 = document.getElementById('after-img-modal-07');
const after_postit_07 = document.getElementById('after-postit-07');
const before_detail_07 = document.getElementById('detail-before-07');
const after_detail_07 = document.getElementById('detail-after-07');


// 디테일 페이지
const detail_img_01 = document.getElementById('detail-01');
const detail_img_modal_01 = document.getElementById('detail-img-modal-01');
const detail_img_02 = document.getElementById('detail-02');
const detail_img_modal_02 = document.getElementById('detail-img-modal-02');
const detail_img_03 = document.getElementById('detail-03');
const detail_img_modal_03 = document.getElementById('detail-img-modal-03');
const detail_img_04 = document.getElementById('detail-04');
const detail_img_modal_04 = document.getElementById('detail-img-modal-04');
const detail_img_05 = document.getElementById('detail-05');
const detail_img_modal_05 = document.getElementById('detail-img-modal-05');


// 반응형 페이지
const responsive_img_01 = document.getElementById('responsive-01');
const responsive_img_modal_01 = document.getElementById('responsive-img-modal-01');
const responsive_img_02 = document.getElementById('responsive-02');
const responsive_img_modal_02 = document.getElementById('responsive-img-modal-02');
const responsive_img_03 = document.getElementById('responsive-03');
const responsive_img_modal_03 = document.getElementById('responsive-img-modal-03');
const responsive_img_04 = document.getElementById('responsive-04');
const responsive_img_modal_04 = document.getElementById('responsive-img-modal-04');
const responsive_img_05 = document.getElementById('responsive-05');
const responsive_img_modal_05 = document.getElementById('responsive-img-modal-05');
const responsive_img_06 = document.getElementById('responsive-06');
const responsive_img_modal_06 = document.getElementById('responsive-img-modal-06');

// 2번 포폴 메인페이지
const file02_before_main_img_01 = document.getElementById('file02-before-main-img-01');
const file02_before_main_img_modal_01 = document.getElementById('file02-before-main-img-modal-01');
const file02_after_main_img_01 = document.getElementById('file02-after-main-img-01');
const file02_after_main_img_02 = document.getElementById('file02-after-main-img-02');
const file02_after_main_img_03 = document.getElementById('file02-after-main-img-03');
const file02_after_main_img_04 = document.getElementById('file02-after-main-img-04');
const file02_after_main_img_05 = document.getElementById('file02-after-main-img-05');
const file02_after_main_img_06 = document.getElementById('file02-after-main-img-06');
const file02_after_main_detail_01 = document.getElementById('file02-after-main-detail-01');
const file02_after_main_postit_01 = document.getElementById('file02-after-main-postit-01');
const file02_after_main_img_modal_01 = document.getElementById('file02-after-main-img-modal-01');
const file02_after_main_img_modal_02 = document.getElementById('file02-after-main-img-modal-02');
const file02_after_main_img_modal_03 = document.getElementById('file02-after-main-img-modal-03');
const file02_after_main_img_modal_04 = document.getElementById('file02-after-main-img-modal-04');
const file02_after_main_img_modal_05 = document.getElementById('file02-after-main-img-modal-05');
const file02_after_main_img_modal_06 = document.getElementById('file02-after-main-img-modal-06');

const file02_after_sub01_img_01 = document.getElementById('file02-after-sub01-img-01');
const file02_after_sub01_img_modal_01 = document.getElementById('file02-after-sub01-img-modal-01');
const file02_after_sub02_img_01 = document.getElementById('file02-after-sub02-img-01');
const file02_after_sub02_img_modal_01 = document.getElementById('file02-after-sub02-img-modal-01');
const file02_after_sub03_img_01 = document.getElementById('file02-after-sub03-img-01');
const file02_after_sub03_img_modal_01 = document.getElementById('file02-after-sub03-img-modal-01');
const file02_after_sub04_img_01 = document.getElementById('file02-after-sub04-img-01');
const file02_after_sub04_img_modal_01 = document.getElementById('file02-after-sub04-img-modal-01');
const file02_after_sub05_img_01 = document.getElementById('file02-after-sub05-img-01');
const file02_after_sub05_img_modal_01 = document.getElementById('file02-after-sub05-img-modal-01');
const file02_after_sub06_img_01 = document.getElementById('file02-after-sub06-img-01');
const file02_after_sub06_img_modal_01 = document.getElementById('file02-after-sub06-img-modal-01');
const file02_after_etc01_img_01 = document.getElementById('file02-after-etc01-img-01');
const file02_after_etc01_img_modal_01 = document.getElementById('file02-after-etc01-img-modal-01');
const file02_after_etc01_img_02 = document.getElementById('file02-after-etc01-img-02');
const file02_after_etc01_img_modal_02 = document.getElementById('file02-after-etc01-img-modal-02');
const file02_after_etc01_img_03 = document.getElementById('file02-after-etc01-img-03');
const file02_after_etc01_img_modal_03 = document.getElementById('file02-after-etc01-img-modal-03');
const file02_after_etc01_img_04 = document.getElementById('file02-after-etc01-img-04');
const file02_after_etc01_img_modal_04 = document.getElementById('file02-after-etc01-img-modal-04');
const file02_after_etc02_img_01 = document.getElementById('file02-after-etc02-img-01');
const file02_after_etc02_img_modal_01 = document.getElementById('file02-after-etc02-img-modal-01');
const file02_after_etc02_img_02 = document.getElementById('file02-after-etc02-img-02');
const file02_after_etc02_img_modal_02 = document.getElementById('file02-after-etc02-img-modal-02');
const file02_after_etc02_img_03 = document.getElementById('file02-after-etc02-img-03');
const file02_after_etc02_img_modal_03 = document.getElementById('file02-after-etc02-img-modal-03');

document.addEventListener('DOMContentLoaded', function () {

  before_photo_base.addEventListener('click',function(){
    modal.classList.add('active');
    before_photo_modal.classList.add('active');
  })

  before_photo2_base.addEventListener('click',function(){
    modal.classList.add('active');
    before_photo2_modal.classList.add('active');
  })


  before_img_01.addEventListener('click',function(){
    modal.classList.add('active');
    before_img_modal_01.classList.add('active');
    after_detail_01.style.display = 'block';
    before_img_01.classList.add = 'no_hover';
    after_img_01.style.display = 'flex';
    after_img_01.classList.add('active');
    after_postit_01.style.display = 'flex';
    after_postit_01.classList.add('active');
    })

  after_img_01.addEventListener('click',function(){
    modal.classList.add('active');
    after_img_modal_01.classList.add('active');
  })

  after_img_01.addEventListener('click',function(){
    modal.classList.add('active');
    after_img_modal_01.classList.add('active');
  })


  before_img_02.addEventListener('click',function(){
    modal.classList.add('active');
    before_img_modal_02.classList.add('active');
    after_detail_02.style.display = 'block';
    before_img_02.classList.add = 'no_hover';
    after_img_02.style.display = 'flex';
    after_img_02.classList.add('active');
    after_postit_02.style.display = 'flex';
    after_postit_02.classList.add('active');
    })
  
    after_img_02.addEventListener('click',function(){
      modal.classList.add('active');
      after_img_modal_02.classList.add('active');
    })

  before_img_03.addEventListener('click',function(){
    modal.classList.add('active');
    before_img_modal_03.classList.add('active');
    after_detail_03.style.display = 'block';
    before_img_03.classList.add = 'no_hover';
    after_img_03.style.display = 'flex';
    after_img_03.classList.add('active');
    after_postit_03.style.display = 'flex';
    after_postit_03.classList.add('active');
    })

  after_img_03.addEventListener('click',function(){
    modal.classList.add('active');
    after_img_modal_03.classList.add('active');
  })

  before_img_04.addEventListener('click',function(){
    modal.classList.add('active');
    before_img_modal_04.classList.add('active');
    after_detail_04.style.display = 'block';
    before_img_04.classList.add = 'no_hover';
    after_img_04.style.display = 'flex';
    after_img_04.classList.add('active');
    after_postit_04.style.display = 'flex';
    after_postit_04.classList.add('active');
    })
  
    after_img_04.addEventListener('click',function(){
      modal.classList.add('active');
      after_img_modal_04.classList.add('active');
    })

  before_img_05.addEventListener('click',function(){
    modal.classList.add('active');
    before_img_modal_05.classList.add('active');
    after_detail_05.style.display = 'block';
    before_img_05.classList.add = 'no_hover';
    after_img_05.style.display = 'flex';
    after_img_05.classList.add('active');
    after_postit_05.style.display = 'flex';
    after_postit_05.classList.add('active');
    })

  after_img_05.addEventListener('click',function(){
    modal.classList.add('active');
    after_img_modal_05.classList.add('active');
  })

  before_img_06.addEventListener('click',function(){
    modal.classList.add('active');
    before_img_modal_06.classList.add('active');
    after_detail_06.style.display = 'block';
    before_img_06.classList.add = 'no_hover';
    after_img_06.style.display = 'flex';
    after_img_06.classList.add('active');
    after_postit_06.style.display = 'flex';
    after_postit_06.classList.add('active');
    })
  
    after_img_06.addEventListener('click',function(){
      modal.classList.add('active');
      after_img_modal_06.classList.add('active');
    })

  before_img_07.addEventListener('click',function(){
    modal.classList.add('active');
    before_img_modal_07.classList.add('active');
    after_detail_07.style.display = 'block';
    before_img_07.classList.add = 'no_hover';
    after_img_07.style.display = 'flex';
    after_img_07.classList.add('active');
    after_postit_07.style.display = 'flex';
    after_postit_07.classList.add('active');
    })
  
    after_img_07.addEventListener('click',function(){
      modal.classList.add('active');
      after_img_modal_07.classList.add('active');
    })

    detail_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      detail_img_modal_01.classList.add('active');
    })
    detail_img_02.addEventListener('click',function(){
      modal.classList.add('active');
      detail_img_modal_02.classList.add('active');
    })
    detail_img_03.addEventListener('click',function(){
      modal.classList.add('active');
      detail_img_modal_03.classList.add('active');
    })
    detail_img_04.addEventListener('click',function(){
      modal.classList.add('active');
      detail_img_modal_04.classList.add('active');
    })
    detail_img_05.addEventListener('click',function(){
      modal.classList.add('active');
      detail_img_modal_05.classList.add('active');
    })

    responsive_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      responsive_img_modal_01.classList.add('active');
    })
    responsive_img_02.addEventListener('click',function(){
      modal.classList.add('active');
      responsive_img_modal_02.classList.add('active');
    })
    responsive_img_03.addEventListener('click',function(){
      modal.classList.add('active');
      responsive_img_modal_03.classList.add('active');
    })
    responsive_img_04.addEventListener('click',function(){
      modal.classList.add('active');
      responsive_img_modal_04.classList.add('active');
    })
    responsive_img_05.addEventListener('click',function(){
      modal.classList.add('active');
      responsive_img_modal_05.classList.add('active');
    })
    responsive_img_06.addEventListener('click',function(){
      modal.classList.add('active');
      responsive_img_modal_06.classList.add('active');
    })

    file02_before_main_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_before_main_img_modal_01.classList.add('active');
      file02_after_main_detail_01.style.display = 'block';
      file02_before_main_img_01.classList.add = 'no_hover';
      file02_after_main_img_01.style.display = 'flex';
      file02_after_main_img_01.classList.add('active');
      file02_after_main_postit_01.style.display = 'flex';
      file02_after_main_postit_01.classList.add('active');
    })
    file02_after_main_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_main_img_modal_01.classList.add('active');
    })
    file02_after_main_img_02.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_main_img_modal_02.classList.add('active');
    })
    file02_after_main_img_03.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_main_img_modal_03.classList.add('active');
    })
    file02_after_main_img_04.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_main_img_modal_04.classList.add('active');
    })
    file02_after_main_img_05.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_main_img_modal_05.classList.add('active');
    })
    file02_after_main_img_06.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_main_img_modal_06.classList.add('active');
    })
    file02_after_sub01_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_sub01_img_modal_01.classList.add('active');
    })
    file02_after_sub02_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_sub02_img_modal_01.classList.add('active');
    })
    file02_after_sub03_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_sub03_img_modal_01.classList.add('active');
    })
    file02_after_sub04_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_sub04_img_modal_01.classList.add('active');
    })
    file02_after_sub05_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_sub05_img_modal_01.classList.add('active');
    })
    file02_after_sub06_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_sub06_img_modal_01.classList.add('active');
    })
    file02_after_etc01_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_etc01_img_modal_01.classList.add('active');
    })
    file02_after_etc01_img_02.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_etc01_img_modal_02.classList.add('active');
    })
    file02_after_etc01_img_03.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_etc01_img_modal_03.classList.add('active');
    })
    file02_after_etc01_img_04.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_etc01_img_modal_04.classList.add('active');
    })
    file02_after_etc02_img_01.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_etc02_img_modal_01.classList.add('active');
    })
    file02_after_etc02_img_02.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_etc02_img_modal_02.classList.add('active');
    })
    file02_after_etc02_img_03.addEventListener('click',function(){
      modal.classList.add('active');
      file02_after_etc02_img_modal_03.classList.add('active');
    })
})

const complete_file_01 = document.getElementById('complete-01');
const stamp_01 = document.getElementById('file01-stamp');
const return_btn_01 = document.getElementById('return-btn-01');

const complete_file_02 = document.getElementById('complete-02');
const stamp_02 = document.getElementById('file02-stamp');
const return_btn_02 = document.getElementById('return-btn-02');

complete_file_01.addEventListener('click',function(){
  complete_file_01.style.display = 'none'
  stamp_01.style.display = 'flex'
  return_btn_01.style.display = 'flex'
})

complete_file_02.addEventListener('click',function(){
  complete_file_02.style.display = 'none'
  stamp_02.style.display = 'flex'
  return_btn_02.style.display = 'flex'
})

// return_btn_01 (첫 번째 책 처리)
return_btn_01.addEventListener("click", function () {
  let delay = 0;

  // 첫 번째 책의 leftStack 처리
  while (leftStack.length > 0) {
    const page = leftStack.pop();
    setTimeout(() => {
      page.classList.remove("flip");
      rightStack.push(page);
      updatePagesDepth(pages, rightStack); // 첫 번째 책의 페이지 업데이트
    }, delay);
    delay += 200;
  }

  // 스택 업데이트 후 reset 처리
  setTimeout(() => {
    // 첫 번째 책 스택 초기화
    leftStack = [];
    rightStack = Array.from(pages).reverse();

    updatePagesDepth(pages, rightStack); // 첫 번째 책 페이지 업데이트
    resetZIndexForAllPages(); // 모든 페이지의 z-index 리셋
    file01_back.classList.remove('active');
  }, delay);
});

// return_btn_02 (두 번째 책 처리)
return_btn_02.addEventListener("click", function () {
  let delay = 0;

  // 두 번째 책의 leftStack 처리
  while (leftStack2.length > 0) {
    const page = leftStack2.pop();
    setTimeout(() => {
      page.classList.remove("flip");
      rightStack2.push(page);
      updatePagesDepth(pages2, rightStack2); // 두 번째 책의 페이지 업데이트
    }, delay);
    delay += 200;
  }

  // 스택 업데이트 후 reset 처리
  setTimeout(() => {
    // 두 번째 책 스택 초기화
    leftStack2 = [];
    rightStack2 = Array.from(pages2).reverse();

    updatePagesDepth(pages2, rightStack2); // 두 번째 책 페이지 업데이트
    resetZIndexForAllPages(); // 모든 페이지의 z-index 리셋
    file02_back.classList.remove('active');
  }, delay);
});

// 페이지의 z-index 리셋 함수
function resetZIndexForAllPages() {
  // 첫 번째 책의 페이지들에 대해 z-index 리셋
  for (const page of pages) {
    const side0 = page.querySelector(".side0");
    const side1 = page.querySelector(".side1");
    if (side0 && side1) {
      side0.style.zIndex = "";
      side1.style.zIndex = "";
    }
  }

  // 두 번째 책의 페이지들에 대해 z-index 리셋
  for (const page of pages2) {
    const side0 = page.querySelector(".side0");
    const side1 = page.querySelector(".side1");
    if (side0 && side1) {
      side0.style.zIndex = "";
      side1.style.zIndex = "";
    }
  }

  // 버튼 및 스타일 업데이트
  return_btn_01.style.display = 'none';
  return_btn_02.style.display = 'none';
  portfolio_file_01.classList.remove('active');
  portfolio_file_02.classList.remove('active');
  complete_file_01.style.display = 'flex';
  complete_file_02.style.display = 'flex';
  stamp_01.style.display = 'none';
  stamp_02.style.display = 'none';
}


const file01_back = document.querySelector('.file01-back');
const file02_back = document.querySelector('.file02-back');


const portfolio_file_01 = document.querySelector('.portfolio-file-01');
portfolio_file_01.addEventListener('click',function(){
  portfolio_file_01.classList.add('active');
  portfolio_file_02.classList.remove('active');
  file01_back.classList.add('active');
  file02_back.classList.remove('active');
})

const portfolio_file_02 = document.querySelector('.portfolio-file-02');
portfolio_file_02.addEventListener('click',function(){
  portfolio_file_02.classList.add('active');
  portfolio_file_01.classList.remove('active');
  file02_back.classList.add('active');
  file01_back.classList.remove('active');
})

file01_back.addEventListener('click',function(){
  portfolio_file_01.classList.remove('active');
  file01_back.classList.remove('active');
  let delay = 0;

  while (leftStack.length > 0) {
    const page = leftStack.pop();
    setTimeout(() => {
      page.classList.remove("flip");
      rightStack.push(page);
      updatePagesDepth(pages, rightStack); 
    }, delay);
    delay += 200;
  }

  setTimeout(() => {
    leftStack = [];
    rightStack = Array.from(pages).reverse();

    updatePagesDepth(pages, rightStack); 
    resetZIndexForAllPages(); 
  }, delay);
})

file02_back.addEventListener('click',function(){
  portfolio_file_02.classList.remove('active');
  file02_back.classList.remove('active');
  let delay = 0;
  // 두 번째 책의 leftStack 처리
  while (leftStack2.length > 0) {
    const page = leftStack2.pop();
    setTimeout(() => {
      page.classList.remove("flip");
      rightStack2.push(page);
      updatePagesDepth(pages2, rightStack2); // 두 번째 책의 페이지 업데이트
    }, delay);
    delay += 200;
  }

  // 스택 업데이트 후 reset 처리
  setTimeout(() => {
    // 두 번째 책 스택 초기화
    leftStack2 = [];
    rightStack2 = Array.from(pages2).reverse();

    updatePagesDepth(pages2, rightStack2); // 두 번째 책 페이지 업데이트
    resetZIndexForAllPages(); // 모든 페이지의 z-index 리셋
  }, delay);
})

const ing_project = document.getElementById('ing-project');
const ing_project_modal = document.getElementById('ing-project-modal');


ing_project.addEventListener('click',function(){
  modal.classList.add('active');
  ing_project_modal.classList.add('active');
});
