const api = "https://estudo-aadev.firebaseio.com/";

export const ApiService = {
  get(endpoint){
    return fetch(`${api}${endpoint}`)
      .then(response => response.json())
  }
}

/**
 * Requisições no Firebase
 * 
 * https://estudo-aadev.firebaseio.com/videos/.json -> Todos os registros do endpoint
 * https://estudo-aadev.firebaseio.com/videos/[indice]/.json -> Um registro completo
 * https://estudo-aadev.firebaseio.com/videos/[indice]/atributo.json -> Um atributo específico
 */