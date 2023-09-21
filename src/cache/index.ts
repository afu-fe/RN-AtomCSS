type StyleValue =
  | string[]
  | string
  | number
  | boolean
  | Style
  | Record<string, any>;

export default class Cache {
  private styles: Map<string, Record<string, StyleValue>> = new Map();

  public getStyle(key: string): Record<string, StyleValue> | undefined {
    return this.styles.get(key);
  }

  public setStyle(key: string, style: Record<string, StyleValue>): void {
    this.styles.set(key, style);
  }

  public getAllStyles(): Record<string, Record<string, StyleValue>> {
    // 返回一个复制而不是直接返回 this.styles
    const allStyles: Record<string, Record<string, StyleValue>> = {};
    for (const [key, style] of this.styles?.entries()) {
      allStyles[key] = { ...style };
    }
    return allStyles;
  }
}
