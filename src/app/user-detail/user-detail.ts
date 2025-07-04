import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css']
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  user: any = null;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';

   
    this.http.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
      .subscribe(data => {
        this.user = data;
      });

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data.filter(p => p.userId == Number(this.userId));
      });
  }
}
