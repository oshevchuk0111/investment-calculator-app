import { CurrencyPipe } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

 results = computed(() => this.investmentService.resultData())
  
}
