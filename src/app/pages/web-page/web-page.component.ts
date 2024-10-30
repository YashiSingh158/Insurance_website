import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";

@Component({
  selector: 'app-web-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './web-page.component.html',
  styleUrl: './web-page.component.css'
})
export class WebPageComponent {

}
