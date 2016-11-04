import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'typing',
    templateUrl: 'typing-effect.html'
})
export class TypingEffect {

    @Input() timeInSeconds: any;
    @Input() message: any;
    @Input() timeout: number = 40;

    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
        console.log(this.timeInSeconds);
        setTimeout(() => console.log(this.message), 1000);
        this.type(this.message);
    }

    t = [];

    type(message) {
        console.log('chamou');
        this.t.push(setTimeout(() => {
            if (message[0] === "^") {
                this.message += "<br/>";
            } else {
                this.message += message[0];
            }
            if (!message.slice(1)) {
                return 1;
            } else {
                this.type(message.slice(1));
            }
        }, this.timeout));
    }

    clear(target) {
        target = document.getElementById(target);
        this.t.map(function (el) {
            window.clearTimeout(el);
        });
        this.t = [];
        target.empty();
    }
}
