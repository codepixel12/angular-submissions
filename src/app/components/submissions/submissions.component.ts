import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent {

  /**SHOW/HIDE MAP/LIST INNER Component */
  isSelectType: boolean = true;

  responseForToggleType(responseOfType: string): void {
    console.log("type value::",responseOfType);
    if(responseOfType == 'map')
    {
      this.isSelectType = true;
    }
    else
    {
      this.isSelectType = false;
    }
  }

}
