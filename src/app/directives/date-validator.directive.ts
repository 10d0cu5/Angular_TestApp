import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { max } from '../../../node_modules/rxjs/operators';

export const dateValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    console.log(control.value);
    const date_entered = new Date(control.value);
    console.log(date_entered);

    var today = new Date();
    var maxDate = new Date(today.getFullYear(),today.getMonth() , today.getDate());
    console.log(maxDate);
    console.log(date_entered > maxDate ? {'dateMaxReached':true} : null);
    return date_entered > maxDate ? {'dateMaxReached':true} : null;

}

@Directive({
    selector: '[appDateMaxReached]',
    providers: [{provide: NG_VALIDATORS, useExisting: dateValidatorDirective, multi: true}]
})
export class dateValidatorDirective implements Validator{
    validate(control: AbstractControl): ValidationErrors {
        return dateValidator(control)
      }
}