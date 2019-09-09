import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { max } from '../../../node_modules/rxjs/operators';

export const typeEmptyValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    console.log(control);
    console.log(control.value);

    console.log(control.value == '' ? {'emptyTypeReached':true} : null);
    
    return control.value == '' ? {'emptyTypeReached':true} : null;
}

@Directive({
    selector: '[appEmptyTypeReached]',
    providers: [{provide: NG_VALIDATORS, useExisting: typeEmptyValidatorDirective, multi: true}]
})
export class typeEmptyValidatorDirective implements Validator{
    validate(control: AbstractControl): ValidationErrors {
        return typeEmptyValidator(control)
      }
}