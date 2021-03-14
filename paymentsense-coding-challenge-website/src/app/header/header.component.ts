import { Component, ViewEncapsulation } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { take } from 'rxjs/operators';
import { PaymentsenseCodingChallengeApiService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {

  public faThumbsUp = faThumbsUp;
  public faThumbsDown = faThumbsDown;
  public isApiReady = false;
  public title = 'Paymentsense Coding Challenge!';

  constructor(private apiService: PaymentsenseCodingChallengeApiService) {

    this.checkApiHealth();

  }

  checkApiHealth() {
    this.apiService.getHealth().pipe(take(1))
      .subscribe(
        res => this.isApiReady = res === 'Healthy',
        _ => this.isApiReady = false
      );
  }
}
