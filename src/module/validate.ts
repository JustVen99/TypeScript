function validateForm() {
    let getName = document.querySelector("#fullName") as HTMLInputElement;
    let getEmail = document.querySelector("#email") as HTMLInputElement;
    let getspecialized = document.querySelector("#specialized") as HTMLInputElement;
  
    let showErr1 = document.querySelector("#error1") as HTMLElement;
    let showErr2 = document.querySelector("#error2") as HTMLElement;
    let showErr3 = document.querySelector("#error3") as HTMLElement;
    let showErr4 = document.querySelector("#error4") as HTMLElement;
    let showErr5 = document.querySelector("#error5") as HTMLElement;
    let showErr6 = document.querySelector("#error6") as HTMLElement;
    let showErr7 = document.querySelector("#error7") as HTMLElement;
  
    let err1: string = "";
    let err2: string = "";
    let err3: string = "";
    let err4: string = "";
    let err5: string = "";
    let err6: string = "";
    let err7: string = "";
    let check = true;
  
    // Kiểm tra lỗi nhập họ và tên
    if (getName.value.length == 0) {
      getName.classList.remove("showTrue");
      getName.classList.add("showErr");
      err1 = "Nhập vào họ và tên !";
      check = false;
      getName.focus();
    } else if (getName.value.length < 5 || getName.value.length > 30) {
      getName.classList.remove("showTrue");
      getName.classList.add("showErr");
      err1 = "Nhập họ và tên tối thiểu 5 ký tự và tối đa 30 ký tự !";
      check = false;
      getName.focus();
    } else if (isNaN(+getName.value) == false) {
      getName.classList.remove("showTrue");
      getName.classList.add("showErr");
      err1 = "Nhập họ và tên bằng ký tự chữ !";
      check = false;
      getName.focus();
    } else {
      getName.classList.add("showTrue");
      getName.classList.remove("showErr");
      showErr1.innerHTML = "";
    }
    if (err1 != "") {
      showErr1.innerHTML = err1;
    }
  
    // Kiểm tra lỗi nhập email
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (getEmail.value.length == 0) {
      getEmail.classList.remove("showTrue");
      getEmail.classList.add("showErr");
      err4 += "Nhập vào email !";
      check = false;
      getEmail.focus();
      showErr4.innerHTML = err4;
    } else if (regexEmail.test(getEmail.value) == false) {
      getEmail.classList.remove("showTrue");
      getEmail.classList.add("showErr");
      err4 += "Vui lòng nhập đúng định dạng email (Ex: abc@gmail.com) !";
      check = false;
      getEmail.focus();
      showErr4.innerHTML = err4;
    } else {
      getEmail.classList.add("showTrue");
      getEmail.classList.remove("showErr");
      showErr4.innerHTML = "";
    }
    
    if(getspecialized.value.length==0){
      
    }
    return check;
  }
  


  
  export { validateForm };
  