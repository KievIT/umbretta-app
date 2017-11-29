import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLayoutComponent } from '../../components/first-layout/first-layout.component';
import { HttpClientModule }   from '@angular/common/http';
import { MainPageRoutingModule } from '../../modules/main-page/mainpage-routing.module';
// import { ContentService} from '../../services/content.service';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HttpClientModule
  ],
  exports: [
    FirstLayoutComponent
  ],
  declarations: [FirstLayoutComponent]
  // providers: [ ContentService ]
})
export class MainPageModule {

}
