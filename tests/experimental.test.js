/**
 * Experimental test suite — work in progress.
 *
 * These tests cover features not yet implemented in src/calculator.js.
 * They are EXPECTED TO FAIL. Your workflow should handle this gracefully
 * using continue-on-error instead of letting the failure stop everything.
 */

const { divide } = require('../src/calculator');

describe('Experimental: advanced math (not yet implemented)', () => {
  test('computes modulo', () => {
    const { modulo } = require('../src/calculator');
    expect(modulo(10, 3)).toBe(1);
  });

  test('computes power', () => {
    const { power } = require('../src/calculator');
    expect(power(2, 8)).toBe(256);
  });

  test('computes square root', () => {
    const { squareRoot } = require('../src/calculator');
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot(2)).toBeCloseTo(1.41421, 4);
  });
});
