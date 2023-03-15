/* 현재 시간을 알려준다. */
document.getElementById('time').innerHTML = new Date().toLocaleString()

/* GitHub, chatGPT, CBT 버튼을 눌렀을때 배경화면 색 변경 */
function btn1() {
  document.body.style.backgroundColor = 'green'
}

function btn2() {
  document.body.style.backgroundColor = 'lightblue'
}

function btn3() {
  document.body.style.backgroundColor = 'blue'
}
/* GitHub, chatGPT, CBT 버튼을 누르고 변경된 색을 원래있던 lightgreen 색으로 reset */
function reset() {
  document.body.style.backgroundColor = 'black'
}

/* index.html의 간단한 Tip */

function tip1() {
  document.getElementById('fig').src = 'img/tip1.png'
  document.getElementById('desc').innerHTML =
    '<b>How to make</b>는 구글에 How to make ~ 뒤에 궁금한 내용을 검색하면 만드는 방법이 나온다.'
}

function tip2() {
  document.getElementById('fig').src = 'img/tip2.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML 컬러코드</b>는 원하는 색상을 골라 컬러 코드를 얻어 올 수 있다.'
}

function tip3() {
  document.getElementById('fig').src = 'img/tip3.png'
  document.getElementById('desc').innerHTML =
    '<b>부트스트랩</b>은 버튼, 아이콘 등 여러 다양한 예쁜 모양으로 만들어진 것을 얻어 올수 있는 곳이다.'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}

/* 여기서 해결하고 싶은 곳 onmouseover로 이용해서 tip1 ~ tip3 위에 마우스 커서를
가져가면 이미지는 나오고 글도 잘 나온다. 하지만 이미지를 500px로 잡았기에 글이 아래있어
마우스 스크롤을 내려야 글이 보인다. 여기까지는 좋지만 마우스 스크롤을 내릴때 화면이 자꾸 위로 올라가려고한다.
이 문제 점을 해결하고싶습니다. */

/* project.html = Blog 한눈에 보기 3가지 정의 */

function explan1() {
  document.getElementById('desc').innerHTML =
    '<b>파이썬(Python)</b>은 객체 지향적이며, 인터프리터 방식으로 동작하는 고급 프로그래밍 언어입니다. 파이썬은 귀도 반 로섬(Guido van Rossum)이 개발하였으며, 1991년 처음 공개되었습니다. 파이썬은 무료이며, 오픈 소스로 개발되어 있어 자유롭게 사용, 수정, 배포가 가능합니다.'
}

function explan2() {
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 Hyper Text Markup Language의 약어로, 웹 페이지를 구성하는 마크업 언어 중 하나입니다. HTML은 웹 페이지의 구조와 콘텐츠를 정의하는 데 사용되며, 웹 브라우저가 이를 해석하여 화면에 표시합니다. HTML은 태그를 사용하여 문서 요소를 정의하고, 이러한 요소를 조합하여 웹 페이지를 구성합니다. HTML은 다른 웹 기술과 함께 사용되어 동적인 웹 페이지를 생성하고, 웹 사이트를 개발하는 데 필수적인 기술입니다.'
}

function explan3() {
  document.getElementById('desc').innerHTML =
    '<b>Git</b>은 소프트웨어 개발에서 버전 관리를 위한 분산 버전 관리 시스템입니다. Git은 소스 코드를 관리하고, 변경 이력을 추적하며, 다수의 개발자가 동시에 작업할 수 있도록 지원합니다. Git은 브랜치 기능을 활용하여 병렬적인 개발을 용이하게 하며, 오픈 소스 기반의 무료로 사용할 수 있습니다. Git은 현재 많은 개발자들이 사용하는 대표적인 버전 관리 시스템 중 하나입니다.'
}

function hideExplan() {
  document.getElementById('desc').innerHTML = ''
}
