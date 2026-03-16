import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  imports: [],
  templateUrl: './ciclo.html',
  styleUrl: './ciclo.scss',
})
export class Ciclo implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() valorInicial: number = 10;

 constructor() {
    console.log('constructor');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit(){
    console.log('ngOnInit');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
