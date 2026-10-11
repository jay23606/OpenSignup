/** The edit-token hash is the server's check value, so it never leaves the server. */
export function withoutEditTokenHash<T extends { editTokenHash: string }>(
  row: T,
): Omit<T, 'editTokenHash'> {
  const { editTokenHash: _editTokenHash, ...publicRow } = row;
  return publicRow;
}
