import {Component, OnInit} from "@angular/core";
import {UltimasTransaccionesService} from "../../services/ultimasTransacciones.service";


@Component({
    selector: 'app-ultimas-transacciones',
    templateUrl: './ultimas-transacciones.component.html',
    styleUrls: ['./ultimas-transacciones.component.scss']
})

export class UltimasTransaccionesComponent implements OnInit {

  public transactions: any;
  public pageSizes: any = [5, 10];
  public pageSize: any = 5;
  public currentPage: any = 1;
  public collectionSize: any = 0;

    constructor(private ultimasTransaccionesService: UltimasTransaccionesService) {
      this.ultimasTransacciones();
    }

    ngOnInit(): void {
    }

    ultimasTransacciones() {
        this.ultimasTransaccionesService.getUltimasTransacciones().subscribe(
            (data) => {
                this.transactions = data;

                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    public pageChange(event: any): void {
        console.log(event);
    }

    public changeIcon(estado: string): string{
        if(estado == 'Completado'){
            return 'check_circle';
        }else if(estado == 'Cancelado'){
            return 'cancel';
        }else{
            return 'help';
        }
    }

    changeColor(estado: string): string{
        if(estado == 'Completado'){
            return 'green';
        }else if(estado == 'Cancelado'){
            return 'red';
        }else{
            return 'blue';
        }
    }



}
