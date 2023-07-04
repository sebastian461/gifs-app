import { Component, Input } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css'],
})
export class GifsCardComponent {
  @Input()
  public gifs: Gif[] = [];
}
