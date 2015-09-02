/// <reference path="typings/angular2/angular2.d.ts" />
import { bootstrap } from 'angular2/angular2';
import { RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import { Component, View } from 'angular2/angular2';

import { Start } from './components/start';
import { About } from './components/about';
import { Contact } from './components/contact';

@Component({
    selector: 'app'
})
@View({
    directives: [RouterOutlet, RouterLink],
    template: `
    <nav>
      <ul>
        <li><a router-link="start">Start</a></li>
        <li><a router-link="about">About</a></li>
        <li><a router-link="contact">Contact</a></li>
      </ul>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
    { path: '/', component: Start, as: 'start'},
    { path: '/about', component: About, as: 'about'},
    { path: '/contact', component: Contact, as: 'contact'}
])
class App {

}

bootstrap(App, [routerInjectables]);
