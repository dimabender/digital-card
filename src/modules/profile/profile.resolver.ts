import { Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { ProfileModel } from './models/profile.model';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel)
  async profile() {
    return this.profileService.getProfile();
  }
}
