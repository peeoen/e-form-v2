import { Selector, State } from '@ngxs/store';
​
@State<string[]>({
  name: 'reports',
  defaults: [
      'test'
  ]
})
export class ReportsState {
    @Selector() static reports(state: string[]) {
        return state;
      }
}
