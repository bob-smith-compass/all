import React, { Component } from 'react';
import {Observable, from} from 'rxjs';
let nums$ = from([1,2,3,4,5,6]);
/**
 * Observable:
 * subscribe()
 */

 /**
  * Observer:
  * next()
  * error()
  * complete()
  */
 let observer = {
     next: value => console.log(value),
     error: err => console.error(`Error: ${err}`),
     complete: () => console.log('All done!')
 }

 /**
  * subscrive to an observable passing an observer
  */
 nums$.subscribe(observer);

export default class MObservable extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
