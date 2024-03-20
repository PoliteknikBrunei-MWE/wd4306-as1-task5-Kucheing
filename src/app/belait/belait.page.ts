import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-belait',
  templateUrl: './belait.page.html',
  styleUrls: ['./belait.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BelaitPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
