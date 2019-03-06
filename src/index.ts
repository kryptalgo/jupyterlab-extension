import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

// import {
//   IFileBrowserFactory
// } from '@jupyterlab/filebrowser';


import '../style/index.css';


/**
 * Initialization data for the kryptalgo extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'kryptalgo',
  autoStart: true,
  activate: (app: JupyterLab) => {
    // fileBrowser.defaultBrowser.model.cd('src');
  }
};

export default extension;
