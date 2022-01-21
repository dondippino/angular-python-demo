
# Architecture / Design
This project is a very minimal demo, using Angular(frontend), Python(Flask) on the backend and docker. ```docker-compose```is used for the overall deployment of the application. The user interface is built on Angular Material,while also Tailwind CSS was used for easy styling.

## Backend (Flask, Flask-Restful & Docker) ##
The entire setup of the backend is handled by docker
The ```Dockerfile``` in the root of the backend project, is setup to automate the deployment of the backend, also to scale the backend (if needed) 

## Frontend (Angular) ##
The frontend has mainly 2 pagess: Login page and Transactions page. Services in Angular were also implemented as all api calls are wrapped in services.

# How to install
1. Run the following command in CMD (Windows) or Terminal (Mac & Linux)
```git clone https://github.com/dondippino/angular-python-demo.git```
2. Go to the cloned directory
```cd angular-python-demo```
3. Run the ```run.sh``` script or use docker-compose directly 
```./run.sh``` or ```docker-compose down && docker-compose build && docker-compose up```
4. Go to the frontend directory (Open an new terminal)
```cd frontend```
5. Install dependencies
```npm install```
6. Run the application
```npm run start```
7. Visit http://localhost:4200 or http://127.0.0.1:4200 in the browser 


# Technology Used
1. Docker
2. Docker Compose
2. Angular(Javascript/Typescript)
3. Flask (Python)
4. Angular Material
5. Tailwind CSS
