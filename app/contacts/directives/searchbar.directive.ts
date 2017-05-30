import { Directive, ElementRef, HostListener, Renderer, OnInit } from '@angular/core';

@Directive({
	selector: '[mySearchBar]'

})

export class SearchBarDirective implements OnInit {
	constructor(private el: ElementRef, private renderer: Renderer){}


		private changeWidth(newWidth: string){
			this.renderer.setElementStyle(this.el.nativeElement, 'width', newWidth)
		}

		ngOnInit(): void{
			this.setInitialWidth();
		}

		setInitialWidth(): void{
			this.renderer.setElementStyle(this.el.nativeElement, 'width', '50px')
		}

		@HostListener('click') onMouseClick(){
			this.changeWidth('100px');
		}

		@HostListener('blur') onLoseFocus(): void{
			this.setInitialWidth();
		}
}