import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorService {

  constructor(
    @InjectRepository(Author) private authorRepository: Repository<Author>
  ) {}

  create(createAuthorInput: CreateAuthorInput): Promise<Author | null> {
    const author = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(author);
  }

  findAll(): Promise<Author[] | null> {
    return this.authorRepository.find();
  }

  findOne(id: number): Promise<Author | null> {
    return this.authorRepository.findOne(
      {
        where: {id}
      }
    );
  }

}
