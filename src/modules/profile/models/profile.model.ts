import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LinkModel } from '../../link/models/link.model';
import { SkillModel } from '../../skill/models/skill.model';
import { ExperienceModel } from '../../experience/models/experience.model';
import { ProjectModel } from '../../project/models/project.model';

@ObjectType()
export class ProfileModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [LinkModel])
  links: LinkModel[];

  @Field(() => [SkillModel])
  skills: SkillModel[];

  @Field(() => [ExperienceModel])
  experience: ExperienceModel[];

  @Field(() => [ProjectModel])
  projects: ProjectModel[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
