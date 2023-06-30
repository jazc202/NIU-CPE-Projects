describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should Correctly update the server table', function () {
    expect(serverTbody.childNodes.length).toEqual(1);
  })

  afterEach(function() {
    serverNameInput.value = '';
  });
});
