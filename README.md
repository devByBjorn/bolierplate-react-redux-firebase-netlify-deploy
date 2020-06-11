# Boilerplate for a react-redux web app with firebase DB 

1. Download or clone project
2. Yarn install

# Connect to firebase

3. Create a firebase project at firebase.com - add the SDK scripts in the env.development file
4. Create an additional project in firebase for test database porpuse - add the SDK scripts in the env.test file

# Deploy with GitHub and Netlify

5. Create a GitHub repository, add, commit and push to repository
6. Create a new site at Netlify.com via GitHub, choose the github repository.

	Build command: yarn run build:prod <br>
	Publish directory:</bold> public

7. Go to firebase - the project - authentication - sing in method and scroll down to authorized domains. Add domian. Add your netlify domain (without https:// ).
8. Visit netlify url and click the login button. If you can login with your google account you should see the dashboard page. If not, open the console and look for errors. Google firebase leaves you with good error explinations. 
