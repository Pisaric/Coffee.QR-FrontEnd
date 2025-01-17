import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
    backgroundImage: string = ''

    constructor(private router: Router) {}

    login(): void {
        this.router.navigate(['/login'])
    }
    // ngOnInit() {
    //   const backgrounds = [
    //     './assets/landing1.jpg',
    //     './assets/landing2.jpg',
    //     './assets/landing3.jpg',
    //   ];
    //   this.preloadImages(backgrounds);
    //   // Select a random background image
    //   const randomIndex = Math.floor(Math.random() * backgrounds.length);
    //   this.backgroundImage = backgrounds[randomIndex];
    // }
    // preloadImages(imageArray: string[]) {
    //   imageArray.forEach((image) => {
    //     const img = new Image();
    //     img.src = image;
    //   });
    // }
}
