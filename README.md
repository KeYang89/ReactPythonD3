# React-Flask #
* Python 3.x
* Pytest
* Material UI: https://material-ui.com/
* Flask
* React
* Redux
* React-Router 2.0
* React-Router-Redux
* Babel 6
* SCSS processing
* Webpack 1
* React D3: https://github.com/yang-wei/rd3
* redux-easy-boilerplate: https://github.com/dternyak/React-Redux-Flask/

### Create DB
```sh
$ export DATABASE_URL="postgresql://username:password@localhost/mydatabase"

or

$ export DATABASE_URL="mysql+mysqlconnector://username:password@localhost/mydatabase"

or

$ export DATABASE_URL="sqlite:///your.db"
```
Create Database
```
$ python manage.py create_db
```

### Front-end
```sh
$ cd static
$ npm install
```

### Run Back-End

```sh
$ python manage.py runserver
```

### Test Back-End

```sh
$ python test.py --cov-report=term --cov-report=html --cov=application/ tests/
```

### Run Front-End

```sh
$ cd static
$ npm start
```

### Build Front-End

```sh
$ npm run build:production
```

### New to Python?

If you are approaching this demo as primarily a frontend dev with limited or no python experience, you may need to install a few things that a seasoned python dev would already have installed.

Most Macs already have python 2.7 installed but you may not have pip install. You can check to see if you have them installed:

```
$ python --version
$ pip --version 
```

If pip is not installed, you can follow this simple article to [get both homebrew and python](https://howchoo.com/g/mze4ntbknjk/install-pip-on-mac-os-x)

After you install python, you can optionally also install python 3

```
$ brew install python3
```

Now you can check again to see if both python and pip are installed. Once pip is installed, you can download the required flask modules:

```
$ sudo pip install flask flask_script flask_migrate flask_bcrypt 
```

Now, you can decide on which database you wish to use. 

### Extra

```
$ sudo pip install mysql-connector-python-rf
$ export DATABASE_URL="mysql+mysqlconnector://username:password@localhost/mydatabase"
$ python manage.py create_db
```

Note: you do not need to run "python manage.py db upgrade" or "python manage.py db migrate" if its your first go at it

4. Run Back-End

```
$ python manage.py runserver
```

If all goes well, you should see ```* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)``` followed by a few more lines in the terminal.

5. open a new tab to the same directory and run the front end

```
$ cd static
$ npm install
$ npm start
```

6. open your browser to http://localhost:3000/register and setup your first account
7. grab a beer and enjoy! By this point, you should be able to create an account and login without errors. 




