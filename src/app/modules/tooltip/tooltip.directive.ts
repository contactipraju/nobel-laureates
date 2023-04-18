import { Input, Directive, Injector, HostListener } from '@angular/core';
import { ApplicationRef, ElementRef, ComponentRef, EmbeddedViewRef } from '@angular/core';

// TODO: ComponentFactoryResolver is deprecated. Fix this later
import { ComponentFactoryResolver } from '@angular/core';

import { TooltipComponent } from "./tooltip.component";

@Directive({
	selector: '[myTooltip]'
})
export class TooltipDirective {
	@Input() myTooltip = '';

	private componentRef: ComponentRef<any> | null = null;

	constructor(
		private elementRef: ElementRef,
		private appRef: ApplicationRef,
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector
	) {

	}

	private setTooltipComponentProperties() {
		if (this.componentRef !== null) {
			this.componentRef.instance.tooltip = this.myTooltip;
			const {left, right, bottom} = this.elementRef.nativeElement.getBoundingClientRect();
			this.componentRef.instance.left = (right - left) / 2 + left;
			this.componentRef.instance.top = bottom;
		}
	}

	@HostListener('mouseenter')
	onMouseEnter(): void {
		if (this.componentRef === null) {
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
			this.componentRef = componentFactory.create(this.injector);
			this.appRef.attachView(this.componentRef.hostView);

			const domElem = 
				(this.componentRef.hostView as EmbeddedViewRef<any>)
				.rootNodes[0] as HTMLElement;       

			document.body.appendChild(domElem);
			this.setTooltipComponentProperties();
		}
	}

	@HostListener('mouseleave')
	onMouseLeave(): void {
		this.destroy();
	}

	ngOnDestroy(): void {
		this.destroy();
	}

	destroy(): void {
		if (this.componentRef !== null) {
			this.appRef.detachView(this.componentRef.hostView);
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}
}
