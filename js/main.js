let encabezado = document.querySelector("#encabezado")
console.log(encabezado)
let barNav = document.querySelector("#barNav")
let aboutMeText = document.querySelector("#aboutMeText")
let techList = document.querySelector("#techList")
let skills = document.querySelector("#skills")
let filtro = document.querySelector("#filtro")
let contenedorCards = document.querySelector("#contenedorCards")

let idiomaPreferido = "es-ES"

const idiomaSeleccionado = () => {
    if (navigator.language == "en-US")
        idiomaPreferido == "en-US"
    return idiomaPreferido
}

let textoEncabezado = [{
        idioma: "en-US",
        saludo: "Hi, I'm ",
        identificacion: "I'm a Full-Stack web developer.",
        boton: "These are some of my works",
    },
    {
        idioma: "es-ES",
        saludo: "Hola! mi nombre es ",
        identificacion: "Soy un desarrollador web Full-Stack.",
        boton: "Algunos de mis trabajos",
    }
]

const encabezadoCreator = () => {
    debugger
    idiomaSeleccionado()
    let y = textoEncabezado.filter((x) => {
        if (x.idioma == idiomaPreferido) {
            let { idioma, saludo, identificacion, boton } = x
            return (encabezado.innerHTML = `
             <div class="encabezado" id="encabezado">
                 <div class="header__div" id="headerDiv">
                     <img src="" alt=""></img>
                     <div class="header__text__box" id="headerrTextBox">
                         <h1>
                             ${saludo} <span class="nombre">Manuel Marchena</span>.
                         </h1>
                         <p>
                             ${identificacion}
                         </p>
                     </div>
                     <div class="button" id="headerBoton">
                         <p>
                             ${boton}
                             <span class="iconify" data-icon="mdi:arrow-right"></span></p>
                     </div>
                 </div>
             </div>
             `)
        }
    })


}

encabezadoCreator()

const textosBarra = [{
        idioma: "en-US",
        uno: "About me",
        dos: "Skills",
        tres: "Portfolio",
        cuatro: "Blog",
        cinco: "Contact"
    },
    {
        idioma: "es-ES",
        uno: "Sobre mi",
        dos: "Habilidades",
        tres: "Portafolio",
        cuatro: "Blog",
        cinco: "Contacto"
    }
]

const navbarCreator = () => {
    idiomaSeleccionado()
    let y = textosBarra.filter((x) => {
        if (x.idioma == idiomaPreferido) {
            let { idioma, uno, dos, tres, cuatro, cinco } = x
            return (barNav.innerHTML = `
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">${uno}</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">${dos}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${tres}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">${cuatro}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">${cinco}</a>
            </li>
        </ul>
        `)
        }
    })
}
navbarCreator()





const aboutMeTextCreator = () => {
    return (aboutMeText.innerHTML = `
        <h2>
            About me
        </h2>
        <p>
            Hello! My name is Manuel and I love to create things that help people to do things. I started in 2015 getting into IT world as a hobbie while i studied in college, i find a passion in CCNA Cisco Networking, after that i finished college and left my country.
            Back in 2019 i decided to continue learning but this time i went for web development, so since 2019 i've been learning all i can get relateed to web and app development.
            <br>
            <span class="main__goal" id="mainGoal"> 
                My ambition is to bring complete solutions that help to get better and efficient results.
            </span>
            <br> Here are a few technologies I've been working with recently:
        </p>
    `)
}

aboutMeTextCreator()


const techListCreator = () => {
    return (techList.innerHTML = `
        <ul>
            <!-- Agregar barras porcentajes -->
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Node</li>
        </ul>
    `)
}
techListCreator()


const skillsCreator = () => {
    return (skills.innerHTML = `
        <div class="skills__titulo" id="skillsTitulo">
                <h2>Skills</h2>
            </div>
            <div class="skills" id="skills">
                <ul>
                    <li>Empathy</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Open-mindedness</li>
                    <li>Problem solving</li>
                    <li>Accountability</li>
                    <li>Creativity</li>
                    <li>Time management</li>
                </ul>
        </div>
    `)
}
skillsCreator()

const filtroCreator = () => {
    return (filtro.innerHTML = `
        <ul class="lista__filtro" id="listaFiltro">
            <li>JavaScript</li>
            <li>Angular</li>
            <li>React</li>
            <li>Vue</li>
        </ul>
    `)
}
filtroCreator()


const contenedorCreator = () => {
    return (contenedorCards.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    `)
}
contenedorCreator()