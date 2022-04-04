
import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
//import { ApolloQueryObservable } from 'apollo-angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  categories: any[];

  constructor(private apollo: Apollo) {}


  ngOnInit() {
    
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       {
    //         categories {
    //           id
    //           name
    //           timestamp
    //         }
    //       }
    //     `,
    //   })
    //   .valueChanges.subscribe((result: any) => {
    //     this.categories = result?.data?.categories;
    //     //this.loading = result.loading;
    //     //this.error = result.error;
    //   });
   }
}