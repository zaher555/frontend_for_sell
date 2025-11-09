import { ProductService } from './../../products/service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone:false
})
export class HeaderComponent implements OnInit {
    userItems: MenuItem[] | undefined;
    languageItems: MenuItem[] | undefined;
    checked: boolean = false;
    token=localStorage.getItem('token')
    user=JSON.parse(localStorage.getItem('user') as string)
    //search
    selectedItem: any;
    filteredItems!: any[];
    items!: any[];

    //services
    productService$=inject(ProductService).getAllProducts()

    ngOnInit() {
        //fetch all products
        this.productService$.subscribe({
            next:(res=>this.items=res),
            error:(err=>'error fetching products: ' + err)
        })

        //search
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }

        // user options

        if(this.token){
            this.userItems = [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Profile',
                            icon: 'pi pi-user',
                            routerLink:"/profile"
                        },
                        {
                            label: 'Logout',
                            icon: 'pi pi-sign-out'
                        }
                    ]
                }
            ];
        }
        else{
            this.userItems = [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Profile',
                            icon: 'pi pi-user',
                            routerLink:"/profile"
    
                        },
                        {
                            label: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user') as string)?.username:'Sign Up',
                            icon: 'pi pi-user-plus',
                            routerLink:"/auth/register"
                        },
                        {
                            label: 'Login',
                            icon: 'pi pi-sign-in',
                            routerLink:"/auth/login"
                        },
                    ]
                }
            ];
        }


        // language options
        this.languageItems = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'AR',
                        icon: ''
                    },
                    {
                        label: 'EN',
                        icon: ''
                    },
                ]
            }
        ];
    }

    //search filteration
    filterItems(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.items as any[]).length; i++) {
            let item = (this.items as any[])[i];
            if (item.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(item);
            }
        }
        this.filteredItems = filtered;
    }

}
