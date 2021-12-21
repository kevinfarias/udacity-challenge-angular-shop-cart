import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  state$?: Observable<object>;
  fullname: string = '';
  totalAmount: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    this.fullname = window.history.state.fullname;
    this.totalAmount = window.history.state.totalAmount;

    console.log(`state`, this.state$);
  }
}
