import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input()
  public gif!: Gif;

  /* Convierte a la propiedad gif en algo requerido  */
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
