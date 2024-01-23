# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### GitHub pages + Vite
*To start, a repo is made, and development files are pushed.*

- First, install gh-pages:
	`npm i --save-dev gh-pages`

- Second, update vite.config.js. Add a base-URL (repo-name) as property-value within the defineConfig({}):
	`base: "/fcc-rqm-1.0-vite`

- Third, update package.json with a "homepage" property:
	`"homepage": "https://{user-name}/github.io/{repo-name}/"`

- Fourth, add two prop "script" properties in the package.json file:
	`"scripts": {
		"predeploy": "npm run build",
		"deploy": "gh-pages -d dist",
		...
	}`

- Fifth, deploy the app:
	`npm run deploy`

- Last, on GitHub, go to the repo Settings. Set the Build and deployment 'Source' to 'Deploy from a branch'. Set the 'Branch' to 'gh-pages' and '/(root)'. Click 'Save'.

### FontAwesome + React

	# First, install the core package, to make the icons work
	npm i --save @fortawesome/fontawesome-svg-core

	# Second, install the icon packages, for the selection of free icons:
	npm i --save @fortawesome/free-solid-svg-icons
	npm i --save @fortawesome/free-regular-svg-icons
	npm i --save @fortawesome/free-brands-svg-icons

	#Last, install the Font Awesome react component:
	npm i --save @fortawesome/react-fontawesome@latest