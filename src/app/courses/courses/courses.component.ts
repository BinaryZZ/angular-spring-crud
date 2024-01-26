import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name', 'category'];

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
