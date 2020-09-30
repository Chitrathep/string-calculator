//
// Sample outputs
//

// import { calculateRoman } from "./main"


describe('Roman-Calculator', () => {
  it('Calculate XXII', () => {
    // given
    const roman1 = 'XX';
    const roman2 = 'II';

    // when
    const ans = calculateRoman(roman1, roman2);

    // then
    expect(ans).toEqual('XXII');
  });
});
