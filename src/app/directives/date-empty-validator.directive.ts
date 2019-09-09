import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { max } from '../../../node_modules/rxjs/operators';

export const dateEmptyValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    console.log(control);
    console.log(control.value);

    console.log(control.value == '' ? {'emptyDateReached':true} : null);
    
    return control.value == '' ? {'emptyDateReached':true} : null;
}

@Directive({
    selector: '[appEmptyDateReached]',
    providers: [{provide: NG_VALIDATORS, useExisting: dateEmptyValidatorDirective, multi: true}]
})
export class dateEmptyValidatorDirective implements Validator{
    validate(control: AbstractControl): ValidationErrors {
        return dateEmptyValidator(control)
      }
}