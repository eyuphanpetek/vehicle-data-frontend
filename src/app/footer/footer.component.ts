import { Component } from '@angular/core';
import {Footer} from "primeng/api";
import {PanelModule} from "primeng/panel";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    Footer,
    PanelModule,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
