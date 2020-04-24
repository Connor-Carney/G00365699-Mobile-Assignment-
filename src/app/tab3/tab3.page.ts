import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../Services/remote.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  classNames: any = []

  constructor(public remoteService: RemoteService) { }

  ngOnInit() {

    this.remoteService.GetClasses().subscribe(
      (data) => {
        this.classNames = data.results;
      }
    );
  }

}