class Modal extends HTMLElement {
  constructor() {
    super();
    this._modalVisible = true;
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
              width: 35%;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
              font-family: "Roboto", sans-serif;
              line-height: 1.5;
              color: #444;
              text-align: center;
              min-width: 500px;
              max-width: 500px;
          }

          .modal-content p {
            width: 70%;
            margin: auto;
            padding: 30px;
          }

          .read-button {
            background-color: #39bce8;
            border: none;
            color: white;
            padding: 12px 18px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 13px;
            margin: 4px 2px;
            cursor: pointer;
            width: 25%;
            border-radius: 35px;
          }
          .read-button:hover {
            background-color: #34abd3;
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
          background-color: #0e6fba;
          color: white;
          font-family: "Roboto", sans-serif;
          }

          .modal-image {
              width: 50%;
              margin: 0 auto;
              display: block;
              height: 254px;
              width: 350px;
          }

          .modal-body {padding: 2px 16px; margin: 20px 2px}

          @media screen and (max-width: 768px) {
            .modal-content {
              min-width: 300px;
              font-size: 0.8em;
          
            }
            .modal-content p {
              width: 100%;
              padding: 20px 0;
              margin: 0;
              color: #444;
            }
            .modal-image {
              width: 100%;
              height: auto;
              margin: 0 auto;
              display: block;
          
          }

      </style>
      <div class="modal">
          <div class="modal-content">
              <div class="modal-header">
                  <span class="close">&times;</span>
                  <h1>Kampanje</h1>
              </div>
              <div class="modal-body">
              <img src="./Produkt_redigert_web.jpg" alt="Unit One undersentral" class="modal-image">
              <p>EM Systemer har nå en kampanje rettet mot våre EM Portal kunder som har denne Unit One undersentralen som ble produsert fra 1994 til 1999 og som i gjennomsnitt har hatt 220.000 driftstimer!</p>
              
              <a href="https://emsystemer.no/" target="_blank" class="read-button">Les mer</a>
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
