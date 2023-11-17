import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTxt'
})
export class FormatTxtPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    if(value.length <= 0){
      return '';
    }

    let splitTxt = value.split(',');
 
    let html = ''
      splitTxt.forEach((line, index) => {
          html += line + '<br />'
    })

    let splitTxt2 = html.split('.');
 
    let html2 = ''
      splitTxt2.forEach((line, index) => {

          if(line !== 'INT' && line !== 'EXT'){
            if(index === splitTxt2.length - 1){
              html2 += line;
            }else{
              html2 +=  line + '<br /><br />';
            }
            
          }else{
            html2 += line + '.';
          }
    })

    return html2;
  }

}
