import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit.service';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post!: Post;
  @Input() postArray?:Post
  @Output() removed = new EventEmitter<Post>()

  removePost(){
    this.removed.emit(this.postArray);
  }
}
