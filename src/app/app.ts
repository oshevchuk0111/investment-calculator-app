import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserInputComponent } from './user-input/user-input';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  onCalculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log(annualData);
  }
}
