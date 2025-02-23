import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {

  @Input() post!: Post;
  @Input() postArray?:Post
  @Output() removed = new EventEmitter<Post>()
  @Output() faved = new EventEmitter<Post>()

  removePost(){
    this.removed.emit(this.postArray);
  }

  addToFav(){
    this.faved.emit(this.postArray)
  }

}
