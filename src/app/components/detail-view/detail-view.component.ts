import { MainService } from './../../service/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  constructor(private service:MainService) { }
relations={}
  ngOnInit(): void {
    let detailViewURL = sessionStorage.getItem('detailURL')||"";
    this.service.getAgenciesDetail(detailViewURL).subscribe(data=>{
      this.relations= data.data.relationships;
      console.log(data);

    })


  }

  getKeysOfObject(object:{}){
    return Object.keys(object);
  }

}
