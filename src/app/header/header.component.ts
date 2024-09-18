import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ToolbarModule, ButtonDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
