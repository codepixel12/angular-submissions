import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
 @Output() isSelectedTypeForParent = new EventEmitter();

  //event handler for the radio buttons change event
  radioChangeHandler (event: any) {
   
    this.isSelectedTypeForParent.emit(event.target.value);
  }

}
