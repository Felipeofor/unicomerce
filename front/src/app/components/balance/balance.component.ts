import {Component, OnInit} from "@angular/core";
import {BalanceService} from "../../services/balance.service";


@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss'],
})

export class BalanceComponent implements OnInit{

  public data: any;

    constructor(private balanceService: BalanceService) {
    }

    ngOnInit(): void {
        this.balance();
    }

    balance() {
    this.balanceService.getBalance().subscribe(res => {
        this.data = res;
      console.log(this.data)
    });
    }

}
