import {
    Directive, ViewContainerRef, TemplateRef,
    Input, Attribute, SimpleChanges
} from "@angular/core";

@Directive({
    selector: "[pagerCounterOf]"
})
export class PagerDirective {

    private _currentPage: number;
    private _countOfFilms: number;
    private _countOfPages: number;
    private _startPageInterval: number;
    private _endPageInterval: number;
    private _totalPageOnView: number = 5;
    isSpecialFromleft: boolean = false;
    isSpecialFromRight: boolean = false;
    private _calculatePagegValues: number[];

    constructor(private container: ViewContainerRef
        , private template: TemplateRef<Object>) {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        for (let i = this._startPageInterval; i <= this._endPageInterval; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i));
        }
    }

      // 0 - текущая страница
    // 1 - общее количество страниц
    @Input("pagerCounterOf")
    set calculatePagegValues(newValue: number[]) {
        this._currentPage = newValue[0];
        this._countOfPages = newValue[1];
        this._calculatePagegValues = newValue;
        this.CalculateInterval();

    }

    CalculateDefaultStartInterval(currentPage: number): number {

        if (currentPage <= Math.ceil(this._totalPageOnView / 2)) {
            return 1;
        }
        else {
            return currentPage - Math.floor(this._totalPageOnView / 2);
        }

    }

    CalculateDefaultEndInterval(currentPage: number, totalPageCount: number, startPageInterval: number): number {

        if (totalPageCount - currentPage >= Math.ceil(this._totalPageOnView / 2)) {
            return currentPage + (this._totalPageOnView - (currentPage - startPageInterval)) - 1;
        }
        else {
            return totalPageCount;
        }
    }

    CalculateInterval() {

        if (this._countOfPages <= this._totalPageOnView) {
            this._startPageInterval = 1;
            this._endPageInterval = this._countOfPages;
        } 
        else if (this._countOfPages - this._currentPage < 2) {
            this._endPageInterval = this._countOfPages;
            this._startPageInterval = this._countOfPages - (this._totalPageOnView - 1);
        } 
        else {
            this._startPageInterval = this.CalculateDefaultStartInterval(this._currentPage);
            this._endPageInterval = this.CalculateDefaultEndInterval(this._currentPage, this._countOfPages, this._startPageInterval);
        }

    }
}

class CounterDirectiveContext {
    constructor(public $implicit: any) { }
}