import { Component, OnInit, Input } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conocimientos-detail',
  templateUrl: './conocimientos-detail.component.html',
  styleUrls: ['./conocimientos-detail.component.css']
})
export class ConocimientosDetailComponent implements OnInit {
  conocimiento:string;
  constructor(router:ActivatedRoute) {
    this.conocimiento = router.snapshot.paramMap.get('name');
   }

  ngOnInit() {
  }

}
