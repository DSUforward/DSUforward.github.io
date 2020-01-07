import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ContentPost } from '../posts/ContentPost';

@Component({
  selector: 'app-boot-cards',
  templateUrl: './boot-cards.component.html',
  styleUrls: ['./boot-cards.component.css']
})
export class BootCardsComponent {
  posts: ContentPost[] =
  [
    {name: 'Lärdomar från verket',
    date: new Date('2019-12-25'),
    tags: [' Agile', ' SCRUM', ' Teamwork'],
    description: 'Under min tid på Jordbruksverket har jag lärt mig mycket om team arbete. Följ mig när jag sammanfattar allt.'},
    {name: 'SouthStream Games',
    date: new Date('2019-12-25'),
    tags: [' Unity', ' Game Desgin', ' Game programming'],
    description: 'See all about game-development here!',
    iconClass: 'fas fa-gamepad'},
    {name: 'SouthStream Create',
    date: new Date('2019-12-25'),
    tags: [' Youtube', ' Create', ' Webbpage'],
    description: 'Wondering about starting a YouTube channel? Creating a webb page? Watch the journey here!'},
    {name: 'Sociology',
    date: new Date('2019-12-25'),
    tags: [' Politics', ' Society', ' Pshycology'],
    description: 'Watch talks describing the world the wrongs and the rights.',
    iconClass: 'fas fa-brain'},
  ];
  @ViewChild('icon', {static: false}) element: ElementRef;
}
