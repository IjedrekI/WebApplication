import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoveService } from '../move.service';

@Component({
  selector: 'app-new-move',
  templateUrl: './new-move.component.html',
  styleUrls: ['./new-move.component.scss']
})
export class NewMoveComponent implements OnInit {
  newMove: FormGroup;

  constructor(private fb: FormBuilder,
              private moveService: MoveService  ) { }

  ngOnInit() {
    this.newMove = this.fb.group({
      title: ['', Validators.required],
      overview: ['', Validators.required],
      director: ['' ],
      posterPath: [''],
      rating: [''],
      year: ['']
    });
  }

  onNewMovieClick() {
    if (this.newMove.valid) {
     this.moveService.addFilm(this.newMove.value);
    }
  }

}
