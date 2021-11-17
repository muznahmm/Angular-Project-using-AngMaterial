import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorePageGuard } from './core-page.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './pages/contacts/contact-form/contact-form.component';
import { ContactViewComponent } from './pages/contacts/contact-view/contact-view.component';
import { ContactComponent } from './pages/contacts/contact/contact.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

const routes: Routes = [
    { 
        path: '', 
        component: NavbarComponent,
        canActivate: [CorePageGuard],
        children: [
            { 
                path: 'contacts', 
                component: ContactsComponent 
            },
            { 
                path: 'contact/:id', 
                component: ContactViewComponent 
            },
            { 
                path: 'new-contact', 
                component: ContactFormComponent 
            },
            { 
                path: 'edit-contact/:id', 
                component: ContactFormComponent 
            },
            { 
                path: 'contact', 
                component: ContactComponent 
            },
            {
                path: 'transactions',
                component: TransactionsComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            },
            { 
                path: '',
                pathMatch: 'full'
            },
        ] 
    },
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class CoreRoutingModule { }