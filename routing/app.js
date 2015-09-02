var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var angular2_2 = require('angular2/angular2');
var start_1 = require('./components/start');
var about_1 = require('./components/about');
var contact_1 = require('./components/contact');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_2.Component({
            selector: 'app'
        }),
        angular2_2.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            template: "\n    <nav>\n      <ul>\n        <li><a router-link=\"start\">Start</a></li>\n        <li><a router-link=\"about\">About</a></li>\n        <li><a router-link=\"contact\">Contact</a></li>\n      </ul>\n    </nav>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', component: start_1.Start, as: 'start' },
            { path: '/about', component: about_1.About, as: 'about' },
            { path: '/contact', component: contact_1.Contact, as: 'contact' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);
