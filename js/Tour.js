AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "gree-guy",
          title: "Free Guy",
          url: "./assets/thumbnails/FreeGuy.jpg",
        },
        {
          id: "King-Richard",
          title: "King Richard",
          url: "./assets/thumbnails/King Richard.jpg",
        },
  
        {
          id: "pushpa",
          title: "Pushpa: The Rise",
          url: "./assets/thumbnails/pushpa.webp",
        },
        {
          id: "bad-boys",
          title: "Bad Boys For Life",
          url: "./assets/thumbnails/badboys.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        // Thumbnail Element
        const thumbnail = this.createThumbnail(item)
        borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl = this.createTitle(position, item)
        borderEl.appendChild(titleEl)
  
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "black",
        opacity: 0.4,
      });
      return entityEl;
    },
  
    createThumbnail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius:9,
      });
      entityEl.setAttribute("material", {
        src: item.url
      });
      return entityEl;
    },
  
    createTitle: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width:60,
        color:"#e65100",
        value:item.title
      });
      
      const elPosition = position;
      elPosition.y = -20
  
      entityEl.setAttribute("position", elPosition);
      return entityEl;
    }
  });
  