import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tutong',
  templateUrl: './tutong.page.html',
  styleUrls: ['./tutong.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TutongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
