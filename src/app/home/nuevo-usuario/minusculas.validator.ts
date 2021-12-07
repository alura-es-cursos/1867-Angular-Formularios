import { AbstractControl } from '@angular/forms';

export function minusculasValidator(control: AbstractControl) {
  const value = control.value as string;
  if (value !== value.toLowerCase()) {
    return { minuscula: true };
  } else {
    return null;
  }
}
