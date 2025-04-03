import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  id: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.router.navigate([], {
      queryParams: { list: '1', enable: 'true' },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
