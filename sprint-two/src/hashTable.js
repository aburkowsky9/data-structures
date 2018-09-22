var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.double = function() {
  var newLimit = this._limit * 2;
  var newHash = new HashTable(newLimit);
  this._limit = newHash._limit;
  
  this._storage.each(function(bucket, index, storage) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) { 
        const tuple = bucket[i];
        newHash.insert(tuple[0], tuple[1]);  
      }
    }
  });
 
  this._storage = newHash._storage;
  this._size = newHash._size;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._size >= (0.75 * this._limit)) {
    this.double();
    index = getIndexBelowMaxForKey(k, this._limit);
  } 
  
  let bucket = this._storage.get(index);
  let doesExist = false;
  
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  for (let i = 0; i < bucket.length; i += 1) {
    const tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      doesExist = true;
    }
  }
  if (!doesExist) {
    bucket.push([k, v]);
    this._size += 1;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.half = function() {
  var newLimit = this._limit / 2;
  var newHash = new HashTable(newLimit);
  this._limit = newHash._limit;
  
  this._storage.each(function(bucket, index, storage) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) { 
        const tuple = bucket[i];
        newHash.insert(tuple[0], tuple[1]);  
      }
    }
  });
 
  this._storage = newHash._storage;
  this._size = newHash._size;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._size <= (0.25 * this._limit)) {
    this.half();
    index = getIndexBelowMaxForKey(k, this._limit);
  }
  
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i += 1) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(tuple.indexOf(k), 1);
      this._size -= 1;
    }
  }
};
