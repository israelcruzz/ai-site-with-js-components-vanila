class SectionInfo extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
          <section class="w-full p-6 flex flex-col items-center justify-center mt-10">
          <h1 id="title" class="text-[#01FEB1] font-bold text-5xl">
          </h1>
          <p id="center-text-unic" class="text-white font-normal text-lg mt-4">
          </p>
          
        </section>
          `;

    this.titleText = this.querySelector("#title");
    this.descriptionText = this.querySelector("#center-text-unic");
  }

  static get observedAttributes() {
    return ["titletext", "description"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "titletext") {
      this.titleText.textContent = newValue;
    } else if (name === "description") {
      this.descriptionText.textContent = newValue;
    }
  }
}

customElements.define("section-info", SectionInfo);

class CardInfo extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div
        class="bg-[#1B1B1B] w-full p-6 grid grid-cols-1 xl:grid-cols-2 items-center gap-6 hover:bg-stone-950">
        <div class="w-full h-[200px]">
         <img
          id="image"
          src=""
          width="264"
          height="243"
          alt=""
          class="w-full h-full object-cover"
        />
        </div>
       

        <div>
          <h1 id="content" class="text-white font-medium text-xl"></h1>
          <span id="description" class="text-white font-normal text-lg"></span>
        </div>
      </div>
        `;

    this.image = this.querySelector("#image");
    this.content = this.querySelector("#content");
    this.description = this.querySelector("#description");
  }

  static get observedAttributes() {
    return ["image", "content", "description"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "image") {
      this.image.src = newValue;
    } else if (name === "content") {
      this.content.textContent = newValue;
    } else if (name === "description") {
      this.description.textContent = newValue;
    }
  }
}

customElements.define("card-info", CardInfo);

class Hero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <aside
        class="w-full h-full grid grid-cols-1 xl:grid-cols-2 xl:px-16 gap-6" 
      >
        <section class="flex flex-col justify-center align-center">
          <h1 class="font-bold text-white text-6xl" id="heading"></h1>
          <h1 class="font-bold text-[#01FEB1] text-6xl" id="special"></h1>
          <p class="text-white font-normal text-lg mt-4" id="description"></p>
        </section>

        <section class="flex justify-center align-center">
          <img
            id="image"
            src=""
            width="600px"
            height="600px"
            alt=""
          />
        </section>
      </aside>
        `;

    this.heading = this.querySelector("#heading");
    this.special = this.querySelector("#special");
    this.description = this.querySelector("#description");
    this.image = this.querySelector("#image");
  }

  static get observedAttributes() {
    return ["heading", "special", "description", "image"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "heading") {
      this.heading.textContent = newValue;
    } else if (name === "special") {
      this.special.textContent = newValue;
    } else if (name === "description") {
      this.description.textContent = newValue;
    } else if (name === "image") {
      this.image.src = newValue;
    }
  }
}

customElements.define("hero-sls", Hero);

class TestHero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <main class="bg-black w-full h-[320px] flex">
        <section class="w-full flex xl:items-end xl:justify-end">
          <img src="" alt="" class="object-cover h-[320px] bg-local" id="image-hero">
        </section>
        <section class="w-full flex flex-col p-6 justify-between">
          <h1 class="text-white font-bold text-3xl xl:text-5xl" id="heading-hero"></h1>

          <button class="w-[179px] h-[48px] font-semibold text-white border border-white rounded-tl-full rounded-br-full hover:bg-[#06B67A] hover:border-transparent" onclick="" id="function-hero">Clique Aqui</button>
        </section>
      </main>
    `;

    this.image = this.querySelector("#image-hero");
    this.headingText = this.querySelector("#heading-hero");
    this.functionCallback = this.querySelector("#function-hero");
  }

  static get observedAttributes() {
    return ["image", "headingtext", "funcallback"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "headingtext") {
      this.headingText.textContent = newValue;
    } else if (name === "funcallback") {
      this.functionCallback.addEventListener("click", () => {
        window.location.href = newValue;
      });
    } else if (name === "image") {
      this.image.src = newValue;
    }
  }
}

customElements.define("test-hero", TestHero);

class CardDirectionInfo extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <main class="w-full flex flex-col xl:flex-row gap-6 p-6 xl:px-16 mb-6">
        <section class="w-full h-[400px] flex flex-col justify-center overflow-auto" id="direction">
          <h3 class="font-medium text-white text-lg mb-1" id="highlight"></h3>
          <h1 class="font-semibold text-white text-3xl mb-2" id="heading"></h1>
          <p class="text-xl text-white font-light" id="description"></p>
        </section>

        <section class="w-full h-[400px] flex items-center justify-center">

          <img src="" width="500" height="400" alt="" id="image" class="w-full h-full object-cover rounded-lg">
        </section>
      </main>
    `;

    this.direction = this.querySelector("#direction");
    this.highlight = this.querySelector("#highlight");
    this.heading = this.querySelector("#heading");
    this.description = this.querySelector("#description");
    this.image = this.querySelector("#image");
  }

  static get observedAttributes() {
    return ["direction", "highlight", "heading", "description", "image"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "direction") {
      if (newValue === "right") {
        this.direction.classList.add("xl:order-1");
      }
    } else if (name === "highlight") {
      this.highlight.textContent = newValue;
    } else if (name === "heading") {
      this.heading.textContent = newValue;
    } else if (name === "description") {
      this.description.textContent = newValue;
    } else if (name === "image") {
      this.image.src = newValue;
    }
  }
}

customElements.define("card-direction", CardDirectionInfo);

class FooterMod extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer class="w-full h-full bg-[#181823] relative">
    <section
      class="flex flex-col xl:flex-row p-6 gap-6 justify-between items-center xl:px-12 xl:py-6"
    >
      <div class="max-w-[500px]">
        <h1 class="font-bold text-white text-xl">
          Inteligência Artificial
        </h1>
        <p class="text-base text-white font-normal">
        Este trabalho foi desenvolvido pela turma do 3º Infonet para a semana Paulo Freire, com a finalidade de explicar sobre as inteligências artificiais que estão inovando a tecnologia de hoje em dia.
        </p>
      </div>
      <div class=" text-white items-center justify-center">
        <h1>Páginas</h1>
          <a href="" class="hover:text-[#06B67A]">Home</a>
          <a href="" class="hover:text-[#06B67A]">Chatgpt</a>
          <a href="" class="hover:text-[#06B67A]">BlackBox</a>
          <a href="" class="hover:text-[#06B67A]">LeonardoAi</a>
          <a href="" class="hover:text-[#06B67A]">Voz</a>
    
      </div>
    </section>

    <section
      class="border-t border-white/20 text-white flex justify-between items-center p-6 xl:px-12 xl:py-6"
    >

      <img src="../assets/image/logo.png" class="logo" />

      <span
        >© 2024 <span class="font-semibold">3º Infonet</span>. Todos os
        direitos reservados.</span
      >
    </section>

    <a href="#top-page" class="absolute top-0 right-0 m-2 w-12 h-12 bg-white rounded-full text-black flex items-center justify-center">
      <img src="/assets/image/arrow-up.svg" width="18" height="18" alt="">
    </a>
  </footer>
    `;
  }
}

customElements.define("footer-mod", FooterMod);
