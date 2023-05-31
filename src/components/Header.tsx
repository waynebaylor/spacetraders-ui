import { Raw, createElement } from '@b9g/crank';

export function Header() {
  const asciiArt = `<pre style="margin:0; padding:0; border:none;">
                                   _                    _                  
                                  | |                  | |                 
  ___  _ __    __ _   ___  ___    | |_  _ __  __ _   __| |  ___  _ __  ___ 
 / __|| '_ \\  / _\` | / __|/ _ \\   | __|| '__|/ _\` | / _\` | / _ \\| '__|/ __|
 \\__ \\| |_) || (_| || (__|  __/   | |_ | |  | (_| || (_| ||  __/| |   \\__ \\
 |___/| .__/  \\__,_| \\___|\\___|    \\__||_|   \\__,_| \\__,_| \\___||_|   |___/
      | |                                                                  
      |_|                                                                  
  </pre>`;

  return <Raw value={asciiArt} />;
}
