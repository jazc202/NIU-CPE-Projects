
describe('calculateMonthlyPayment Function', function() {
  let results = calculateMonthlyPayment({amount: 10000, years: 2, rate: 2})

  it('should return the correct dividend', function() {
    expect(results[2]).toBeCloseTo(200)
  });

  it('should return the correct divisor', function() {
    expect(results[3]).toBeCloseTo(0.38)
  });

  it('should calculate the monthly rate correctly', function () {
    expect(results[1]).toBeCloseTo(528.71, 2)
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(results[0]).toMatch("528.71")
  });
  
  it("should output a string", function() {
    expect(results[0]).toBeInstanceOf(String)
  });
});
/// etc
