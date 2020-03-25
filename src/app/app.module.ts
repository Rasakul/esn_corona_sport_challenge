import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './shared/components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SortableHeaderDirective} from './shared/directives/sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SortableHeaderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
