import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  repoUrl: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
