import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LinkModel {
  @Field(() => Int)
  id: number;

  @Field()
  label: string;

  @Field()
  url: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
