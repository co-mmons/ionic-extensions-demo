import {Component} from "@angular/core";
import {NavController, ModalController} from "ionic-angular";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage {

    constructor(private navController: NavController, private modalController: ModalController) {
    }


    selectOptions: {label: string, value: string}[];

    ngOnInit() {
        this.selectOptions = [];

        for (let i = 0; i < 50; i++) {
            this.selectOptions.push({label: "Test jakiej dlugiej wiadomosci i opcji" + i, value: "test" + i});
        }
    }
}
