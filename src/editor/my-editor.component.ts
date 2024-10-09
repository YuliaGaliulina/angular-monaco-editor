import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';

@Component({
    selector: 'app-editor',
    standalone: true,
    imports: [
        FormsModule,
        EditorComponent
    ],
    templateUrl: './my-editor.component.html',
    styleUrl: './my-editor.component.scss'
})
export class MyEditorComponent {
    
    editorOptions = {
        language: 'json',
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineHeight: 20,
        fontSize: 14,
        wordWrap: 'on',
        wrappingIndent: 'indent',
        theme: 'customTheme'
    };
    
    code = `
        {
            "$schema": "http://json-schema.org/draft-07/schema",
            "title": "ng-packagr Target",
            "description": "ng-packagr target options for Build Architect. Use to build library projects.",
            "type": "object",
            "properties": {
                "project": {
                    "type": "string",
                    "description": "The file path for the ng-packagr configuration file, relative to the current workspace."
                },
                "tsConfig": {
                    "type": "string",
                    "description": "The full path for the TypeScript configuration file, relative to the current workspace."
                },
                "watch": {
                    "type": "boolean",
                    "description": "Run build when files change.",
                    "default": false
                },
                "poll": {
                    "type": "number",
                    "description": "Enable and define the file watching poll time period in milliseconds."
                }
            },
            "additionalProperties": false,
            "required": [
                "project"
            ]
        }
    `;
}
