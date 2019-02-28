var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the AddpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddpersonPage = /** @class */ (function () {
    function AddpersonPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.person = { id: '', first_name: '', last_name: '', email: '' };
    }
    AddpersonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddpersonPage');
    };
    AddpersonPage.prototype.saveNew = function () {
        console.log(this.person);
        //this.restProvider.addPerson(this.user)
        /*.then((result) => {
            console.log(result);
            }, (err) => {
            console.log(err);
            });*/
    };
    AddpersonPage = __decorate([
        Component({
            selector: 'page-addperson',
            templateUrl: 'addperson.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, RestProvider])
    ], AddpersonPage);
    return AddpersonPage;
}());
export { AddpersonPage };
//# sourceMappingURL=addperson.js.map