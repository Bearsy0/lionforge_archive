A video game (Crowfall) guild website with an ordering system for customers and a working database `sqlite3` system for managing orders. This used to be hosted on `lionforgeguild.com` (defunct).


- Based on Django (Python 3.9). The Django app is called `craftquests`.
- `python manage.py runserver` to run server (locally).
- `http://127.0.0.1:8000/` to access main page.
- `http://127.0.0.1:8000/craftquests` to access crafting request interface.
- The Discord bot in the `https://github.com/Bearsy0/craftquests` repository automatically fetches new orders and message them to the guild Discord. This bot acts as a back-end management system to assign orders to crafters and communicates back to this server when an order is completed..
- `http://127.0.0.1:8000/admin` to access the admin page to see the order database (user: test, password: test).
