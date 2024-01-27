# The Developer

This is my first proper React project.

This freeCodeCamp project's [example app](https://random-quote-machine.freecodecamp.rocks/) was used as a template, hence, the similarity. I might have looked into its HTML structure on devtools. However, I would not say I purposefully copied anything, except: the font-style, the href attribute (URI encoding, I did not know how to initially do this) of the <a> link element, and/or a little or more ideas I might have took.
  
This project is kept to mostly a single-component app only. This is because the <Footer /> component is rendered only once - on page load.

My goal is to keep the code simple. I did not break it into multiple components. This might have to cost more on complexity - because the parent component will have to re-render anyway due to state management across different levels of child elements.
 
The window.console.log() is used because Vite does not run the console.log() on devtools.


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
	`npm i --save-dev gh-pages`

- Second, update *vite.config.js* file.  Add a base-URL (repo-name) as property-value within the **defineConfig({})**:
	`base: "/{repo-name}/"`

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
	`npm run deploy`

- Last, on your GitHub repository, go **Settings**. Go to **Pages**.  Under **Build and deployment**: set the **Source** to *Deploy from a branch*; set the **Branch** to *gh-pages* and */(root)*. Click **Save**.

# FontAwesome + React
Set up fontawesome with React. [click here](https://fontawesome.com/docs/web/use-with/react/).

Step 1: Ran the commands on the terminal:

	# First, installed the core package, to make the icons work
	npm i --save @fortawesome/fontawesome-svg-core

	# Second, installed the icon packages, for the selection of free icons:
	npm i --save @fortawesome/free-solid-svg-icons
	npm i --save @fortawesome/free-regular-svg-icons
	npm i --save @fortawesome/free-brands-svg-icons

	#Last, installed the Font Awesome react component:
	npm i --save @fortawesome/react-fontawesome@latest

Step 2: Searched for free icons from fontawesome [here](https://fontawesome.com/search).

Step 3: Added a fontawesome icon on React.js individually:

	// Import statement
	import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

	// Integrate the icon on JSX
	<FontAwesomeIcon icon={faEnvelope} />