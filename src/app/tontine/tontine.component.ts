import { Component, OnInit } from '@angular/core';
import { TontineService } from '../tontine.service';
import { Tontine } from '../tontine';


@Component({
  selector: 'app-tontine',
  templateUrl: './tontine.component.html',
  styleUrls: ['./tontine.component.css']
})
export class TontineComponent implements OnInit {
  tontines : Tontine [] = [];
constructor(private tontineService : TontineService){
  this.tontineService.getTontine().subscribe(data =>this.tontines= data);
}
ngOnInit():void{

}
}
