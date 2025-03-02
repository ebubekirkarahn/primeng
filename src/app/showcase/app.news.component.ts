import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-news',
    template: `
        <div class="layout-news">
            <div class="layout-news-container" (click)="redirect()">
                <img class="layouts-news-mockup-image" src="assets/showcase/images/topbar-endofsummersale-2021.png">
                <a href="https://www.primefaces.org/store" target="_blank"  style="text-decoration: none" class="layout-news-button">
                    LEARN MORE<i class="pi pi-angle-right"></i>
                </a>
                <a tabindex="0" class="layout-news-close" (click)="hideNews($event)">
                    <i class="pi pi-times"></i>
                </a>
            </div>
        </div>
    `
})
export class AppNewsComponent {

    @Input() active: boolean;

    @Output() onNewsHide: EventEmitter<any> = new EventEmitter();

    hideNews(event: Event) {
        this.onNewsHide.emit();
        event.preventDefault();
    }

    redirect() {
        window.location.href = "https://www.primefaces.org/store";
    }

}
