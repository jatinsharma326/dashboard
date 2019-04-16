import { AfterViewInit, Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-videotab',
  templateUrl: './videotab.component.html',
  styleUrls: ['./videotab.component.css']
})
export class VideotabComponent   {
 

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Sr', 'Video', 'MRP', 'salePrice','image','Edit','Live','Delete'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  Sr: number;
  Video: string;
  MRP: number;
  salePrice: number;
  image:any;
  Edit:string;
  Live:any;
  Delete:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Sr: 1, Video: 'Hydrogen', MRP: 1.0079, salePrice: 43,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 2, Video: 'Helium', MRP: 4.0026, salePrice: 55,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 3, Video: 'Lithium', MRP: 6.941, salePrice: 53,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 4, Video: 'Beryllium', MRP: 9.0122, salePrice: 65,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 5, Video: 'Boron', MRP: 10.811, salePrice: 76,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 6, Video: 'Carbon', MRP: 12.0107, salePrice: 86,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 7, Video: 'Nitrogen', MRP: 14.0067, salePrice: 87,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 8, Video: 'Oxygen', MRP: 15.9994, salePrice: 99,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 9, Video: 'Fluorine', MRP: 18.9984, salePrice: 12,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
  {Sr: 10, Video: 'Neon', MRP: 20.1797, salePrice: 32,image:'23',Edit:'dsa',Live:"ds",Delete:'ds'},
];
