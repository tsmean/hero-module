import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Hero } from './hero';

import { ResourceStoreService } from '@tsmean/resource';

@Injectable()
export class HeroStoreService {

  constructor(
      private resourceStore: ResourceStoreService
  ) { }

  private get resourceName() {
    return 'heroes';
  }

  add (resourceId: string, hero: Hero): void {
    this.resourceStore.add(this.resourceName, resourceId, hero);
  }

  remove (resourceId: string): void {
    this.resourceStore.remove(this.resourceName, resourceId);
  }

  get (resourceId: string): Hero {
    return this.resourceStore.get(this.resourceName, resourceId);
  }

  update (resourceId: string, resource: Hero): void {
    this.resourceStore.update(this.resourceName, resourceId, resource);
  }

}