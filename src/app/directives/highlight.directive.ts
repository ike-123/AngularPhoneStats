import { Directive , effect, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  iscompleted = input(false);
  element = inject(ElementRef);

  stylesEffect = effect(()=>{
    if(this.iscompleted()){
      this.element.nativeElement.style.backgroundColor = "#d3f9"
    }
  })

}
