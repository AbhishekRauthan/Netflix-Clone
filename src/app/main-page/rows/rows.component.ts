import { Component, OnInit, Input } from '@angular/core';
import { MainPageService } from '../main-page.service';
import { MdData } from 'src/app/Interface/md-data';


@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {

  constructor(private serv: MainPageService) { }

  @Input() title: string;
  @Input() fetchUrl: string;
  @Input() isLargeRow = false;

  imgUrl: string = 'https://images.tmdb.org/t/p/original'

  dataArray: MdData[] = [];

  ngOnInit(): void {
    this.serv.getRows(this.fetchUrl).subscribe((res: any) => {
      res.results.forEach(element => {
        this.dataArray.push(element)
      });
    })
  }

  imageUrl(data:MdData, isLarge:boolean) {
    if (isLarge) {
      
      return `${this.imgUrl}${data.poster_path}`
    }
    return `${this.imgUrl}${data.backdrop_path}`
  }

  style() {
    return `row_poster ${this.isLargeRow && "row_poster_large"}`
  }

}
