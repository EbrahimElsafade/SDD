import { Component } from '@angular/core';
import { OurScopeComponent } from '../homepage/components/our-scope/our-scope.component';
import { OurVisionComponent } from '../homepage/components/our-vision/our-vision.component';
import { ServicesSolutionsComponent } from '../homepage/components/services-solutions/services-solutions.component';
import { TopSliderComponent } from '../homepage/components/top-slider/top-slider.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [OurScopeComponent, OurVisionComponent, ServicesSolutionsComponent, TopSliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
