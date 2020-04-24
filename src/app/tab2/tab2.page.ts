import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../Services/remote.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  monsterName: any = []

  constructor(public remoteService: RemoteService) { }

  ngOnInit() {

    this.remoteService.GetMonsters().subscribe(
      (data) => {
        this.monsterName = data.results;
      }
    );
  }

}
