import {postData} from "../model/modelCV";
import {User} from "../module/moduleCV";

(async function addCV(){
    try{
        let getForm = document.querySelector("#myForm")! as HTMLFormElement;
        getForm.addEventListener("submit", (e) => {
        let getName = document.getElementById("name")! as HTMLInputElement;
        let getImg = document.getElementById("urlImg")! as HTMLInputElement;
        let urlImg = getImg.value.split("\\").pop();
        let getspecialized = document.getElementById("specialized")! as HTMLInputElement;
        let getBirthday = document.getElementById("birthday")! as HTMLInputElement;
        let getPhone = document.getElementById("Phone")! as HTMLInputElement;
        let getEmail = document.getElementById("Email")! as HTMLInputElement;
        let getEdu = document.getElementById("education")! as HTMLInputElement;
        let getAddress = document.getElementById("address")! as HTMLInputElement;
        let getProject = document.getElementById("project")! as HTMLInputElement;
        let desPro = document.getElementById("DesProject")! as HTMLInputElement;
        let Intro = document.getElementById("Intro")! as HTMLInputElement;


        let newUser = new User(
            getName.value,
            urlImg!,
            getspecialized.value,
            getPhone.value,
            getEmail.value,
            getBirthday.value,
            getEdu.value,
            getAddress.value,
            getProject.value,
            desPro.value,
            Intro.value
  );
        let addData = postData("http://localhost:3000/user", newUser);
        addData.then((res) => {
        window.location.href = "index.html";
        });
    });
    } catch (err) {
    console.log(err);
    }
    })();