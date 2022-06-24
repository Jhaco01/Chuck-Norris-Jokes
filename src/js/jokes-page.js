import { obtenerChiste } from "./http-provider";

const body = document.body;
let olList, btnOtro;

const crearChistesHtml = () => {

    const html = `  <h1 class="mt-5"> Chistes </h1>

                    <hr>

                    <button class="btn btn-primary"> Chistes </button>

                    <ol class="mt-2 list-group">
                    </ol>
    `;

    const divChistes = document.createElement('div');

    divChistes.innerHTML = html;

    body.append(divChistes);

}

const dibujarChiste = ( chiste ) => {

    const listElement = document.createElement('li');

    listElement.innerHTML = `${chiste.id} ${chiste.value}`;

    listElement.classList.add('list-group-item');

    olList.append(listElement);

}

const events = () => {
    olList = document.querySelector('ol');
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