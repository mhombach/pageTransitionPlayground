import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'pageTransitionPlayground';

  constructor(private router: Router) {

  }

  async navPage1() {
    // @ts-ignore
    const transition = document.createDocumentTransition()
    await transition.start(() => {
      this.router.navigateByUrl('/page1');
    });
  }

  async navPage2() {
    // @ts-ignore
    const transition = document.createDocumentTransition()
    await transition.start(() => {
      this.router.navigateByUrl('/page2');
    });
  }
}
