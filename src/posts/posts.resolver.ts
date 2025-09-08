import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.dto';
import { Author } from 'src/author/entities/author.entity';

@Resolver((of) => Post)
export class PostsResolver {
    
 constructor(private postService: PostsService){}

 @Query((returns) => [Post])
  posts() {
    return this.postService.findAll();
 }

 @Query((returns) => Post)
  post(@Args('id', {type: () => Int}) id: number) {
    return this.postService.findProductById(id);
 }

 @ResolveField((returns) => Author)
 author(@Parent() post: Post): Promise<Author | null> {
  return this.postService.getAuthor(post.authorId)
 }

 @Mutation((returns) => Post)
 createPost(@Args('postInput') postInput: CreatePostInput) {    
  return this.postService.createPost(postInput);
 }  
 
}
