import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-our-vision',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [TranslateStore],
  templateUrl: './our-vision.component.html',
  styleUrl: './our-vision.component.scss'
})
export class OurVisionComponent {

}
