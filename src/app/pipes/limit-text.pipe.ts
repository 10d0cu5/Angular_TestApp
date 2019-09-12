import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cut_text'})
export class CutTextPipe implements PipeTransform{
    transform(text: string): string{
        if(text.length > 10){
            return text.substr(0,10) + '...';
        }else{
            return text;
        }
        
    }
}