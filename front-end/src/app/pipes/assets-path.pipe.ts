import { Pipe, PipeTransform } from '@angular/core';
import { ConstantService } from '@services/constant.service';

@Pipe({
  name: 'assetsPath'
})
export class AssetsPathPipe implements PipeTransform {

  constructor(public cnt: ConstantService) {}

  transform(fileName: string): unknown {
    return this.cnt.ASSETS_PATH_SVG + fileName;
  }

}
