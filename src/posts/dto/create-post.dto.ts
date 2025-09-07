import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePostInputDto {

    @Field()
    title: string;

    @Field()
    content: string
}