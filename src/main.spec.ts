//
// Sample outputs
//

import { StringCalculator } from "./main"


describe('String Calculator', () => {
  it('NO. 1', () => {
    // given
    const input = '';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(0);
  });
});
