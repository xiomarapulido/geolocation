import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { Geolocation as Location } from '../../app/models/geolocation.model'
import { GeolocationService } from '../../app/services/geolocation.service';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {

    latitude: any;
    longitude; any;
    cardId: number;
    email: string = '';
    location: Location;

    constructor(public alertCtrl: AlertController,
        public geo: Geolocation,
        private geolicationService: GeolocationService) { }

    ngOnInit() {
        this.getLocation();
    }

    getLocation() {
        this.geo.getCurrentPosition().then(pos => {
            this.latitude = pos.coords.latitude;
            this.longitude = pos.coords.longitude;
        })
    }

    addLocation() {
        if (!this.cardId) {
            let alert = this.alertCtrl.create({
                subTitle: 'El número de documento es oblicatorio.',
                buttons: ['OK']
            });
            alert.present();

            return;
        }

        this.location = {
            cardId: this.cardId,
            email: this.email,
            latitude: this.latitude,
            longitude: this.longitude
        }

        this.geolicationService.addGeolocation(this.location).subscribe((res) => {
            let alert = this.alertCtrl.create({
                subTitle: res['data'],
                buttons: ['OK']
            });
            alert.present();
            this.clear();
        })
    }

    clear() {
        this.cardId = null;
        this.email = '';
    }


}
