import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AlunoComponent, ModalComponent } from './aluno.component';
import { AlunoRoutingModule } from './aluno-routing.module';
import { MaterialAlunoModule } from './aluno.material.module';
import { AlunoService } from './aluno.service';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunoRoutingModule,
    MaterialAlunoModule,
    RouterModule
  ],
  declarations: [ AlunoComponent, ModalComponent, AlunoDetalhesComponent ],
	entryComponents: [ ModalComponent ],
	providers: [ AlunoService ]
})
export class AlunoModule { }
