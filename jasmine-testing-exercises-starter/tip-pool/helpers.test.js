describe("Helper Functions test (with setup and tear-down)", function() {
    let total = 0
    it('should return the sum of bills', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(0)
    })

    it('should return the sum of tips', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(0)
    })

    it('should Calculate The Tip Correctly', function() {
        expect(calculateTipPercent(20, 5)).toEqual(25)
    })

    it('should append the td', function() {
        
    })
});
