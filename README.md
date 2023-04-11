# Intuit Front-end playground

## VS Code configuration

The configuration below, if added to VS Code's `settings.json` file, should prioritize ESLint for
formatting JavaScript and TypeScript files, and use Prettier for HTML and JSON files.

You can either add this to your global `settings.json` file, OR, you can do the following:  

* Create a `.vscode` folder at the root of a project
* Create `settings.json` in the `.vscode` folder
* Add the code below to `settings.json`
* Now you have only configured these settings for this particular project

```json
{
	"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
	"eslint.format.enable": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
  // Set Prettier as the default formatter for HTML, JSON, and JSONC
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[jsonc]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},

  // Set ESLint as the default formatter for JS, TS, JSX, TSX
	"[javascript]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},
	"[javascriptreact]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},
	"[typescript]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},
}
```
