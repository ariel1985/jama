import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AgePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

  	let personYear = new Date(value).getFullYear();
	let currentYear = new Date().getFullYear();

	//console.log(currentYear, personYear);

    return currentYear-personYear;
  }
}
