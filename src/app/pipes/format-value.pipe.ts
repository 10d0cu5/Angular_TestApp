import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { count } from '../../../node_modules/rxjs/operators';

@Pipe({name: 'format_value'})
export class FormatValuePipe extends DatePipe implements PipeTransform{
    transform(value: string): string{
        let pre_comma = value;
        let post_comma = '00';
        if(pre_comma.indexOf(',') !== -1){
            pre_comma = pre_comma.substring(0,pre_comma.indexOf(','));
            post_comma = value.substring(value.indexOf(',')+1,value.length);
        }
        let countDigits = pre_comma.length;
        let pre_comma_edited = pre_comma.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        return pre_comma_edited +','+post_comma+ ' €';
    }
}