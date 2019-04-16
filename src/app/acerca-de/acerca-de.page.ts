import { Component, OnInit } from '@angular/core';
import { NavController, SelectValueAccessor} from '@ionic/angular';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(public navcontroller: NavController) { }
  home()
  {
    this.navcontroller.navigateForward('home');
  }
  ngOnInit() {
  }

}
