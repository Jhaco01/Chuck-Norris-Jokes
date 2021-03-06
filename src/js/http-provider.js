const jokeUrl = 'https://api.chucknorris.io/jokes/random';

export const obtenerChiste = async() => {
    
    try {
     
         const resp = await fetch(jokeUrl);
 
         if (!resp.ok) throw 'No se encontrĂ³ el recurso';
 
         const { value } = await resp.json();
         
         return { value };
 
    } catch (error) {
     
         throw error;
 
    } 
 
 }