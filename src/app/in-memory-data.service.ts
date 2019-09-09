import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './Entry';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entries = [
      {
        "id":0,
        "date":"2019-09-02",
        "type":"buy",
        "text":"BUY ABEA 2",
        "value":"50,45"
    },
    {
        "id":1,
        "date":"2019-09-03",
        "type":"sell",
        "text":"SELL ABEA 2",
        "value":"20000,50"
    },
    {
        "id":2,
        "date":"2019-09-03",
        "type":"buy",
        "text":"BUY ABEA 3",
        "value":"10000"
    },
    {
        "id":3,
        "date":"2019-09-04",
        "type":"sell",
        "text":"LONG TEXT LONG TEXT LONG TEXT",
        "value":"12300,25"
    },
    {
        "id":4,
        "date":"2019-09-04",
        "type":"buy",
        "text":"BUY ABEA 4",
        "value":"999999,12"
    }
    ];
    return {entries};
  }

  
  genId(entries: Entry[]): number {
    return entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 0;
  }
}