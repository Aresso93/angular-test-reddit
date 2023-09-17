import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent {

  newPost: Post = {
    title: '',
    author: '',
    id: -1,
    thumbnail: '',
    created: new Date,
    imageUrl: ''
  }

  constructor(reddit: RedditService) {
    reddit.getPosts()
    .then((posts) => (console.log(posts)))
  }



}
