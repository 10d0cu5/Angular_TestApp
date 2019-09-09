import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cut_text'})
export class CutTextPipe implements PipeTransform{
    transform(text: string): string{
        return text.substr(0,10);
    }
}