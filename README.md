# Travel Planner App – Setup Guide

First, create a new folder to house your virtual environment.

Open your favourite code editor, and create a virtual environment (MacOS). Start it up:

```bash
python3 -m venv venv
source venv/bin/activate 
```
If you are using Windows, do it by pasting this in the terminal:
```bash
python3 -m venv venv
venv/bin/activate 
```

Install git if necessary. Then, clone into the repo: 

```bash
git clone https://github.com/kienndo/SE4A_KienNinhDo_JulieRonesenLandaas_OleMandiusHarmThorrud.git
```

When cloned into the repo, navigate to the root folder:

```bash
cd SE4A_KienNinhDo_JulieRonesenLandaas_OleMandiusHarmThorrud
```

Once here, you can install the requirements.

```bash
pip install -r requirements.txt
```

Create a `.env` file by pasting the following contents in the terminal:

```bash
echo "SECRET_KEY='django-insecure-@xxum1*m@4c)rzux6qgn3r70)\$7ry1^$_a-l+c=7ftc*hlxt-^'
TICKETMASTER_API_KEY=B3pcAtorOZdM5qHffd2Ogd8N5TUSsLat
OPENAI_API_KEY=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
WEATHER_API_KEY=e10b7018498e647fd5c84fac60bd9a11" > .env
```

And get the backend Django server up and running:

```bash
python manage.py makemigrations KJObackend
python manage.py migrate
python manage.py runserver
```

Now, we are ready to get the frontend up and running. 

Open a new terminal and run:

```bash
cd travel-planner-app
```

From here, run:

```bash
npm install
npm start
```

And happy testing!

---

## NB!

There are five pre-created users to play with: marco, giulia, luca, sofia and andrea.  
To log in to any of them, use the relevant username, and the password `usernamepolimi`.  
For example, the password for Marco’s user is `marcopolimi`.

If you want to see what is happening in the database under the hood, you can call for example:

```bash
curl -H "Authorization: Token giuliasToken" http://localhost:8000/api/trips/ | jq 
```

For this, you need the authentication tokens of the different users. These are:

- **marco**: `7d4b8e58a735ac48bca263043e2ca57297e1c2cd`
- **giulia**: `4b4a8a5c48b1da7c339fa471ef1c1e25445efd54`
- **luca**: `318719020550ee86b557f9fc7a1688b9e51a4e28`
- **sofia**: `64fdf7b5fda546e5b864073d7a409dc0fdb39a7c`
- **andrea**: `2036aa3ad715822f36918b236f2588a7a13b9f18`
