import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { max } from '../../../node_modules/rxjs/operators';

export const valueStructuralValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    
    let value = control.value;
    
    if(value == ''){//value empty
        return {'emptyValueReached':true};
    }else{ //value available:
        if (/[a-zA-Z]/.test(value)) {
            return {'textValueReached':true};
        }
        let value_cleaned = value.replace('.','');
        let afterComma = '';
        if(value_cleaned.indexOf(',') !== -1){
            value_cleaned = value_cleaned.substring(0,value_cleaned.indexOf(','));
            afterComma = value.substring(value.indexOf(',')+1,value.length);
        }
        //testing for min-value:
        if(parseInt(value_cleaned) < 50 ){
            return {'lowestValueReached':true};
        }else if(parseInt(value_cleaned) > 20000000){
            return {'highestValueReached':true};
        }
        if(afterComma.length > 2){
            return {'commaValueReached':true};
        }
    }
}

@Directive({
    selector: '[appStructuralValueReached]',
    providers: [{provide: NG_VALIDATORS, useExisting: valueStructuralValidatorDirective, multi: true}]
})
export class valueStructuralValidatorDirective implements Validator{
    validate(control: AbstractControl): ValidationErrors {
        return valueStructuralValidator(control)
      }
}