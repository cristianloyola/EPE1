import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.page.html',
  styleUrls: ['./selector.page.scss'],
})
export class SelectorPage implements OnInit {

  constructor(public navcontroller: NavController) { }
 
  asig32()
  {
    this.navcontroller.navigateForward('home-nota32');
  }
  asig64()
  {
    this.navcontroller.navigateForward('home-nota64');
  }
  asig96()
  {
    this.navcontroller.navigateForward('home-nota96');
  }
  asig128()
  {
    this.navcontroller.navigateForward('home-nota128');
  }
  home()
  {
    this.navcontroller.navigateForward('home');
  }
  ngOnInit() {
  }

}
