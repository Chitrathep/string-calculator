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

  it('NO. 4', () => {
    // given
    const input = '23,1';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(24);
  });

  it('NO. 5', () => {
    // given
    const input = '1\n2,3';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(6);
  });

  it('NO. 6', () => {
    // given
    const input = '1,\n';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(1);
  });

  it('NO. 7', () => {
    // given
    const input = '//;\n1;2';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(3);
  });

  it('NO. 8', () => {
    // given
    const input = '2,1001';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(2);
  });

  it('NO. 9', () => {
    // given
    const input = '//[***]\n1***2***3';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(6);
  });

  it('NO. 10', () => {
    // given
    const input = '//[*][%]\n1*2%3';

    // when
    const strCal = new StringCalculator()
    const ans = strCal.add(input)

    // then
    expect(ans).toEqual(6);
  });
});
