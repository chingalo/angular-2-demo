import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  application_url = 'http://127.0.0.1:8080/demo/';
  orgunit: any;

  //oraganisation unit configuration
  tree_config = {
    show_search : true,
    multiple : false,
    search_text : 'Search',
    loading_message: 'Loading Organisation units...'
  };

  // set selected organisation unit
  onSelected ( selected_orgunit ) {
    this.orgunit = selected_orgunit;
  }
}
