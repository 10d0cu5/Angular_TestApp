import { Component, OnInit } from '@angular/core';
import { Entry } from '../Entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {
  entries: Entry[];
  filteredEntries: Entry[];
  sortType: string;
  sortReverse: boolean = false;
  

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.getEntries();

  }

  getEntries(): void {
    this.entryService.getEntries()
      .subscribe(entries => this.filteredEntries = entries);
  }

  filterEntries(search: string) {
      if(search==''){
        this.entryService.getEntries()
        .subscribe(entries => this.filteredEntries = entries); 
      }else{
        console.log("FILTER!");
      console.log(search);
      this.filteredEntries = this.filteredEntries.filter(o =>
        Object.keys(o).some(k => {
          console.log(o);
          if (typeof o[k] === 'string')
            return o[k].toLowerCase().includes(search.toLowerCase());
          })
      );
      }   
      
  }

  
  sortEntries(property) {
    console.log(property);
    this.sortType = property;
    this.sortReverse = !this.sortReverse;
    console.log(this.entries);
    this.filteredEntries.sort(this.dynamicSort(property));
    console.log(this.entries);
  }

  dynamicSort(property) {
    let sortOrder = -1;

    if (this.sortReverse) {
        sortOrder = 1;
    }
    return function (a, b) {
        let result = undefined;
        console.log(a[property]);
        console.log(b[property]);
        if(property == 'id'){
          result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }else if(property == 'date'){
          let date_a = new Date(a[property]);
          let date_b = new Date(b[property]);
          result = (date_a < date_b) ? -1 : (date_a > date_b) ? 1 : 0;
        }else if(property == 'value'){
          let value_a =  parseFloat(a[property]);
          let value_b = parseFloat(b[property]);
          result = (value_a < value_b) ? -1 : (value_a > value_b) ? 1 : 0;
        }
        return result;
    } 
  }
}