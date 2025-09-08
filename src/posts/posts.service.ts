import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.dto';
import { Author } from 'src/author/entities/author.entity';
import { AuthorService } from 'src/author/author.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,

    private readonly authorService: AuthorService,
 ){}

    //TODO: ESTAS SON QUERY (GET)
    async findAll(): Promise<Post[]>{
      return await this.postRepository.find();
    }

    async findProductById(id: number): Promise<Post | null>{
      return this.postRepository.findOne({
        where: {
            id,
        }
    });
    }

    createPost(postDto: CreatePostInput): Promise<Post> {
      const newPost = this.postRepository.create(postDto);
      return this.postRepository.save(newPost);
  }

    getAuthor(userId: number): Promise<Author | null> {
      return this.authorService.findOne(userId);
    }
}
