import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../services/comment.service';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  type: string;

  comments$: Observable<Comment[]>;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.comments$ = this.commentService.getComment(this.id, this.type);
  }

}
