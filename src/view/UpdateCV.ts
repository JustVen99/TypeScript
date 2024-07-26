import { getDataId } from "../model/modelCV";

async function UpdateRender(id:any) {
    try {
      const res = await getDataId("http://localhost:3000/user/",id);
  
      let getName = document.getElementById("Name")! as HTMLInputElement;
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
      let getImgOld = document.getElementById("urlImgOld")! as HTMLInputElement;
  
      getName.value = res.data.name;
      getspecialized.value = res.data.specialized;
      getPhone.value = res.data.phone;
      getEmail.value = res.data.email;
      getBirthday.value = res.data.birthday;
      getEdu.value = res.data.education;
      getAddress.value = res.data.address;
      getProject.value = res.data.project;
      desPro.value = res.data.desProject;
      Intro.value = res.data.intro;
    } catch (error) {
      console.error(error);
    }
  }

export {UpdateRender};
