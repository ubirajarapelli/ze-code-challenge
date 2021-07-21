import '@testing-library/jest-dom';

const consoleMocks = {
  log: jest.fn(),
  error: jest.fn(),
  table: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
};

(global).console = consoleMocks;