describe('doublebLinkedList', function() {
  var dbLinkedList;

  beforeEach(function() {
    dbLinkedList = DbLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dbLinkedList).to.have.property('head');
    expect(dbLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(dbLinkedList.addToTail).to.be.a('function');
    expect(dbLinkedList.addToHead).to.be.a('function');
    expect(dbLinkedList.removeHead).to.be.a('function');
    expect(dbLinkedList.removeTail).to.be.a('function');
    expect(dbLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new tail nodes are added', function() {
    dbLinkedList.addToTail(4);
    expect(dbLinkedList.tail.value).to.equal(4);
    dbLinkedList.addToTail(5);
    expect(dbLinkedList.tail.value).to.equal(5);
  });
  
  it('should designate a new head when new head nodes are added', function() {
    dbLinkedList.addToHead(4);
    expect(dbLinkedList.head.value).to.equal(4);
    dbLinkedList.addToHead(5);
    expect(dbLinkedList.head.value).to.equal(5);
  });
  
  it('should remove the tail from the list when removeTail is called', function() {
    dbLinkedList.addToTail(4);
    dbLinkedList.addToTail(5);
    expect(dbLinkedList.tail.value).to.equal(5);
    dbLinkedList.removeTail();
    expect(dbLinkedList.tail.value).to.equal(4);
  });
  
  it('should remove the head from the list when removeHead is called', function() {
    dbLinkedList.addToTail(4);
    dbLinkedList.addToTail(5);
    expect(dbLinkedList.head.value).to.equal(4);
    dbLinkedList.removeHead();
    expect(dbLinkedList.head.value).to.equal(5);
  });
  
  it('should return the value of the former tail when removeTail is called', function() {
    dbLinkedList.addToTail(4);
    dbLinkedList.addToTail(5);
    dbLinkedList.addToHead(6);
    expect(dbLinkedList.removeTail()).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dbLinkedList.addToTail(4);
    dbLinkedList.addToHead(6);
    dbLinkedList.addToTail(5);
    expect(dbLinkedList.removeHead()).to.equal(6);
  });

  it('should contain a value that was added', function() {
    dbLinkedList.addToTail(4);
    dbLinkedList.addToTail(5);
    expect(dbLinkedList.contains(4)).to.equal(true);
    expect(dbLinkedList.contains(5)).to.equal(true);
    expect(dbLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dbLinkedList.addToTail(4);
    dbLinkedList.addToTail(5);
    dbLinkedList.removeHead();
    expect(dbLinkedList.contains(4)).to.equal(false);
  });

  it('it should have tail and head point to null when it is empty', function() {
    expect(dbLinkedList.head).to.equal(null);
    expect(dbLinkedList.tail).to.equal(null);
  });
});
