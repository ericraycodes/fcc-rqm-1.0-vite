# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Deploy to GitHub pages: Vite + config
Development on your local machine or chosen environment must complete first.

The *"preview"* script can (or should) be used to preview the development's build-output locally.  When app runs to requirement, proceed to steps below for deployment.

To deploy, a github *repository* must be made already, and development files are pushed into.  It can be not necessary to push these changes to the repo.

- First, install **gh-pages**:
	```npm i --save-dev gh-pages```

- Second, update *vite.config.js* file.  Add a base-URL (repo-name) as property-value within the **defineConfig({})**:
	```base: "/{repo-name}/"```

- Third, update *package.json* file with a *"homepage"* property:
	```"homepage": "https://{user-name}/github.io/{repo-name}/"```

- Fourth, add two *"script"* properties in the *package.json* file. The *'dist'* in the *"deploy"* property-value is the build-output folder:
	```
	"scripts": {
		"predeploy": "npm run build",
		"deploy": "gh-pages -d dist",
		...
	}
	```

- Fifth, deploy the app:
	```npm run deploy```

- Last, on your GitHub repository, go **Settings**. Go to **Pages**.  Under **Build and deployment**: set the **Source** to *Deploy from a branch*; set the **Branch** to *gh-pages* and */(root)*. Click **Save**.

# FontAwesome + React
Run the commands on the terminal:

	# First, install the core package, to make the icons work
	npm i --save @fortawesome/fontawesome-svg-core

	# Second, install the icon packages, for the selection of free icons:
	npm i --save @fortawesome/free-solid-svg-icons
	npm i --save @fortawesome/free-regular-svg-icons
	npm i --save @fortawesome/free-brands-svg-icons

	#Last, install the Font Awesome react component:
	npm i --save @fortawesome/react-fontawesome@latest

### Performance related

- robust component render
- the use of axios?
- aceesibility: color selection.
- Mobile and desktop responsiveness.
- useMemo, useCallback hooks
- github new branch to address these issues.
