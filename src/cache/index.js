class Cache {
  constructor() {
    this.styles = new Map();
  }

  getStyle(key) {
    return this.styles.get(key);
  }

  setStyle(key, style) {
    this.styles.set(key, style);
  }

  allStyle() {
    return this.styles;
  }
}

export default Cache;
