import { BeerService } from './../../services/beer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Beer } from './../../services/model/beer';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, empty, Subject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  beer: Beer = {
    name: '',
    brand: '',
    quantity: 0
  }

  error = new Subject<boolean>();
  
  constructor(
    private router: Router,
    private beerService: BeerService,
    private activetdRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activetdRoute.snapshot.paramMap.get('id');

    if(id) {
      this.beerService.findById(parseInt(id))
        .pipe(
          catchError(error => {
            this.error.next(error);
            console.error(error);
            return empty();
          })
        )
        .subscribe((foundBeer) => this.beer = foundBeer);
    }
  }

  save() {
    this.beerService.create(this.beer)
      .subscribe(() => { 
        this.router.navigate(['/']);
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
