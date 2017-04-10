import { Directive, Input, ElementRef, Renderer } from '@angular/core';


@Directive({
	selector: '[hover]',
	host: {
		'(mouseover)': 'onMouseOver()',
		'(mouseout)': 'onMouseOut()'
	}
})

export class HoverDirective {
	
	constructor(private _element: ElementRef, private renderer: Renderer) {
 	}


	private mouseOver(condition: boolean){
		this.renderer.setElementClass(this._element.nativeElement.lastElementChild, "selectedItem-close-over", condition);
	}
	private mouseOut(condition: boolean){
		this.renderer.setElementClass(this._element.nativeElement.lastElementChild, "selectedItem-close-out", condition);
	}
	onMouseOver() {
		this.mouseOver(true);
		this.mouseOut(false);
	}

	onMouseOut() {
		this.mouseOver(false);
		this.mouseOut(true);
	}


}