const jokeUrl = 'https://api.chucknorris.io/jokes/random';

export const obtenerChiste = async() => {
    
    try {
     
         const resp = await fetch(jokeUrl);
 
         if (!resp.ok) throw 'No se encontró el recurso';
 
         const {id, icon_url, value} = await resp.json();
         
         return {id, icon_url, value};
 
    } catch (error) {
     
         throw error;
 
    } 
 
 }