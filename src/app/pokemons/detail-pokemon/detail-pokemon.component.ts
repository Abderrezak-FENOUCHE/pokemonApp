import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { POKEMONS } from '../../shared/list.pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router:Router) { }
  
  listOfPokemons: Pokemon[]=null;
  pokemonToDisplay: Pokemon=null;
  
  ngOnInit(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.listOfPokemons=POKEMONS;
    this.pokemonToDisplay =this.listOfPokemons.find(pokemon =>pokemon.id==id);
    console.log(this.pokemonToDisplay);
  }
  
  retourEnArriere(){
    const home=['pokemon'];
    this.router.navigate(home);
  }


}
