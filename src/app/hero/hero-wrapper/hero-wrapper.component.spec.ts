import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HeroService} from '../hero.service';
import {NotifyService} from 'notify-angular';
import {ResourceService} from '../../services/resource.service';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule, MdToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {LandingComponent} from '../../components/landing/landing.component';
import {AppComponent} from '../../app.component';
import {DisplayHeroListComponent} from '../display-hero-list/display-hero-list.component';
import {DisplayHeroComponent} from '../display-hero/display-hero.component';
import {DeleteHeroComponent} from '../delete-hero/delete-hero.component';
import {TopnavComponent} from '../../components/topnav/topnav.component';
import {SignUpComponent} from '../../components/sign-up/sign-up.component';
import {NotifyComponent} from 'notify-angular';
import {PageNotFoundComponent} from '../../components/page-not-found/page-not-found.component';
import {JumbotronComponent} from '../../components/jumbotron/jumbotron.component';
import {SpacerComponent} from '../../components/spacer/spacer.component';
import {LoginComponent} from '../../components/login/login.component';
import {APP_BASE_HREF} from '@angular/common';
import {BroadcastService} from '../../services/broadcast.service';
import {UtilsService} from '../../services/utils.service';
import {UserService} from '../../services/user.service';
import {CreateHeroComponent} from '../create-hero/create-hero.component';
import { HeroWrapperComponent } from './hero-wrapper.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';

describe('HeroWrapperComponent', () => {
  let component: HeroWrapperComponent;
  let fixture: ComponentFixture<HeroWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ResourceService,
        HeroService,
        UtilsService,
        BroadcastService,
        UserService,
        NotifyService
      ],
      declarations: [
        AppComponent,
        CreateHeroComponent,
        DeleteHeroComponent,
        DisplayHeroComponent,
        DisplayHeroListComponent,
        TopnavComponent,
        SignUpComponent,
        NotifyComponent,
        PageNotFoundComponent,
        LandingComponent,
        DashboardComponent,
        JumbotronComponent,
        SpacerComponent,
        LoginComponent,
        HeroWrapperComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MdInputModule,
        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdMenuModule,
        MdIconModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
