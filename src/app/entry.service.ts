import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Entry } from './Entry';



@Injectable({ providedIn: 'root' })
export class EntryService {

  private entriesUrl = 'api/entries';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  
  getEntries (): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.entriesUrl)
      .pipe(
        tap(_ => console.log('fetched Entries')),
        catchError(this.handleError<Entry[]>('getEntries', []))
      );
  }

  
  getEntryNo404<Data>(id: number): Observable<Entry> {
    const url = `${this.entriesUrl}/?id=${id}`;
    return this.http.get<Entry[]>(url)
      .pipe(
        map(entries => entries[0]), 
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} entry id=${id}`);
        }),
        catchError(this.handleError<Entry>(`getEntry id=${id}`))
      );
  }

 
  getEntry(id: number): Observable<Entry> {
    const url = `${this.entriesUrl}/${id}`;
    return this.http.get<Entry>(url).pipe(
      tap(_ => console.log(`fetched id=${id}`)),
      catchError(this.handleError<Entry>(`getEntry id=${id}`))
    );
  }


  searchEntries(term: string): Observable<Entry[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Entry[]>(`${this.entriesUrl}/?name=${term}`).pipe(
      tap(_ => console.log(`matching "${term}"`)),
      catchError(this.handleError<Entry[]>('searchEntries', []))
    );
  }

  addEntry (entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.entriesUrl, entry, this.httpOptions).pipe(
      tap((newEntry: Entry) => console.log(`added entry id=${newEntry.id}`)),
      catchError(this.handleError<Entry>('addHero'))
    );
  }

  deleteEntry (entry: Entry | number): Observable<Entry> {
    const id = typeof entry === 'number' ? entry : entry.id;
    const url = `${this.entriesUrl}/${id}`;

    return this.http.delete<Entry>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted entry id=${id}`)),
      catchError(this.handleError<Entry>('deleteEntry'))
    );
  }

  updateEntry (entry: Entry): Observable<any> {
    return this.http.put(this.entriesUrl, entry, this.httpOptions).pipe(
      tap(_ => console.log(`updated entry id=${entry.id}`)),
      catchError(this.handleError<any>('updateEntry'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
