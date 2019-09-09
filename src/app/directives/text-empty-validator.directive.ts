import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { max } from '../../../node_modules/rxjs/operators';

export const textEmptyValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    console.log(control);
    console.log(control.value);

    console.log(control.value == '' ? {'emptyTextReached':true} : null);
    
    return control.value == '' ? {'emptyTextReached':true} : null;
}

@Directive({
    selector: '[appEmptyTextReached]',
    providers: [{provide: NG_VALIDATORS, useExisting: textEmptyValidatorDirective, multi: true}]
})
export class textEmptyValidatorDirective implements Validator{
    validate(control: AbstractControl): ValidationErrors {
        return textEmptyValidator(control)
      }
}