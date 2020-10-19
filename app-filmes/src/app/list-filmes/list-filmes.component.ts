import { Component, OnInit } from '@angular/core';
import { Filme } from '../../models/filme';
import { FilmeService } from '../providers/filme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-filmes',
  templateUrl: './list-filmes.component.html',
  styleUrls: ['./list-filmes.component.scss']
})
export class ListFilmesComponent implements OnInit {

  filmes: Observable<Filme[]>

  constructor(private filmeService: FilmeService) { };

  ngOnInit(): void {
    this.filmes = this.filmeService.getAll();
  }

}
