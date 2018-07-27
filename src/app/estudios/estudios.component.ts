import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  items = [
    {
      title: "Certificacion CCNA1",
      body: "Certificacion de diseño y creacion de redes computacionales, curso de routing and switching.",
      url: "https://mdbiznews.commerce.maryland.gov/wp-content/uploads/2017/02/cicso-system-logo-min-e1487279547237.jpg"
    },
    {
      title: "Angular 6",
      body: "Certificacion Udemy",
      url: "https://angular.io/assets/images/logos/angular/angular.svg"
    },
    {
      title: "Unity",
      body: "Certificacion de diseño y creacion de videojuegos con Unity",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Unity_Technologies_Logo.svg"
    },
    {
      title: "Facultad de Ingenieria Mecanica y Electrica",
      body: "Ingeniero Administrador de Sistemas con especialidad en programacion y desarrollo de software.",
      url: "http://jagarza.fime.uanl.mx/img/logofime.png"
    },
    {
      title: "Preparatoria #23 - UANL",
      body: "Bachillerato general.",
      url: "https://yt3.ggpht.com/-2EBUb3U1YGE/AAAAAAAAAAI/AAAAAAAAAAA/mCSQPuS6-Og/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
