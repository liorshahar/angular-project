import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a  test",
      "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.uniestudos.com.br%2Fassets%2Fimg%2Ficon-image.svg&imgrefurl=http%3A%2F%2Fwww.uniestudos.com.br%2Fassets%2Fimg%2F&docid=NAKDYTO7pW0gtM&tbnid=BjqVgcrRUpoK8M%3A&vet=10ahUKEwjphZOwtKLhAhWi6uAKHQ9-CzkQMwhwKAkwCQ..i&w=800&h=655&bih=927&biw=785&q=icon%20img&ved=0ahUKEwjphZOwtKLhAhWi6uAKHQ9-CzkQMwhwKAkwCQ&iact=mrc&uact=8"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a  test",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F70497%2Fpexels-photo-70497.jpeg%3Fcs%3Dsrgb%26dl%3Dburger-chips-dinner-70497.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffood%2F&docid=c1W1wgDZbrCp_M&tbnid=q1dhJyFHOrzQiM%3A&vet=10ahUKEwiNus3es6LhAhUSmhQKHZGOAj8QMwhAKAMwAw..i&w=2295&h=1526&bih=927&biw=785&q=img%20food&ved=0ahUKEwiNus3es6LhAhUSmhQKHZGOAj8QMwhAKAMwAw&iact=mrc&uact=8"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
