import { HttpClient } from '@angular/common/http';
import { Beer } from './../../services/model/beer';
import { BeerService } from './../../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfBeers: Beer[] = [];

  constructor(
    private beerService: BeerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.beerService.findAll().subscribe(beers => {
      this.listOfBeers = beers;
    });
  }

  edit(id: number | undefined) {
    if(id) {
      this.router.navigate([`/update/${id}`]);
    }
  }

  deleteById(id: number | undefined) {
    if(id){
      this.beerService.deleteById(id)
        .subscribe(() => {
          this.ngOnInit();
      });

    }

  }
}
