import { Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Resolver()
export class PostsResolver {
    
 constructor(private postService: PostsService){}

 @Query((returns) => [Post])
  posts() {
    return this.postService.findAll();
 }

}
