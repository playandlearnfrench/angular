import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerCardComponent } from "./customers/customer-card/customer-card.component";
import { CustomerFilterPipe } from './common/customer-filter.pipe';

@NgModule({
  declarations: [AppComponent, CustomersComponent, CustomerCardComponent, CustomerFilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [], //All services should be included here
  bootstrap: [AppComponent]
})
export class AppModule {}
