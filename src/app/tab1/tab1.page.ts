import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../Services/remote.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  spellName: any = []


  constructor(public remoteService: RemoteService) { }

  ngOnInit() {
    this.remoteService.GetSpells().subscribe(
      (data) => {
        this.spellName = data.results;
      }
    );

  }

}
