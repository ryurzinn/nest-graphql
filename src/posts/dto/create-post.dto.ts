import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreatePostInput {

    @MinLength(4, {
        message: 'Title is too short'
    })
    @MaxLength(20, {
        message: 'Title is too long'
    })
    @IsNotEmpty({
        message: 'Title is required'
    })
    @Field()
    title: string;

    @MaxLength(400)
    @Field({nullable: true})
    content?: string
}