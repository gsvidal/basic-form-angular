import { Component } from '@angular/core';
import { PokemonList } from './pokemonList.model';
import { Register } from './register.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-store';
  name: string = "Gonzalo";
  age: number = 33;
  image: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
  person = {
    name: "Gonza",
    age: 33,
    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
  };
  btnDisabled: boolean = true;
  counter: number = 0;
  counterValue: number = 1;
  pokemons: string[] = ["pikachu", "raichu", "squirtle"];
  newPokemon: string = "";
  idToDeletePokemon: number = 2;
  pokemonList: PokemonList[] = [
    {
      name: "Pikachu",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      hp: 34,
      type: "electric",
    },
    {
      name: "Raichu",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      hp: 58,
      type: "electric",
      bgColor: "#fff9aa"
    },
    {
      name: "Squirtle",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      hp: 38,
      type: "water",
      bgColor: "#aae1ff"
    },
    {
      name: "Charizard",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      hp: 101,
      type: "fire",
      bgColor: "#ffc8aa"
    },
  ];
  register: Register = {
    name: "",
    email: "",
    password: "",
    hasSucceed: false
  }

  addAmount() {
    this.counter += this.counterValue;
  }

  substractAmount() {
    this.counter -= this.counterValue;
  }

  handleChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.counterValue = +element.value
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  addPokemon() {
    this.newPokemon && this.pokemons.push(this.newPokemon);
    this.newPokemon = "";
  }

  deletePokemon() {
    this.pokemons.pop();
  }

  deleteXpokemon() {
    console.log(this.pokemons)
    this.pokemons.splice(this.idToDeletePokemon-1,1)
    console.log(this.pokemons)
  }

  deletePokemonInList(index: number) {
    this.pokemons.splice(index,1)
  }

  handleRegister() {
    console.log(this.register);
    this.register.hasSucceed = true;
  }
}
