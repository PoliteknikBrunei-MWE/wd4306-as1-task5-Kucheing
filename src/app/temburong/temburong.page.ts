import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-temburong',
  templateUrl: './temburong.page.html',
  styleUrls: ['./temburong.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TemburongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
