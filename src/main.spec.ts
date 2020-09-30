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

  it('NO. 2', () => {
    // given
    const input = '3,9';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(12);
  });

  it('NO. 3', () => {
    // given
    const input = '3';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(3);
  });
});
