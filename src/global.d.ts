export {}; // make this a module

declare global {
  interface Window {
    electronAPI: {
      getAppVersion(): Promise<string>;
    };
  }
}
