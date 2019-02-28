import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { AddpersonPage } from '../../pages/addperson/addperson';
import { EditpersonPage } from '../../pages/editperson/editperson';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  people = this.rest.getData();
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) { }

  ionViewDidLoad() {
  }

  editPerson(id) {
  	this.rest.personId = id;
  	this.navCtrl.push(EditpersonPage);
  }

  addPerson() {
  	this.navCtrl.push(AddpersonPage);
  }

}
