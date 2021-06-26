import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  docker= [
    {'id':1,'name':'','description':'Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.','image':'../../assets/docker.png'},

]
  csharp= [
    {'id':2,'name':'','description':' (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework. It is used to develop web apps, desktop apps, mobile apps, games and much more.','image':'../../assets/C-Sharp.png'},
  ]

  java= [
    {'id':3,'name':'','description':'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere.','image':'../../assets/java.png'},
  ]

  spring= [
    {'id':4,'name':'','description':'The Spring Framework is an application framework and inversion of control container for the Java platform. The frameworks core features can be used by any Java application.','image':'../../assets/spring.png'},
  ]

  dotnet= [
    {'id':5, 'name':'','description':'.NET is a free, cross-platform, open source developer platform for building many different types of applications.','image':'../../assets/dotnet.png'},
  ]
}

