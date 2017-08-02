import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicModule} from "ionic-angular";
import {SelectModule} from "@co.mmons/ionic-extensions";
import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    entryComponents: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {}, {
            links: [
                {component: HomePage, name: "home"}
            ]
        }),
        SelectModule
    ],
    bootstrap: [
        IonicApp
    ]
})
export class AppModule {
}
