# Gym-model-2
This is a gym-themed website designed for training purposes.

## Demo
[<img src="https://github.com/marcelovicentegc/Gym-model-2/blob/master/Gym-model-2.gif" width="640" height="360" />](https://youtu.be/nt8_p0b1QIY)

## Directions
### On a Windows
1. Clone this repo: `git clone https://github.com/marcelovicentegc/Gym-model-2.git`
2. Create a virtual environment: `virtualenv venv_gym`
3. Change directories and activate the virtual environment: `cd venv_gym/Scripts; .\activate`
4. Change directories and install python requirements: `cd ../../Gym-model-2; pip install -r requirements.txt`
5. Install javascript requirements: `npm install` or `yarn install`
6. Make migrations: `python manage.py makemigrations`
7. Migrate: `python manage.py migrate`
8. Create a super user: `python manage.py createsuperuser`
9. Run the application: `python manage.py runserver`
10. Head to `http://127.0.0.1:8000/admin/` and play with it

### On a Mac/Linux
1. Clone this repo: `git clone https://github.com/marcelovicentegc/Gym-model-2.git`
2. Create a virtual environment: `virtualenv venv_gym`
3. Activate the virtual environment: `source venv_gym/bin/activate`
4. Change directories and install python requirements: `cd Gym-model-2 && pip install -r requirements.txt`
5. Install javascript requirements: `npm install` or `yarn install`
6. Make migrations: `python manage.py makemigrations`
7. Migrate: `python manage.py migrate`
8. Create a super user: `python manage.py createsuperuser`
9. Run the application: `python manage.py runserver`
10. Head to `http://127.0.0.1:8000/admin/` and play with it