import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SkillModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  category: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
