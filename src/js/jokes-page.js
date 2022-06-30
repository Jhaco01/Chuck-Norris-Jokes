import { obtenerChiste } from "./http-provider";

const body = document.body;
let jokeBox, btnOtro;
const imgSrc = 'assets/img/t-c-023-editable-classroom-award-plaques_ver_1.png'

const crearChistesHtml = () => {

    const html = `  <div class="title-box">
                        <h2>The Chuck Norris</h2>    
                        <h1 class="title"> Jokes </h1>
                        <h2>Generator</h2>
                    </div>
                    
                    <div class="joke-box"></div>

                    <button class="btn">New joke</button>

                    <ol class="mt-2 list-group">
                    </ol>
    `;

    const divChistes = document.createElement('div');

    const divTitle = document.querySelector('.title-box');

    divChistes.classList.add('box');

    divChistes.innerHTML = html;

    body.append(divChistes);

}

const dibujarChiste = ( chiste ) => {

    const jokeText = document.createElement('article');

    jokeText.innerHTML = `${chiste.value}`;

    jokeText.classList.add('joke-text');

    jokeBox.innerHTML = "";

    jokeBox.append(jokeText);
    
}

const events = () => {
    jokeBox = document.querySelector('.joke-box');
    btnOtro  = document.querySelector('button');

    btnOtro.addEventListener('click' , async() => {

        btnOtro.dissable = true;

        dibujarChiste( await obtenerChiste());

        btnOtro.dissable = false;
    })

}

export const init = () => {
    crearChistesHtml();
    events();
}