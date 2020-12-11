import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../shared/list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getListPokemons():Pokemon[]{
    return POKEMONS;
  }

  getSinglePokemon(id:number):Pokemon{
    const listPkm= this.getListPokemons();

    /*let pok:Pokemon;
    listPkm.forEach(pokemon => {
     if(pokemon.id ===id) pok= pokemon;
    });*/
    
   return listPkm.find(pokemon=>(pokemon));
    
  }

}
