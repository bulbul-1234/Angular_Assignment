import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appApply]'
})
export class ApplyDirective {

  constructor(private elementref: ElementRef) { }

  ngOnInit(): void {
    this.elementref.nativeElement.style.backgroundcolor = 'blue';
}

}
