import {ProductService} from '../product.service';
import {AbstractControl} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import {timer} from 'rxjs';


export class CheckDuplicateNameValidator {
  static createValidator(ps: ProductService): any {
    return (control: AbstractControl) => {
      return timer(500).pipe(
        switchMap(() =>
          ps.checkIfProductNameExist(control.value).pipe(
          map(v => ({'duplicateKey': v}))
        ))
      )
    }
  }
}
