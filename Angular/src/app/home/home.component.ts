import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(1500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
