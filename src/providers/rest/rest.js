var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        // private apiUrl = 'https://restcountries.eu/rest/v2/all';
        this.apiUrl = 'https://tekdi-challenges.appspot.com/api/People';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getData = function () {
        return this.http.get(this.apiUrl).pipe(map(this.extractData), catchError(this.handleError));
    };
    RestProvider.prototype.addPerson = function (person) {
        console.log('rest.addperson()');
        console.log(person);
        var headers = new HttpHeaders()
            .set("Content-Type", "application/json")
            .set("User-Agent", "googlebot");
        var item = {
            name: "Gitesh Kumar 3",
            email: "gitesh@motorola.biz",
            dob: "2000-10-10",
            country: "IN",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        };
        console.log('item');
        console.log(item);
        // return  this.http.post(this.apiUrl, JSON.stringify(person), {headers: headers})
    };
    RestProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    RestProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RestProvider);
    return RestProvider;
}());
export { RestProvider };
//# sourceMappingURL=rest.js.map