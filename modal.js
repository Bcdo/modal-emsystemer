class Modal extends HTMLElement {
  constructor() {
    super();
    this._modalVisible = true;
    console.log(this._modalVisible);
    this._modal;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
          /* Bakgrunn */
          .modal {
              display: none; 
              position: fixed; 
              z-index: 1; 
              padding-top: 100px; 
              left: 0;
              top: 0;
              width: 100%; 
              height: 100%; 
              overflow: auto; 
              background-color: rgba(0,0,0,0.4); 
          }

          /* Kampanjeinnhold */
          .modal-content {
              position: relative;
              background-color: #fefefe;
              margin: auto;
              padding: 0;
              border: 1px solid #888;
              width: 80%;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
              -webkit-animation-name: animatetop;
              -webkit-animation-duration: 0.4s;
              animation-name: animatetop;
              animation-duration: 0.4s
          }

          /* Exitknapp */
          .close {
              color: white;
              float: right;
              font-size: 28px;
              font-weight: bold;
          }

          .close:hover,
          .close:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
          }

          .modal-header {
          padding: 2px 16px;
          background-color: #000066;
          color: white;
          }

          .modal-body {padding: 2px 16px; margin: 20px 2px}

      </style>
      <div class="modal">
          <div class="modal-content">
              <div class="modal-header">
                  <span class="close">&times;</span>
                  <slot name="header"><h1>Test av Modal</h1></slot>
              </div>
              <div class="modal-body">
              <p>Her er innholdet.</p>
              <a href="https://www.sol.no" target="_blank">En link til en annen side</a>
              </div>
          </div>
      </div>
      `;
  }
  connectedCallback() {
    this._modal = this.shadowRoot.querySelector(".modal");
    this.shadowRoot
      .querySelector(".close")
      .addEventListener("click", this._hideModal.bind(this));
    this.shadowRoot
      .querySelector(".modal")
      .addEventListener("click", this._hideModal.bind(this));
    this._showModal();
  }
  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".close")
      .removeEventListener("click", this._hideModal);
  }
  _showModal() {
    this._modalVisible = true;
    this._modal.style.display = "block";
    console.log("Modal vises");
  }
  _hideModal() {
    this._modalVisible = false;
    this._modal.style.display = "none";
  }
}
customElements.define("kp-modal", Modal);
const test = new Modal();
window.onload = function () {
  console.log("window loaded");
};
