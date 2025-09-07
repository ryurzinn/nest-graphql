import {ObjectType, Field, Int} from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column({type: 'text'})
    @Field()
    title: string;

    @Column({type: 'text', nullable: true})
    @Field({ nullable: true })
    content?: string;

}