import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { bookmarkReducer } from './state/bookmarks.reducer';
import { BookmarksPage } from './bookmarks.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ],
  declarations: [
    BookmarksPage,
  ],
})
export class BookmarksModule {
}