import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExperienceModel {
  @Field(() => Int)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date | null;

  @Field(() => [String])
  achievements: string[];

  @Field(() => [String])
  stack: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
