//Boton Modo nocturno
const btnSwitch = document.querySelector(".switch");

//Cambiar el logotipo
const logo = document.querySelector(".head__logo");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    if (logo.src.includes("img/Azul-8.png")) {
        logo.src = "img/Blanco-8.png";
    } else {
        logo.src = "img/Azul-8.png";
    }
});

//Menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("active");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("active");
});

//banner-principal (termianl style text effect)
function text(words) {
    let o = document.querySelector(".guion__");
    let t = document.querySelector(".text__js");
    let waite = false;
    let visible = true;
    let charCounter = 1;
    let x = 1;
    let currentIndex = 0;

    window.setInterval(() => {
        if (charCounter === 0 && waite === false) {
            waite = true;
            t.innerHTML = words[0].substring(0, charCounter);
            window.setTimeout(function () {
                x = 1;
                charCounter += x;
                waite = false;
            }, 500);
        } else if (charCounter === words[0].length + 1 && waite === false) {
            waite = true;
            window.setTimeout(function () {
                x = -1;
                charCounter += x;
                waite = false;
            }, 500);
        } else if (waite === false) {
            t.innerHTML = words[currentIndex].substring(0, charCounter);
            charCounter += x;
        }
    }, 200);

    window.setInterval(() => {
        if (visible === true) {
            o.className = "un hidden";
            visible = false;
        } else {
            o.className = "guion__";
            visible = true;
        }
        if (waite === true && charCounter === 0) {
            currentIndex = (currentIndex + 1) % words.length;
            waite = false;
        }
    }, 500);
}

text(["desarrolladora front-end", "diseñadora web", "diseñadora gráfica"]);

//Carrousel certificados
let images = Array.from(document.getElementsByClassName("img__carrousel__certificados"));
let mainPhoto = document.getElementById("main__photo");
let slideIndex = 0;

function updateimage(event) {
    let image = event.target
    mainPhoto.src = image.src
}

images.forEach(function (image) {
    image.addEventListener("click", updateimage);
});


//Portfolio
var data = [
    {
        img: "img/Tindog_PF.webp",
        type__portfolio: "Landing page",
        title__project__portfolio: "Tindog",
        skills__portfolio: "HTML5, CSS3, Bootstrap",
        description__portfolio: "Tindog es una parodia divertida de Tinder, pero para perros. Permite a los dueños encontrar compañeros caninos para jugar y socializar en lugar de citas románticas.",
        demo__portfolio: "https://youtu.be/sdXisxduyRI",
        link__portfolio: "https://luzmagtz.github.io/Tindog/",
    },

    {
        img: "img/DK__PF.webp",
        type__portfolio: "Landing page",
        title__project__portfolio: "Drum Kit",
        skills__portfolio: "HTML5, CSS3, JS",
        description__portfolio: "Página de aterrizaje donde se pueden crear diversas melodías utilizando los instrumentos incorporados en la misma.",
        demo__portfolio: "https://youtu.be/umNRbfGjZek",
        link__portfolio: "https://luzmagtz.github.io/DRUM_KIT/",
    },

    {
        img: "img/Encriptador__PF.webp",
        type__portfolio: "Landing page",
        title__project__portfolio: "Encriptador",
        skills__portfolio: "HTML5, CSS3, JS",
        description__portfolio: "Aplicación para encriptar textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.",
        demo__portfolio: "https://youtu.be/1tLxl-yQE9w",
        link__portfolio: "https://luzmagtz.github.io/Ecriptador/",
    },

    {
        img: "img/CRF__PF.webp",
        type__portfolio: "Sitio web",
        title__project__portfolio: "Compliance Risk & Fraud",
        skills__portfolio: "WordPress",
        description__portfolio: "Colaboré en el proyecto CRF como miembro de un equipo. Juntos, logramos mejorar el diseño del sitio, realzando la experiencia del usuario y su funcionalidad.",
        demo__portfolio: "https://youtu.be/e_WiikVnyFI",
        link__portfolio: "",
    },

    {
        img: "img/LPL__PF.webp",
        type__portfolio: "Sitio web",
        title__project__portfolio: "Luxpluslux",
        skills__portfolio: "WordPress",
        description__portfolio: "Creé un sitio web atractivo y de fácil navegación para una editorial. Utilicé colores elegantes y fuentes legibles para reflejar su personalidad. El enfoque en la experiencia del usuario fue fundamental.",
        demo__portfolio: "https://youtu.be/oyJjTDLBzMc",
        link__portfolio: "",
    },

    {
        img: "img/CRF__LP__PF.webp",
        type__portfolio: "Landing page",
        title__project__portfolio: "Compliance Risk & Fraud",
        skills__portfolio: "WordPress",
        description__portfolio: "Creé un diseño centrado en un curso de prevención de lavado de dinero, con un enfoque moderno que combinó imágenes y texto para atraer a estudiantes potenciales. El resultado cumplió las expectativas del cliente.",
        demo__portfolio: "https://youtu.be/wsM3-4Fc2QA",
        link__portfolio: "https://cursos.crf-cs.com/capacitacio-pld/?_ga=2.131738703.1507036679.1692570831-1650028603.1692311784&_gl=1*pq36hp*_ga*MTY1MDAyODYwMy4xNjkyMzExNzg0*_ga_275C0480D8*MTY5MjU5NzUzNS40LjEuMTY5MjU5NzU0Ni4wLjAuMA..*_ga_CG8V01QZ1Z*MTY5MjU5NzUzNS40LjEuMTY5MjU5NzU0Ni4wLjAuMA..*_ga_0Q2JL4S2BT*MTY5MjU5NzUzNS40LjEuMTY5MjU5NzU0Ni4wLjAuMA..",
    },

    // {
    //    img: "", 
    //    type__portfolio: "", country
    //    title__project__portfolio: "", place
    //    skills__portfolio: "",
    //    description__portfolio: "", description
    //},
];

const introduce = document.querySelector(".introduce__portfolio");
const ordinalNumber = document.querySelector(".ordinal__number__portfolio");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        <div class="wraper__portfolio">
        <span>
            <h5 class="type__portfolio" style="--idx: 0">${data[i].type__portfolio}</h5>
        </span>
        <span>
            <h2 class="title__project__portfolio" style="--idx: 1">${data[i].title__project__portfolio}</h2>
        </span>
        <span>
            <p class="skills__portfolio" style="--idx: 2">${data[i].skills__portfolio}</p>
        </span>
        <span>
            <p class="description__portfolio" style="--idx: 3">${data[i].description__portfolio}</p>
        </span>
        <span>
            <a href="${data[i].demo__portfolio}" target="_blank" >
                <button class="discovery__button__portfolio btn__portfolio" style="--idx: 4">Demo</button>
            </a>
        </span>
        <span>
        ${
            data[i].link__portfolio
                ? `<a href="${data[i].link__portfolio}" target="_blank">
                        <button class="discovery__button__portfolio btn__portfolio" style="--idx: 5">Visitar sitio</button>
                    </a>`
                : ''  // Aquí es donde se controla la visibilidad del botón
        }
        </span>
        </div>`;
    const paddedIndex = (i + 1).toString().padStart(2, '0'); // Formato "01", "02", etc.
    ordinalNumber.innerHTML += `<h2>${paddedIndex}</h2>`;

};

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");


const thumnbailListWrapper = document.querySelector(".thumbnail__list .wraper__portfolio");
thumnbailListWrapper.innerHTML += `
    <div class="thumbnail__portfolio zoom">
        <img src="${data[0].img}" alt="">
    </div>
    `
for (let i = 1; i < data.length; i++) {
    thumnbailListWrapper.innerHTML += `
    <div class="thumbnail__portfolio" style="--idx: ${i - 1}">
        <img src="${data[i].img}" alt="">
    </div>
    `
}

const nextBtn = document.querySelector(".navigation__portfolio .next__button__portfolio");
var currentIndex = 0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    var clone = thumnbailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumnbailListWrapper.appendChild(clone);
    thumnbailListWrapper.children[1].classList.add("zoom");
    // Actualiza la URL del botón "Visitar sitio" con la URL correspondiente del objeto actual
    const siteLink = introduce.children[currentIndex].querySelector(".discovery__button__portfolio");
    siteLink.href = data[currentIndex].link__portfolio;
    setTimeout(() => {
        thumnbailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);

    for (let i = 2; i < thumnbailListWrapper.childElementCount; i++) {
        thumnbailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }
    if (currentIndex < data.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    };

    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }

    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});


// Formulario

