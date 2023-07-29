describe('deleteTask', () => {
  it('should not delete a task that does not exist', () => {
    const list = [{ description: 'Buy milk', completed: false, index: 1 }];
    const result = deleteTask(2, list);
    expect(result).toBe(false);
    expect(list).toEqual([{ description: 'Buy milk', completed: false, index: 1 }]);
  });
