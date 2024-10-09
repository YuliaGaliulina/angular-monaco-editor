import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NgxMonacoEditorConfig, provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { customTheme } from '../theme';

const monacoConfig: NgxMonacoEditorConfig = {
    onMonacoLoad: () => {
        // @ts-ignore
        window.monaco.editor.defineTheme('customTheme', customTheme);
    }
};

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideMonacoEditor(monacoConfig)
  ]
};
