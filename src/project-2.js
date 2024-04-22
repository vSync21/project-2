import { LitElement, html, css } from 'lit';
import { DDD } from '@lrnwebcomponents/d-d-d';
/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class Project2 extends DDD {

  static get tag() {
    return 'project-2';
  }

  constructor() {
    super();
    this.title = "Project 2";
    this.popupImageSrc = '';
    this.images = [
    { src: 'https://i.pinimg.com/originals/3c/1c/4b/3c1c4b238f9559c4c0ac831dff5506eb.jpg', alt: 'Sample Image 1' },
    { src: 'https://th.bing.com/th/id/OIP.-ez_gZ7oMXEiUKMsHLNIVQHaE6?w=304&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7', alt: 'Sample Image 2' },
    { src: 'https://th.bing.com/th/id/OIP.g020JmqrWCRYSIQv7dNrMwHaFm?w=266&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7', alt: 'Sample Image 3' },
    { src: 'https://th.bing.com/th/id/OIP.zYI5GunKsltuBDycwyJbjwHaHX?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7', alt: 'Sample Image 4' },
    { src: 'https://th.bing.com/th/id/OIP.8NNapknEAMnhQMaQ0RPsdQHaE-?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7', alt: 'Sample Image 5' },
    { src: 'https://th.bing.com/th/id/OIP.TZvn8oHngAAlF6lp5srx1QHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7', alt: 'Sample Image 6' }];
  }

  static get styles() {
    return css`
      :host {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

     

      .image-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .image-container img{
        max-width: 400px;
        min-height: 350px;
        padding: 4px;
        cursor: pointer;
        transition: border-color 0.5s, transform 0.5s;
        box-sizing: border-box;


      }

      .image-container img:hover{
        border: 10px solid green;
    
      }

      

      .image-container:hover{
        border: 10px green;
      }

  

      .title-container {
        font-size: 48px;
        display: flex;
        justify-content: center;
        padding: 64px;
        color: var(--ddd-theme-default-success);
      }

      .caption {
        justify-content: center;
        display: flex;
        margin-top: 16px;
        color: blue;
        font-size: 64px;
      }

      .popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 100;
        justify-content: center;
        align-items: center;
      }



      .popup img {
        max-width: 100%;
        max-height: 100%;
        background: black;
      }

      .close-button{
        position: absolute;
        top:10px;
        right:10px;
        color: var(--ddd-theme-default-skyBlue);
        font-size: 24px;
        cursor: pointer;
      }
    `;
  }

  




  popUp(src) {
    this.popupImageSrc = src;
    const popup = this.shadowRoot.querySelector('.popup');
    popup.style.display = 'flex';
  }

  closePopup() {
    this.popupImageSrc = '';
    const popup = this.shadowRoot.querySelector('.popup');
    popup.style.display = 'none';
  }

  
 

  render() {
    return html`
      
      <div>
        <div class = "title-container">
      <h1 class = "heading">${this.title}</h1>
      </div>
      <div class = "container">
      <div class = "image-container">
      ${this.images.map(image => html`
      <div class="image" @click=${() => this.popUp(image.src)}><img src=${image.src} alt = ${image.alt}></div>
      `)}
        </div>
        </div>

        <div class = "caption">
          Image Gallery of Carrousels
        </div>

        <div class="popup" @click=${() => this.closePopup()}>
      <div class = "close-button" @click=${() => this.closePopup()}>X</div>
          <img src="${this.popupImageSrc}" alt="popupImage">
  </div>

      </div>   
      
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      popupImageSrc: { type: String },
      images: {type: Array},

    };
  }
}

globalThis.customElements.define(Project2.tag, Project2);
