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
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AddpersonPage } from '../../pages/addperson/addperson';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, rest) {
        this.navCtrl = navCtrl;
        this.rest = rest;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getPeople();
    };
    HomePage.prototype.getPeople = function () {
        var _this = this;
        this.rest.getData()
            .subscribe(function (data) {
            console.log(data);
            _this.people = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.addPerson = function () {
        console.log('home.addPerson()');
        this.navCtrl.push(AddpersonPage);
        /*this.rest.addPerson()
            .subscribe(
                 data => {
                    console.log(data)
                    this.people = data
    
                 },
                 error =>  this.errorMessage = <any>error
             );
            console.log('done home add person');*/
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, RestProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map