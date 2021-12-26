let resultbutton = document.querySelector('.resultBtn');
resultbutton.addEventListener('click', result);



function result() {
  // yes의 갯수를 세기위한 변수를 하나 선언함
  let yes_counter = 0; 
  // 페이지에서 yes인 클래스를 가진 콤포넌트들을 다 참아서 elements에 저장
  let elements = document.getElementsByClassName("yes");
  // 이 elements들을 하나씩 확인하기
  for (let i=0; i<elements.length; i++) {
      // i번째 element가 check 되어 있는지 확인하기
      if (elements[i].checked) {
          // yes_counter를 1 증가
          yes_counter++;
      }
  }
  // Maybe 고른 유저도 사실은 yes 다. 같이 count 하자.
  elements = document.getElementsByClassName("maybe");
  for (let i=0; i<elements.length; i++) {
      if (elements[i].checked) {
          yes_counter++;
      }
  }
  // 대답안한 문항이 있는지 확인하기
  // no라고 대답한 갯수까지 합쳐서 5이면 모든 질문에 대답했다는 의미
  let no_counter = 0;
  elements = document.getElementsByClassName("no");
  for (let i=0; i<elements.length; i++) {
      if (elements[i].checked) {
          no_counter++;
      }
  }
  console.log(yes_counter);
  console.log(no_counter);
  // 두 카운터를 더했을때 9가 아니면 창을 띄워서 알려주고, 페이지 이동을 중지함
  if (yes_counter + no_counter != 9) {
      alert("선택안한 문제가 있습니다. 모든 문제에 답해주세요.");
      window.scrollTo({top: 0 , behavior: 'auto'});
      return;
  }

  // Counter에 따라 다른 결과 페이지로 이동하기
  if (yes_counter == 9)
      location.href="resultone.html";
  else if (yes_counter == 7)
      location.href="resulttwo.html";
  else if (yes_counter >= 5)
      location.href="resultthree.html";
  else if (yes_counter == 2)
      location.href="resultfour.html";
  else
      location.href="resultfive.html";
}
