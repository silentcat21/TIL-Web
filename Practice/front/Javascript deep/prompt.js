let userName = prompt("사용자 이름을 입력해주세요", '');

if (userName === 'Admin') {
    let password = prompt('비밀번호를 입력해주세요', '');

    if (password === 'TheMaster') {
        alert('환영합니다');
    } else if (password === '' || password === null || password === undefined) {
        alert('취소되었습니다.')
    } else {
        alert('등록되지 않은 사용자 입니다.')
    }
};