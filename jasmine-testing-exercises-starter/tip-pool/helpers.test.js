describe("Helper Functions test (with setup and tear-down)", function() {
    beforeEach(function(){
        let allPayments = {};
    })
    
    it('should return the sum of bills', function() {
        expect(sumPaymentTotal('billAmt')).toBeDefined()
    })

    it('should return the sum of tips', function() {
        expect(sumPaymentTotal('tipAmt')).toBeDefined()
    })

    it('should Calculate The Tip Correctly', function() {
        expect(calculateTipPercent(20, 5)).toEqual(25)
    })

    //jasmine tests run the function
    //integration tests test chains of logic between functions
    //unit test pure functions
    //impure functions alter external things


    it('should return the correct tr ID', function() { //test to ensure correct parameters are returned.  
        let testTr = document.createElement('tr')
        testTr.id = 'test1'
        expect(appendTd(testTr, '100')).toBe('test1')
        expect(appendDeleteBtn(testTr, 'test1')).toBe('test1')
    })

    // afterEach(function(){
    //     let allPayments = {}
    // })
});

