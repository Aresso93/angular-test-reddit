import { Component, ComponentFactoryResolver, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() postArray: Post[] = [];
  constructor(private reddit: RedditService) {
    reddit.getPosts().then((posts) => (this.postArray = posts));
  }
}
