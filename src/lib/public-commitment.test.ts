import { describe, it, expect } from 'vitest';
import { withoutEditTokenHash } from '@/lib/public-commitment';

const row = { id: 'com_1', status: 'confirmed', editTokenHash: 'deadbeef' };

describe('withoutEditTokenHash', () => {
  it('drops editTokenHash and keeps every other field', () => {
    const publicRow = withoutEditTokenHash(row);

    expect(publicRow).toStrictEqual({ id: 'com_1', status: 'confirmed' });
    expect(publicRow).not.toHaveProperty('editTokenHash');
  });

  it('does not mutate the row it was given', () => {
    withoutEditTokenHash(row);

    expect(row.editTokenHash).toBe('deadbeef');
  });
});
