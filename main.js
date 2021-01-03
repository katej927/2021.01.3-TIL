const myId = 'katej927 '
const postingBtn = document.getElementsByClassName('postingBtn')[0];
const commentInput = document.getElementsByClassName('commentInput')[0];
const ul = document.querySelector('ul'); //왜 안에?-> 밖에 있어도 동작함 // 밖VS내부 뭐가 더 좋은 건가?

postingBtn.addEventListener('click', function() {
    
    const commentValue= commentInput.value;
    

    if (commentValue) {
        const li = document.createElement('li'); // 함수 밖에 놓으면 안되는 이유: 이미 만들어진 li 1개의 값만 바꾸기 때문
        li.className="commentNewLi" // 이건 꼭 넣어야 하나? 나중에 li 컨트롤 할 때 필요하긴 할듯
        li.innerHTML='<span class="nickname">' + myId + '</span><span class="commentValue">' + commentValue + '</span>'; // 생각치도 못했는데 innerHTML할 때 문자열 안이라도 태그를 넣어주면 태그가 적용된다 
        ul.appendChild(li)
        // commentValue='' 왜 이건 안되고 밑에 껀 될까? 
        // -> commentValue는 클릭한 순간에 나온 값이 입력됨. 아 정리 안된다... ul에 보내주고 댓글 자리만 빈 문자열도 되는거 아닌가?
        commentInput.value=''
    }
});

document.addEventListener('keyup', function(e) {//왜 이건 인풋을 요소로 넣었을까?-> 도큐먼트도 가능 //인풋으로 해주는 게 더 좋은 건가?
    const commentValue= commentInput.value;

    if (e.keyCode === 13 && commentValue !== "") { //왜 여기서 조건을 넣어줬을까?
        const li = document.createElement('li');
        li.className="commentNewLi" // 이거랑 li.innerHTML은 왜 전과 다르게 올려줬을까
        li.innerHTML='<span class="nickname">' + myId + '</span><span class="commentValue">' + commentValue + '</span>'

        ul.appendChild(li)
        commentInput.value=''
    }
})