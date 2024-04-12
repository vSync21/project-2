import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class Project2 extends LitElement {

  static get tag() {
    return 'project-2';
  }

  constructor() {
    super();
    this.title = "Project 2";
  }

  static get styles() {
    return css`
      :host {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      #image-container{
        max-width: 100%;
      }

      .gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .gallery img{
        max-width: 400px;
        min-height: 350px;
        padding: 20px;
        cursor: pointer;
        transition: border-color 0.3s, transform 0.3s;
        box-sizing: border-box;


      }

      .gallery img:hover{
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
        color: red;
      }

      .caption {
        justify-content: center;
        display: flex;
        margin-top: 16px;
        color: blue;
        font-size: 64px;
      }

      


    `;
  }

  render() {
    return html`
      
      <div>
        <div class = "title-container">
      <h1 class = "heading">${this.title}</h1>
      </div>
      <div id = "image-container">
        <div class = "gallery">
        <img src="https://i.pinimg.com/originals/3c/1c/4b/3c1c4b238f9559c4c0ac831dff5506eb.jpg" alt = "sampleImage1">
        <img src="https://th.bing.com/th/id/OIP.-ez_gZ7oMXEiUKMsHLNIVQHaE6?w=304&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt = "sampleImage2">
        <img src="https://th.bing.com/th/id/OIP.g020JmqrWCRYSIQv7dNrMwHaFm?w=266&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt = "sampleImage3">
        <img src="https://th.bing.com/th/id/OIP.zYI5GunKsltuBDycwyJbjwHaHX?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt = "sampleImage4">
        <img src="https://th.bing.com/th/id/OIP.8NNapknEAMnhQMaQ0RPsdQHaE-?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt = "sampleImage5">
        <img src="https://th.bing.com/th/id/OIP.TZvn8oHngAAlF6lp5srx1QHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt = "sampleImage6">
        </div>

        <div class = "caption">
          Image Gallery of Carrousels
        </div>
       


      </div>
      
      
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(Project2.tag, Project2);
