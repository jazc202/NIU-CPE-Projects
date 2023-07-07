//test SubmitPaymentInfo
describe('testing updateAllPayments', function() {
    beforeEach(function() {
        payment = {billAmt: 20, tipAmt: 5, tipPercent: 25}
    })
    it('should return the length, which is 3', function(){
        expect(updateAllPayments(payment)).toEqual(3)
    })
})

describe('Testing createCurPayment()', function() {
    it('should return undefined if input parameters are incorrect', function() {
        expect(curPaymentObject('', '')).toBeUndefined();
        expect(curPaymentObject('0', '20')).toBeUndefined();
    })
    it('should return an object if input parameters are correct', function() {
        expect(curPaymentObject('20', '5')).toEqual({billAmt: 20, tipAmt: 5, tipPercent: 25})
    })
})

describe('Testing resetInputs()', function() {
    it('should make the inputs blank', function() {
        expect(resetInputs(billAmtInput)).toBe('')
        expect(resetInputs(tipAmtInput)).toBe('')
    })
})

//appendPaymentTable

describe('testing appendPaymentTable', function() {
    let curPayment
    beforeEach(function() {
        curPayment = {billAmt: 20, tipAmt: 5, tipPercent: 25}
    })
    it('should return an element with 4 children', function() {
        expect(appendPaymentTable(curPayment)).toEqual(4)
    })
    afterEach(function() {
        curPayment = {}
    })
})