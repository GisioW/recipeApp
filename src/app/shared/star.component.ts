import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl:  './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

  @Input() rating = 0;
  startWith = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


  ngOnChanges(): void {
    this.startWith = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
