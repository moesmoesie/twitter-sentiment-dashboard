import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  showMenu = false
  showMenuBreakPoints = [
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]

  checkMediaQuerie(breakpoints: string[], currentBreakpoints: { [key: string]: boolean }){
    for(let breakpoint of breakpoints){
      console.log(breakpoint)
      if(currentBreakpoints[breakpoint]){
        return true
      }
    }
    return false
  }

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe(result => {
        this.showMenu = this.checkMediaQuerie(this.showMenuBreakPoints, result.breakpoints);
      });
  }
}
