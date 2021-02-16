import { ConstantService } from '@services/constant.service';
import { AssetsPathPipe } from './assets-path.pipe';

describe('AssetsPathPipe', () => {
  it('create an instance', () => {
    const cnt = new ConstantService();
    const pipe = new AssetsPathPipe(cnt);
    expect(pipe).toBeTruthy();
  });
});
