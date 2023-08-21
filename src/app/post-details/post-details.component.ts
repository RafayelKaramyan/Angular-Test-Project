import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  // styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number | null = null; // Объявляем postId как number или null
  post: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.postId = +idParam;
      this.apiService.getPost(this.postId).subscribe((data: any) => {
        this.post = data;
      });
    }
  }
}
