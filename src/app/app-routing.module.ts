import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleNoteComponent } from './article-note/article-note.component';
import { PictureNotesComponent } from './picture-notes/picture-notes.component';
import { DocumentNotesComponent } from './document-notes/document-notes.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/notes' },
  { path: 'notes', component: NotesComponent    },
  { path: 'article-notes', component: ArticleNoteComponent },
  { path: 'picture-notes',  component: PictureNotesComponent },
  { path: 'document-notes',  component: DocumentNotesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static components = [ 
    NotesComponent, ArticleNoteComponent, PictureNotesComponent, DocumentNotesComponent
  ];
}
