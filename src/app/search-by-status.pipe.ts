import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByStatus'
})
export class SearchByStatusPipe implements PipeTransform {

  transform(todo, searchText: string) {
    if(!searchText){
      return todo;
    }
    return todo.filter(todo=> todo.status.indexOf(searchText) !== -1);
} 
}
