import "@testing-library/jest-dom"

global.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
  