import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { API_URL } from './shared/tokens/api-url.token';
import { BROADCAST_CHANNEL_ACTIONS } from './broadcast-channel/broadcast-channel-actions.token';
import { lessonsActions } from './lessons/data-access/lessons.actions';
import { studentsActions } from './students/data-access/students.actions';
import { BroadcastChannelEffects } from './broadcast-channel/broadcast-channel.effects';
import { bcStateInitializer } from './broadcast-channel/broadcast-channel.meta-reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, { metaReducers: [bcStateInitializer] }),
    EffectsModule.forRoot([BroadcastChannelEffects]),
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    {
      provide: BROADCAST_CHANNEL_ACTIONS,
      useValue: [
        lessonsActions.assignLessonSuccess,
        lessonsActions.deleteLessonSuccess,
        studentsActions.addStudentSuccess,
        studentsActions.deleteStudentSuccess,
      ],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
