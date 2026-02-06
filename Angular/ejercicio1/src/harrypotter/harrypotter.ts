import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/api.service';
import { lastValueFrom } from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-harrypotter',
  imports: [CommonModule],
  templateUrl: './harrypotter.html',
  styleUrl: './harrypotter.css',
})
export class Harrypotter implements OnInit {
  datos:any;

  constructor(private apiService:ApiService) {}

  async ngOnInit() {
    let a = await this.apiService.getPosts();
    console.log(a);
    
    this.datos = await lastValueFrom(a);
    console.log(this.datos);
  }

}
