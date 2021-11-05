import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    
    products = [
    { id: 11, name: 'Account Verification' },
    { id: 12, name: 'Alternative Employment and Income Data' },
    { id: 13, name: 'AML Connect' },
    { id: 14, name: 'Automated Data View' },
    { id: 15, name: 'Bank Transaction Data' },
    { id: 16, name: 'Consumer Credit Report' },
    { id: 17, name: 'Consumer Engagement Suite' },
    { id: 18, name: 'Digital Identity Trust' },
    { id: 19, name: 'Document Verification' },    
    { id: 20, name: 'FraudIQ® Identity Scan Alert' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
