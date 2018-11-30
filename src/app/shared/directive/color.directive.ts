/**
 * Created by vega on 2017-03-29.
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
    selector:'[mycolor]'
})
export class ColorDirective {
    private defaultColor:string = 'blue';
    constructor(private el: ElementRef) {
        this.el = el;
        this.setColor(this.defaultColor);
    }

    private setColor(color: string) {
        this.el.nativeElement.style.color = color;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.hover('green');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(this.defaultColor);
    }
    // Event method to be called on mouse enter and on mouse leave
    hover(color: string){
             this.setColor(color);
    }
}