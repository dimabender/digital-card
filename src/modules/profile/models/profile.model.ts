import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  bio: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
