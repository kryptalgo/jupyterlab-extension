import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IFileBrowserFactory
} from '@jupyterlab/filebrowser';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  ILauncher
} from '@jupyterlab/launcher';

import '../style/index.css';


/**
 * Initialization data for the kryptalgo extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'kryptalgo',
  autoStart: true,
  requires: [IFileBrowserFactory, ICommandPalette, ILauncher],
  activate: (app: JupyterLab, fileBrowser: IFileBrowserFactory, palette: ICommandPalette, launcher: ILauncher) => {
    // Add command to get started with Kryptalgo
    const commandGetStarted = 'kryptalgo:getstarted'
    app.commands.addCommand(commandGetStarted, {
      label: 'Get started !',
      execute: () => {
        const fileBrowserModel = fileBrowser.defaultBrowser.model;
        fileBrowserModel.cd('/kryptalgo').then(() => {
          fileBrowserModel.manager.openOrReveal('kryptalgo/Beginner Tutorial.ipynb');
        });
      },
    });
    palette.addItem({category: 'Kryptalgo', command: commandGetStarted});
    launcher.add({
      category: 'Notebook',
      rank: 0,
      command: commandGetStarted,
      kernelIconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSpGn4ptZOx1_hrpX_DFTY4obLdkbbODrGFItNAcdp_U0796X',
    });
  }
};

export default extension;
