// custom element => create new tag html
class CustomInput extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({
        mode: "open",
      });
      this._value = "a modal";
    }
    static get observedAttributes() {
      return ["value", "onchange"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "value":
          console.log(typeof newValue);
          // console.log(newValue === "show modal");
          if (newValue === "show modal") prompt("nhap ten");
          break;
      }
    }
  
    // vua gan dom thi add sụ kiện luôn
    connectedCallback() {
      const template = `
            <input id="custom-input-abc" class="progress-bar" value="${this._value}" onChange=""/>
          `;
      this.shadow.innerHTML = template;
  
      this.shadow.querySelector("input").addEventListener("keyup", () => {
        console.log("123");
      });
    }
  
    get value() {
      return this.shadow.querySelector("custom-input").value;
    }
  
    set value(val) {
      this.setAttribute("value", val);
    }
  }
  // export module
  window.customElements.define("custom-input", CustomInput);
  
  (function () {
    const custom = document.querySelector("custom-input");
    custom.addEventListener("change", (event) => {
      if (event.target.value == "show modal") console.log("123");
    });
  })();