import { ElectronService } from './electron.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FsstorageService {

  path = '';
  data = {
    // 800x600 is the default size of our window
    windowBounds: { width: 800, height: 600 }
  };

  constructor(public electronService: ElectronService) {

  }
  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }




  // This will just return the property on the `data` object
  get(key) {
      return this.data[key];
  }

  // ...and this will set it
  set(key, val) {
      console.log('kang 12');
      this.data[key] = val;

      if (!this.isElectron) {
        return;
      }
      console.log('kang fsstorage');

      this.path = this.electronService.path.join('./', 'todo.json');
      console.log(this.path);
      const userDataPath: any = this.electronService.userDataPath;

      console.log(this.data);
      // Wait, I thought using the node.js' synchronous APIs was bad form?
      // We're not writing a server so there's not nearly the same IO demand on the process
      // Also if we used an async API and our app was quit before the asynchronous write had a chance to complete,
      // we might lose that data. Note that in a real app, we would try/catch this.
      this.electronService.fs.writeFileSync(this.path, JSON.stringify(this.data));
  }

  parseDataFile(filePath, defaults) {
      // We'll try/catch it in case the file doesn't exist yet, which will be the case on the first application run.
      // `fs.readFileSync` will return a JSON string which we then parse into a Javascript object
      try {
          return JSON.parse(this.electronService.fs.readFileSync(filePath) as any);
      } catch (error) {
          // if there was some kind of error, return the passed in defaults instead.
          return defaults;
      }
  }


}
