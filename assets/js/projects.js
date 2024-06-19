class ProjectCard {
    constructor(imgSrc, imgAlt, subtitleId, titleText, link1, link2) {
      this.imgSrc = imgSrc;
      this.imgAlt = imgAlt;
      this.subtitleId = subtitleId;
      this.titleText = titleText;
      this.link1 = link1;
      this.link2 = link2;
    }
  
    generateHTML() {
      // Crear el elemento de artículo
      const article = document.createElement("article");
      article.classList.add("projects__card");
  
      // Crear el elemento de imagen
      const img = document.createElement("img");
      img.src = this.imgSrc;
      img.alt = this.imgAlt;
      img.classList.add("projects__img");
  
      // Crear el elemento de modal
      const modal = document.createElement("div");
      modal.classList.add("projects__modal");
  
      // Crear el contenido del modal
      const modalContent = document.createElement("div");
  
      // Crear el elemento de subtítulo
      const subtitle = document.createElement("span");
      subtitle.id = this.subtitleId;
      subtitle.classList.add("projects__subtitle");
  
      // Crear el elemento de título
      const title = document.createElement("h3");
      title.classList.add("projects__title");
      title.textContent = this.titleText;
  
      // Crear el primer enlace
      const link1 = this.createLinkElement(this.link1);
  
      // Crear el segundo enlace
      const link2 = this.createLinkElement(this.link2);
  
      // Agregar elementos al contenido del modal
      modalContent.appendChild(subtitle);
      modalContent.appendChild(title);
      modalContent.appendChild(link1);
      modalContent.appendChild(link2);
  
      // Agregar contenido del modal al modal
      modal.appendChild(modalContent);
  
      // Agregar elementos al artículo
      article.appendChild(img);
      article.appendChild(modal);
  
      return article;
    }
  
    createLinkElement(linkInfo) {
      const link = document.createElement("a");
      link.href = linkInfo.href;
      link.target = linkInfo.target;
      link.classList.add("projects__button", "button", "button__small");
  
      // Crear el icono dentro del enlace
      const icon = document.createElement("i");
      icon.classList.add(linkInfo.iconClass);
  
      // Agregar el icono al enlace
      link.appendChild(icon);
  
      return link;
    }
  }
  
  // Ejemplo de uso de la clase
  const project = new ProjectCard(
    "assets/img/Proyectos/GuitarLAReSize.jpg",
    "Proyectos",
    "Proyecto1",
    "HTML + SCSS",
    {
      href: "https://csscurse18.vercel.app/index.html",
      target: "_blank",
      iconClass: "ri-link"
    },
    {
      href: "https://github.com/Slorq-code/CssCurse-18",
      target: "_blank",
      iconClass: "ri-github-fill"
    }
  );
  
  // Obtener el elemento HTML generado
  const projectElement = project.generateHTML();
  
  // Agregar el elemento al cuerpo del documento
  document.body.appendChild(projectElement);
  