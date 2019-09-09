import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../Entry';
import { Location } from '@angular/common';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: [ './add.component.css' ]
  })
  export class AddComponent implements OnInit {
    
  
    constructor(private entryService: EntryService,private location: Location) { }
  
    ngOnInit() {
      
    }
    
    add(date: string,type:string,text:string,value:string): void {
      this.entryService.addEntry({ date,type,text,value } as Entry)
        .subscribe();
      this.location.back();
    };
    
  }