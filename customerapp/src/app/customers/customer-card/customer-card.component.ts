import { Customer } from "./../../common/customer";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-customer-card",
  templateUrl: "./customer-card.component.html",
  styleUrls: ["./customer-card.component.css"]
})
export class CustomerCardComponent implements OnInit {
  @Input() //This is to inform that value will get from the parent
  customers: Customer[];

  @Output()
  delEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteCustomer(id: number): void {
    console.log("Customer card Component : " + id);
    this.delEvent.next(id);
  }
}
