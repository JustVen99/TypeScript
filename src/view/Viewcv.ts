import { getData, getDataId } from "../model/modelCV";

async function getUser() {
    try {
        const response = await getData('http://localhost:3000/user');
        const list = response.data;
        for (let i = 0; i < list.length; i++) {
            let html = `<option value="${list[i].id}">${list[i].name}</option>`;
            document.querySelector("#SelectCV")?.insertAdjacentHTML("beforeend", html);
        }
    } catch (error) {
        console.log(error);
    }
}

async function RenderCV(){
    let getselect = document.querySelector("#SelectCV")! as HTMLSelectElement;
    let getCV = document.querySelector("#ShowCV")! as HTMLElement;
    let showBtnAdd = document.querySelector(".show-btnAdd")! as HTMLElement;

    getselect.addEventListener("change", () => {
    let selectOption = getselect.options[getselect.selectedIndex];
    let getValue = parseInt(selectOption.value);
    if (getValue == 0) {
        getCV.style.display = "none";
        showBtnAdd.style.display = "flex";
    } else {
        document.querySelector("#avatar")!.innerHTML = "";
        document.querySelector("#contact")!.innerHTML = "";
        document.querySelector("#info")!.innerHTML = "";
        document.querySelector("#intro")!.innerHTML = "";
        document.querySelector("#des")!.innerHTML = "";
        document.querySelector("#project")!.innerHTML = "";
        document.querySelector(".infoCV__flexBtn")!.innerHTML = "";
        getDataId(`http://localhost:3000/user/`,getValue).then((res) => {
            console.log(res.data);
            let getAvt = `<img src="./public/img/${res.data.avt}" alt="">`
            let contact = ` <h1>${res.data.name}</h1>
                        <div class="specialize">${res.data.specialized}</div>
                        <ul class="contact">
                            <li>
                                <span>P</span>${res.data.phone}
                            </li>
                            <li>
                                <span>E</span>${res.data.email}
                            </li>
                            <li>
                                <span>W</span>
                            </li>
                        </ul>`
            let info = `<ul>
                            <li>From <b>${res.data.address}</b</li>
                            <li>Birthday: ${res.data.birthday}</li>
                            <li>${res.data.education}</li>
                        </ul>`
            let intro = `<h2>INTRODUCE MYSELT</h2>${res.data.intro}`
            let des = `     <div class="item">
                            <h4>Student</h4>
                            <div class="time">
                            <span>2022-2024</span>
                            <span>FPT PolyTechnic</span>
                            <p>${res.data.education}<p>
                            </div>
                        </div>
                        <h2 class="skills">
                            SKILLS
                        </h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>MySql</li>
                            <li>Git</li>
                            <li>TypeScript</li>
                        </ul>`
            let project = `<h2>PROJECTS</h2>
            <div class="item" id="project">
             <h4>${res.data.project}</h4>
             <div class="time">
                 2022
             </div>
             <div class="location">
                 ${res.data.specialized}
             </div>
             <div class="des">
                 ${res.data.desProject}
             </div>`
        let getBtn = `
                    <a href="add.html"><button type="button" class="btn btn-primary">Thêm CV mới</button>
                    </a>
                    <a href="update.html?id=${res.data.id}"><button type="button" class="btn btn-warning">Chỉnh sửa CV</button>
                    </a>
                    <a href="delete.html?id=${res.data.id}"><button type="button" class="btn btn-danger">Xóa CV</button>
                    </a>
                `;
                document.querySelector("#avatar")!.insertAdjacentHTML("beforeend", getAvt);
                document.querySelector("#contact")!.insertAdjacentHTML("beforeend", contact);
                document.querySelector("#info")!.insertAdjacentHTML("beforeend", info);
                document.querySelector("#des")!.insertAdjacentHTML("beforeend", des);
                document.querySelector("#intro")!.insertAdjacentHTML("beforeend", intro);
                document.querySelector("#project")!.insertAdjacentHTML("beforeend", project);
                document
                .querySelector(".infoCV__flexBtn")!.insertAdjacentHTML("beforeend", getBtn);
                showBtnAdd.style.display = "none";
                getCV.style.display = "column";
        })
    }
})
}

export {RenderCV,getUser}