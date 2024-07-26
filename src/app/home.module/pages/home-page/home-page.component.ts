import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { OrderedCardComponent } from '../../../shared/components/ordered-card/ordered-card.component';
import { TestemonialComponent } from '../../../shared/components/testemonial/testemonial.component';
import { SectionOneComponent } from '../../components/section-one/section-one.component';
import { SectionTwoComponent } from '../../components/section-two/section-two.component';
import { SectionThreeComponent } from '../../components/section-three/section-three.component';
import { SectionFiveComponent } from '../../components/section-five/section-five.component';
import { SectionSevenComponent } from '../../components/section-seven/section-seven.component';
import { SectionEightComponent } from '../../components/section-eight/section-eight.component';
import { SectionFourComponent } from '../../components/section-four/section-four.component';
import { SectionSixComponent } from '../../components/section-six/section-six.component';
import { SectionNineComponent } from '../../components/section-nine/section-nine.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarouselModule,
    RouterModule,
    NavBarComponent,
    SectionOneComponent,
    OrderedCardComponent,
    TestemonialComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFiveComponent,
    SectionSevenComponent,
    SectionEightComponent,
    SectionFourComponent,
    SectionSixComponent,
    SectionNineComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
