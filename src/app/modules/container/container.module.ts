import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [ContainerComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatBadgeModule
  ]
})
export class ContainerModule { }
