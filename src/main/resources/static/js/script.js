//preventDaefault();
//function stopEvent(event){
//    event.preventDefault();
//}
//list.html에서 삭제버튼 눌렀을때 JS임. -> member.js로 이동

//const getout_btn = document.getElementById('getout');
//function getOut(){
//
//    const a=confirm('제명하시겠습니까?');
//    if(a===false){
//        stopEvent();
//    }
//    console.log(a);
//}


const cancle_btn = document.querySelector('#cancle_btn');
function can(eve){
    const b=confirm('취소하시겠습니까?');
    if(b){
        alert("취소되었습니다.");
        location.href = '/member/list';
    }else{
        event.preventDefault();
    }
}



const page_btn = document.querySelector('.page_btn');
function page(event){
    event.preventDefault();
}

//login form 에밀,패스워드 빠진거 있으면 로그인 안되게 하는 함수



/*
//signup form 이멜,패스워드 등 빼먹은거 있나 확인하는 함수

const signUpEmail = document.getElementById('email_div');
const signUpPass = document.getElementById('password_div');
const signUpPassver = document.getElementById('password_verify_div');
const signUpBtn = document.getElementById('login_bnt');
function signUpNullChk(event){
        event.preventDefault();
        alert('이멜써');
}
*/

