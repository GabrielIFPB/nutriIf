import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [ MatTableModule, MatInputModule, MatCardModule,
				MatIconModule, MatPaginatorModule, MatTooltipModule,
				MatDialogModule, MatButtonModule
	],
	exports: [ MatTableModule, MatInputModule, MatCardModule,
				MatIconModule, MatPaginatorModule, MatTooltipModule,
				MatDialogModule, MatButtonModule
	]
})
export class MaterialCampusModule { }