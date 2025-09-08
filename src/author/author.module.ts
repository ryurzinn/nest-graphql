import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Post } from 'src/posts/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author])
  ],
  exports: [AuthorService],
  providers: [AuthorResolver, AuthorService],  
})
export class AuthorModule {}
