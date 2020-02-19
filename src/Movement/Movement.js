class Movement {
  constructor() {
    document.addEventListener("keydown", this._onKeyPress.bind(this));
    document.addEventListener("keyup", this._onKeyPress.bind(this));
  }

  key = 0;
  _keys = [];

  listen(key, callback) {
    if(Array.isArray(key)) {
      for(const k of key) {
        this._keys.push({ key: k, callback });
      }
    } else {
      this._keys.push({ key, callback });
    }
  }

  speed(keys) {
    if(Object.keys(keys) > 1) {
      return 5 / 0.7;
    }
    return 5;
  }

  _onKeyPress(e) {
    for(const { key, callback } of this._keys) {
      if(key === e.keyCode) {
        this.key = key;
        callback.call(this, e);
      }
    }
  }
}

export default Movement;
