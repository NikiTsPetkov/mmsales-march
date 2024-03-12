import { Component } from '@angular/core';
import { Shop } from './model/shop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  viva: number = 22.8;
  caristal: number = 66.9610666666667;
  hotDrinks: number = 1225.03333333333;
  days: number = 31;
  sum1: number = 0;
  sum2: number = 0;
  sum3: number = 0;
  month: string = 'Март';
  data: Shop[] = [
    {
      day: 1,
      vivaArticles: 2,
      hotDrinksArticles: 48,
      caristalArticles: 4,
    },
    {
      day: 2,
      vivaArticles: 5,
      hotDrinksArticles: 85,
      caristalArticles: 5,
    },
    {
      day: 3,
      vivaArticles: 2,
      hotDrinksArticles: 31,
      caristalArticles: 1,
    },
    {
      day: 4,
      vivaArticles: 0,
      hotDrinksArticles: 39,
      caristalArticles: 1,
    },
    {
      day: 5,
      vivaArticles: 4,
      hotDrinksArticles: 37,
      caristalArticles: 4,
    },
    {
      day: 6,
      vivaArticles: 4,
      hotDrinksArticles: 49,
      caristalArticles: 3,
    },
    {
      day: 7,
      vivaArticles: 7,
      hotDrinksArticles: 53,
      caristalArticles: 1,
    },
    {
      day: 8,
      vivaArticles: 2,
      hotDrinksArticles: 56,
      caristalArticles: 3,
    },
    {
      day: 9,
      vivaArticles: 6,
      hotDrinksArticles: 66,
      caristalArticles: 0,
    },
    {
      day: 10,
      vivaArticles: 6,
      hotDrinksArticles: 38,
      caristalArticles: 2,
    },
    {
      day: 11,
      vivaArticles: 0,
      hotDrinksArticles: 46,
      caristalArticles: 1,
    },
  ];
  sumViva = this.data.forEach((item) => {
    this.sum1 += Number(item.vivaArticles);
    console.log(this.sum1);
  });

  sumHot = this.data.forEach((item) => {
    this.sum2 += Number(item.hotDrinksArticles);
    console.log(this.sum2);
  });

  sumCaristal = this.data.forEach((item) => {
    this.sum3 += Number(item.caristalArticles);
    console.log(this.sum3);
  });
  // flag100: boolean =
  //   this.sum2 - (this.mm100 * this.data.length) / this.days > 0;
  returnCondition(sum: number, fuel: number): string {
    // console.log(sum - (fuel * this.data.length) / this.days);
    return sum - (fuel * this.data.length) / this.days > 0
      ? 'сме наваксали с'
      : 'сме изостанали с';
  }
  condition1 = this.returnCondition(this.sum1, this.viva);
  condition2 = this.returnCondition(this.sum2, this.hotDrinks);
  condition3 = this.returnCondition(this.sum3, this.caristal);
}
