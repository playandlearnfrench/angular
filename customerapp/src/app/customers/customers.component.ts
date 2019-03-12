import { Component, OnInit } from "@angular/core";
import { Customer } from "../common/customer";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  originalCustomers: Customer[] = [];
  public searchText: string;
  constructor() { }

  ngOnInit() {
    //called when component is created before view is render
    //this.customers = [
    this.customers = this.originalCustomers = [
      {
        id: 1,
        firstName: "Oinam",
        lastName: "Singh",
        gender: "male",
        address: "bsk"
      },
      {
        id: 2,
        firstName: "Tarun",
        lastName: "Vyas",
        gender: "male",
        address: "HAL"
      },
      {
        id: 3,
        firstName: "Sangeeta",
        lastName: "Sundaraj",
        gender: "female",
        address: "White Field"
      },
      {
        id: 4,
        firstName: "Om",
        lastName: "Prakash",
        gender: "male",
        address: "Jayanagar"
      },
      {
        id: 5,
        firstName: "Vikas",
        lastName: "Patel",
        gender: "male",
        address: "KR market"
      },
      {
        id: 6,
        firstName: "Bhanu",
        lastName: "Kaur",
        gender: "female",
        address: "Kormangla"
      }
    ];
  }

  remove(id: number): void {
    let idx = -1;
    console.log("parent " + id);
    this.customers.forEach((c, index) => {
      if (c.id === id) {
        idx = index;
      }
    });
    if (idx > -1) {
      this.customers.splice(idx, 1);
    }
  }

  assignCopy() {
    this.customers = Object.assign([], this.originalCustomers);
  }

  filterCustomer(event: any) {
    if (event.target.value.length > 0) {
      console.log(event.target.value);
      this.searchText = event.target.value;
      this.customers = Object.assign ( [], this.originalCustomers).filter(
        c => c.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
      );
    }else{
      this.assignCopy();
    }
  }
}
