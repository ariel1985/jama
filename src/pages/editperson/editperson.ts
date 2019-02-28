import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the EditpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editperson',
  templateUrl: 'editperson.html',
})
export class EditpersonPage {

  errorMessage: string;
  person={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) { }

  ionViewDidLoad() {
    this.loadPerson();
  }


  loadPerson() {
    this.restProvider.getDataById()
       .subscribe(
         data => {
         	this.person = data;
         },
         error =>  this.errorMessage = <any>error);
  }

  savePerson() { 
  	this.restProvider.editPerson(this.person);
  	this.navCtrl.push(HomePage);
  }
}
