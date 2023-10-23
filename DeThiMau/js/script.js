// coding implementation

document.getElementById('submit').onclick = sendit;

function sendit(){
    var email = document.getElementById('email').value;
    var com = document.getElementById('com').value;
    var rate = document.getElementById('rate').value;
    if( email == ""){
        alert("Không được để trống email");
        return;
    }
    if( com == ""){
        alert("Không được để trống phần comment");
        return;
    }
    if( rate == ""){
        alert("Không được để trống đánh giá");
        return;
    }
    if( email == "" || com == "" || rate == ""){
        alert("Không được để trống trường nào");
        return;
    }

    var t1, t2;
    
    if(checkEmail(email) == false){
        alert("Email sai định dạng");
        t1 = 0;
        return;
    }
    else{
        t1 = 1;
    }

    if(isNaN(rate)){
        alert("Phần đánh giá phải là kiểu số");
        t2 = 0;
        return;
    }
    else{
        t2 = 1;
    }

    if(t1 == 1 && t2 ==1 && com != ""){
        alert("Bạn đã đăng nhập thành công");
        return;
    }
}

function checkEmail(input){
    var example = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;   
    return example.test(input);
}

// end coding implementation