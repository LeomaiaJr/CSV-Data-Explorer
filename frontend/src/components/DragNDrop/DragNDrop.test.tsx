import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi } from 'vitest';
import DragNDrop from './DragNDrop';

describe('DragNDrop', () => {
  it('displays the drop area when no file is selected', () => {
    const setFileMock = vi.fn();

    render(<DragNDrop setFile={setFileMock} />);

    const dropArea = screen.getByText('Select a CSV file to upload');
    expect(dropArea).toBeInTheDocument();

    const dragAndDropText = screen.getByText('or drag and drop it here');
    expect(dragAndDropText).toBeInTheDocument();
  });

  it('displays the file data when a CSV file is selected', () => {
    const testFile = new File(['content'], 'test.csv', { type: 'text/csv' });
    const setFileMock = vi.fn();

    render(<DragNDrop setFile={setFileMock} file={testFile} />);

    const fileName = screen.getByText('test.csv');
    expect(fileName).toBeInTheDocument();

    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeInTheDocument();
  });

  it('calls setFile when a valid CSV file is dropped', async () => {
    const setFileMock = vi.fn();
    const file = new File(['content'], 'valid.csv', { type: 'text/csv' });
    const dropEvent = createDropEvent([file]);

    render(<DragNDrop setFile={setFileMock} />);

    const dropArea = screen.getByText('Select a CSV file to upload');
    await act(() => fireEvent.drop(dropArea, dropEvent));

    expect(setFileMock).toHaveBeenCalledWith(file);
  });

  it('shows error message when an invalid file is dropped', async () => {
    const setFileMock = vi.fn();
    const invalidFile = new File(['content'], 'invalid.txt', {
      type: 'text/plain',
    });
    const dropEvent = createDropEvent([invalidFile]);

    render(<DragNDrop setFile={setFileMock} />);

    const dropArea = screen.getByText('Select a CSV file to upload');
    await act(() => fireEvent.drop(dropArea, dropEvent));

    expect(setFileMock).not.toHaveBeenCalled();
  });

  it('allows deleting the selected file', () => {
    const setFileMock = vi.fn();
    const file = new File(['content'], 'test.csv', { type: 'text/csv' });

    render(<DragNDrop setFile={setFileMock} file={file} />);

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(setFileMock).toHaveBeenCalledWith(undefined);
  });
});

const createDropEvent = (files: File[]) => {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
};
