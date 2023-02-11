import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions-map',
  templateUrl: './submissions-map.component.html',
  styleUrls: ['./submissions-map.component.css']
})
export class SubmissionsMapComponent {

  /** For MAP CODE START HERE */
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom : 5,
    
  }

  /* Single Marker
  marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  }*/

  //Multiple Markers
  marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
  marker2 = { position: { lat: 39.7, lng: -76.0 } };
  marker3 = { position: { lat: 37.9, lng: -76.8 } };

  markers = [this.marker1, this.marker2, this.marker3];

  /*let data = "Test";
  let infoWindow = new google.maps.InfoWindow({
      content: data
    });
  google.maps.event.addListener(markers, 'click', function() {
      infoWindow.open(map,markers);
    });*/

}
