import { Component, OnInit } from '@angular/core';
import { ContentPost } from './ContentPost';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: ContentPost[] =
  [
    {name: 'Lärdomar från verket',
    date: new Date('2019-12-25'),
    tags: [' Agile', ' SCRUM', ' Teamwork'],
    description: 'Under min tid på Jordbruksverket har jag lärt mig mycket om team arbete. Följ mig när jag sammanfattar allt.'},
    {name: 'SouthStream Games',
    date: new Date('2019-12-25'),
    tags: [' Unity', ' Game Desgin', ' Game programming'],
    description: 'See all about game-development here!'},
    {name: 'SouthStream Create',
    date: new Date('2019-12-25'),
    tags: [' Youtube', ' Create', ' Webbpage'],
    description: 'Wondering about starting a YouTube channel? Creating a webb page? Watch the journey here!'},
    {name: 'Sociology',
    date: new Date('2019-12-25'),
    tags: [' Politics', ' Society', ' Pshycology'],
    description: 'Watch talks describing the world the wrongs and the rights.'},
  ];
}
