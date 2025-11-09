// Polyfills for Node.js modules in browser
import { Buffer } from 'buffer';

// Make Buffer available globally
(window as any).Buffer = Buffer;
(window as any).global = window;

// Ensure process is available (some libraries need it)
if (typeof (window as any).process === 'undefined') {
  (window as any).process = {
    env: {},
    version: '',
    versions: {},
    browser: true
  };
}

