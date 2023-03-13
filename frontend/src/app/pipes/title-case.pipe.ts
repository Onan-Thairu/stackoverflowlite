import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return ''
    }

    return value.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
  }
}

// Usage - capitalize the first letter of each word in a string.
// <h1>{{ title | titleCase }}</h1>

