import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
  ) { }
  GetBlogs() {
    this.blogService.getBlogs().subscribe(
      res => {
        if (res) {
          this.blogs = res;
          console.log(res);

        } else {
          this.toastr.error('no se pudo listar los blogs');
        }
      }
    );
  }
  ngOnInit() {
    this.GetBlogs();
  }

}
