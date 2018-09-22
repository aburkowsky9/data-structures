var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  let doesExist = false;
  // if (this._size >= (0.75 * this._limit)) {
  //   this._limit *= 2;
  // }
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

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i += 1) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(tuple.indexOf(k), 1);
      this._size -= 1;
    }
  }
};
