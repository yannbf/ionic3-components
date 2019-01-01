import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-card-ui',
  templateUrl: 'list-card-ui.html',
})
export class ListCardUiPage {
  menu:string = 'bolos';

  bolos:any;
  doces:any;
  tortas:any;
  salgados:any;
  encomendas:any;
  bebidas:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public zone:NgZone) {

      this.bolos = [
        {preco:"25,00",nome:"Bolo Fofo de Especiarias",imagemUrl:"./assets/img/lists/bolo01.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"22,00",nome:"Bolo de Rolo",imagemUrl:"./assets/img/lists/bolo02.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"20,00",nome:"Bolo Fofo de Limão",imagemUrl:"./assets/img/lists/bolo03.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"23,00",nome:"Bolo Fofo de Especiarias",imagemUrl:"./assets/img/lists/bolo04.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"30,00",nome:"Bolo Fofo de Fubar com Goiaba",imagemUrl:"./assets/img/lists/bolo05.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
      ];

      this.doces = [
        {preco:"30,00",nome:"Chessescake com frutas vermelhas",imagemUrl:"./assets/img/lists/doce01.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"33,00",nome:"Mousse de Chocolate com Frutas Vermelhas",imagemUrl:"./assets/img/lists/doce02.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"39,00",nome:"Bolo Fofo de Limão",imagemUrl:"./assets/img/lists/bolo03.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"43,00",nome:"Bolo Fofo de Especiarias",imagemUrl:"./assets/img/lists/bolo04.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"31,60",nome:"Bolo Fofo de Fubar com Goiaba",imagemUrl:"./assets/img/lists/bolo05.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
      ];

      this.salgados = [
        {preco:"12,50",nome:"TORTINHA DE PALMITO 140 GRAMAS",imagemUrl:"./assets/img/lists/salgado01.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"33,50",nome:"TORTINHA DE FRANGO 140 GRAMAS",imagemUrl:"./assets/img/lists/salgado02.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"88,50",nome:"QUICHE 3 QUEIJOS",imagemUrl:"./assets/img/lists/salgado03.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"55,50",nome:"QUICHE DE ALHO PORÓ",imagemUrl:"./assets/img/lists/salgado01.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
      ];

      this.tortas = [
        {preco:"43,00",nome:"Torta de Maçã com Crumbe de Canela",imagemUrl:"./assets/img/lists/torta01.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"45,00",nome:"Torta de Morango",imagemUrl:"./assets/img/lists/torta02.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"41,00",nome:"Torta de Chocolate com Menta",imagemUrl:"./assets/img/lists/torta03.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {preco:"43,00",nome:"Torta de Limão",imagemUrl:"./assets/img/lists/torta04.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
      ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCardUiPage');
  }

}
