import { parseNumericValue } from '../utils';

const config: Record<string, number> = {
  '0': 0,
  '10': 0.1,
  '20': 0.2,
  '30': 0.3,
  '40': 0.4,
  '50': 0.5,
  '60': 0.6,
  '70': 0.7,
  '80': 0.8,
  '90': 0.9,
  '100': 1,
};

export function opacity(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const v = value.replace(/^-/, '');
  const configValue = config?.[v];

  if (configValue !== undefined) {
    const parsedConfig = parseNumericValue(String(configValue));
    if (parsedConfig !== null) {
      style.opacity = parsedConfig;
    }
  } else {
    const parsedArbitrary = parseNumericValue(v);
    if (Number.isFinite(parsedArbitrary)) {
      style.opacity = parsedArbitrary / 100;
    }
  }

  return style;
}
