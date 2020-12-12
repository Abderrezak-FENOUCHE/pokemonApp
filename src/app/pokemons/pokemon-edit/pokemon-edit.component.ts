import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  constructor(private route:ActivatedRoute, private pokemonService:PokemonsService) { }

  ngOnInit(): void {
    this.singlePokemon=this.pokemonService.getSinglePokemon(parseInt(this.route.snapshot.paramMap.get('id')))
  }

  singlePokemon:Pokemon=null;

}
