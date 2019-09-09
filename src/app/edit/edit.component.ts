import { Component, OnInit, Input,NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {NgForm,NgModel,FormsModule ,FormControl} from '@angular/forms';

import { Entry }         from '../entry';
import { EntryService }  from '../entry.service';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: [ './edit.component.css' ]
  })
  export class EditComponent implements OnInit {
    @Input() entry: Entry;
    

    constructor(private route: ActivatedRoute,
    private entryService: EntryService,
    private location: Location) { }
  
    ngOnInit() {
      this.getEntry();
    }
    
    getEntry(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.entryService.getEntry(id)
        .subscribe(entry => this.entry = entry);
    }

    goBack(): void {
      this.location.back();
    }
  
    save(): void {
      
      this.entryService.updateEntry(this.entry)
        .subscribe(() => this.goBack());
    }
    delete():void{
      this.entryService.deleteEntry(this.entry).subscribe();
      this.location.back();
    }

  }