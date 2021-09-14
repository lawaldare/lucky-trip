import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DestinationService } from 'src/app/@core/destination.service';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {

  destinationID: any = "";
  detail: any = {};
  loading: boolean = false;
  dataFetched: boolean = false;

  constructor(private route: ActivatedRoute, private ds: DestinationService, private message: NzMessageService) { }

  searchTerm: string = "";

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.destinationID = params.get("id");
      this.getDestinationDetail(+this.destinationID);
    });
  }


  getDestinationDetail(id: number) {
    this.loading = true;
    this.ds.getDestinationDetail(id).subscribe((data: any) => {
      this.detail = data;
      setTimeout(() => {
        this.loading = false;
        this.dataFetched = true;
      }, 3000)
      console.log(this.detail);
    }, error => {
      this.loading = false;
      this.message.error('Ops! Error occured, try again later');
    })
  }

  search() {
    this.loading = true;
    this.dataFetched = false;
    this.ds.searchByCity(this.searchTerm).subscribe((data: any) => {
      this.loading = false;
      this.searchTerm = "";
      if (data.destinations.length > 0) {
        this.getDestinationDetail(data.destinations[0].id);
      } else {
        this.message.error('Ops! City not found!');
        setTimeout(() => {
          location.reload();
        }, 500)
      }

    }, error => {
      this.loading = false;
      this.dataFetched = false;
      this.message.error('Ops! Error occured, try again later');
    })
  }

}
