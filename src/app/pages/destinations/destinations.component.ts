import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DestinationService } from 'src/app/@core/destination.service';

export interface Destination {
  airport_name: string;
  city: string;
  country_code: string;
  country_name: string;
  id: number;
  image_url: string;
  top_fives_new_flag: number;
  top_fives_updated_flag: number
}

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  searchTerm: string = '';
  destinations: Destination[] = [];
  loading: boolean = false;
  dataFetched: boolean = false;
  noResultFound: boolean = false;

  constructor(private ds: DestinationService, private message: NzMessageService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDestinations();
  }


  getAllDestinations() {
    this.loading = true;
    this.dataFetched = false;
    this.ds.getAllDestinations().subscribe((data: any) => {
      this.loading = false;
      this.dataFetched = true;
      this.destinations = data.destinations;
    }, err => {
      this.loading = false;
      this.dataFetched = false;
      this.message.error('Ops! Error occured, try again later');
    })
  }

  search() {
    this.loading = true;
    this.dataFetched = false;
    this.noResultFound = false;
    this.ds.searchByCityAndCountry(this.searchTerm).subscribe((data: any) => {
      this.loading = false;
      this.destinations = data.destinations;
      this.searchTerm = "";
      if (this.destinations.length > 0) {
        this.dataFetched = true;
      } else {
        this.noResultFound = true;
      }
      console.log(data);
    }, error => {
      this.loading = false;
      this.dataFetched = false;
      this.message.error('Ops! Error occured, try again later');
    })
  }

  checkDetail(destinationID: number) {
    this.router.navigate([`destination-detail/${destinationID}`])
  }

}
