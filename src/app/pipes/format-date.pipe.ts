import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'format_date'})
export class FormatDatePipe extends DatePipe implements PipeTransform{
    transform(value: string): string{
        return super.transform(value, "dd.MM.yyyy");
    }
}