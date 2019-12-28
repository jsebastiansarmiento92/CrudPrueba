import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesfilter'
})
export class PipesfilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultPost=[];
    
   
    if (arg.length>2|| arg===null) return value;
    
    for (const post of value) {
      
        if (post.name.toLowerCase().indexOf(arg)>-1) {
          
          resultPost.push(post);
        }else if (post.country.toLowerCase().indexOf(arg)>-1) {
         
          resultPost.push(post);
        }
    }
    return resultPost;
  }




}
