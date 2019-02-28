import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../../pages/home/home';


/**
 * Generated class for the AddpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addperson',
  templateUrl: 'addperson.html',
})
export class AddpersonPage {
  
  message: string="";

  person = {
			name: "",
			email: "",
			dob: "",
			country: "",
			avatar: ""
	  	};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpersonPage');
  }

  saveNew() { 
		this.message = '';
  		console.log(this.person);
  		if (this.person.name=='') {
  			this.message += 'Please fill person name.'
  			return false
  		}
  		if (this.person.email=='') {
  			this.message += 'Please fill person email.'
  			return false
  		}
  		if (this.person.country=='') {
  			this.message += 'Please fill person country.'
  			return false
  		}
  		if (this.person.dob=='') {
  			this.message += 'Please fill person date of birth.'
  			return false
  		}
  			

		this.restProvider.addPerson(this.person)
		this.navCtrl.push(HomePage);
	}

}






