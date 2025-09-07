import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>
 ){}

    //TODO: ESTAS SON QUERY (GET)
    async findAll(): Promise<Post[]>{
      return await this.postRepository.find();
    }

    createPost(postDto: CreatePostInput): Promise<Post> {
      const newPost = this.postRepository.create(postDto);
      return this.postRepository.save(newPost);
      
 }
}
