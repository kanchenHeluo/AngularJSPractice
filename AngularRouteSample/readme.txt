Why Need SPA (Single Page Application)?

To Enable Multiple Views in Single Page via Route:
index.html ---> layout view
deep link ----> partial view

How to implement deep linking ?
(1)Need inject module: ngRoute, include: angular-route.js

(2)core Service: $route, $location

(3)provider:$routeProvider, $locationProvider
Providers are objects that provide (create) instances of services and expose configuration APIs that can be used to control the creation and runtime behavior of a service. In case of the $route service, the $routeProvider exposes APIs that allow you to define routes for your application.


$locationProvider:
HTML5 Mode, a configuration mode of $location service in angularjs, uses HTML5 History API which one of its usage is to enrich client side interaction in a web application. When the $location service configured with this mode, browser will not do a full page reload when its URL is changed, without the need of hashbang #! in part of URL.

(4)template: ng-view
The role of the ngView directive is to include the view template for the current route into the layout template.