import { putData } from "../model/modelCV";
import { UpdateRender } from "../view/UpdateCV";

(async function updateCV(){
    let queryString = window.location.search;
    let getId = new URLSearchParams(queryString);
    let idPD = getId.get("id");
    try {
        await UpdateRender(idPD);
        
let btnUpdate = document.querySelector("#btn-update")! as HTMLButtonElement;
btnUpdate.addEventListener("click", () => {
  let getName = document.getElementById("Name")! as HTMLInputElement;
  let getspecialized = document.getElementById("specialized")! as HTMLInputElement;
  let getBirthday = document.getElementById("birthday")! as HTMLInputElement;
  let getPhone = document.getElementById("Phone")! as HTMLInputElement;
  let getEmail = document.getElementById("Email")! as HTMLInputElement;
  let getEdu = document.getElementById("education")! as HTMLInputElement;
  let getAddress = document.getElementById("address")! as HTMLInputElement;
  let getProject = document.getElementById("project")! as HTMLInputElement;
  let desPro = document.getElementById("DesProject")! as HTMLInputElement;
  let Intro = document.getElementById("Intro")! as HTMLInputElement;
  let getImg = document.getElementById("urlImg")! as HTMLInputElement;
  let urlImg = getImg.value.split("\\").pop();
  let newUser = {};
    urlImg = getImg.value.split("\\").pop();
    newUser = {
      name: getName.value,
      specialized: getspecialized.value,
      phone: getPhone.value,
      email:getEmail.value,
      birthday:getBirthday.value,
      address:getAddress.value,
      education:getEdu.value,
      project:getProject.value,
      desProject:desPro.value,
      intro:Intro.value,
      avt: urlImg
    };
    let putUser = putData("http://localhost:3000/user", idPD, newUser);
      putUser.then((res) => {
        window.location.href = "index.html";
    });
});
    }catch(err){
        console.log(err);
    }
})();