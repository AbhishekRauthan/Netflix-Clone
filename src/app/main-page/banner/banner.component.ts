import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MdData, Res } from 'src/app/Interface/md-data';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnChanges {

  constructor(private serve: MainPageService) { }

  @Input() originals: string;

  bannerDetails: MdData;

  ngOnChanges(): void {
    this.serve.getRows(this.originals).subscribe((res: Res) => {
      this.bannerDetails = res.results[
        Math.floor(Math.random() * res.results.length - 1)
      ]
    });
  }

  backImg() {
    return `https://images.tmdb.org/t/p/original${this.bannerDetails?.backdrop_path}`
  }

  truncate(str:string, n:number) {
    return str.length > n ? str.substr(0, n-1) + '...' : str;
  }

}
