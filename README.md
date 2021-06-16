# P2 Anteaters

Welcome to our Trimester 3 Night Hawk Planner Project.

This is the link to our website -- https://p2anteaters-todos.tk/

We created an online planner that consists of a to do list. The user is able to create an account and login after that. We pulled information through an API with a crossover group that is shown by displaying the weather in different places. 

## Technical Requirements

- Python
- SQLAlchemy
- Flask
- React
- Raspberry Pi
- HTML/CSS
- Rest API

## Project Check-in  -- 6/16/2021

Everything thing is functional, including the to do list, API's and databases. The project is now complete

We just recently completed deployment. The backend is deployed on Mr. Mortensen's hardware. While the front end is deployed locally. The api is deployed on Mr. Mortensen's python led. And the nginx is deployed on society white. 

The [commercial]() is ready to introduce newcomers to the website.

## Minilabs - https://p2anteaters-todos.tk/members

[Mackenzie](https://p2anteaters-todos.tk/member/Mackenzie)
- [Quadratic Formula](https://github.com/PedroBMedeiros/P2-Anteaters/blob/83c12e225b090056899ee81687e0d2a0ce8d8cb5/client/src/members/Kenzie.jsx#L16-L37)
- [Bubble Sort](https://github.com/PedroBMedeiros/P2-Anteaters/blob/83c12e225b090056899ee81687e0d2a0ce8d8cb5/client/src/members/BubbleSort.jsx#L9-L40)

[Anthony](https://p2anteaters-todos.tk/member/Anthony)
- [Cube Formula](https://github.com/PedroBMedeiros/P2-Anteaters/blob/83c12e225b090056899ee81687e0d2a0ce8d8cb5/client/src/members/Anthony.jsx#L16-L34)
- [Bubble Sort](https://github.com/PedroBMedeiros/P2-Anteaters/blob/83c12e225b090056899ee81687e0d2a0ce8d8cb5/client/src/members/BubbleSort.jsx#L9-L40)

[Pedro](https://p2anteaters-todos.tk/member/Pedro)
- [Pythagorean Theorem]()
- [Bubble Sort](https://github.com/PedroBMedeiros/P2-Anteaters/blob/83c12e225b090056899ee81687e0d2a0ce8d8cb5/client/src/members/BubbleSort.jsx#L9-L40)

[Naweid](https://p2anteaters-todos.tk/member/Naweid)
- [Addition Formula]()
- [Bubble Sort](https://github.com/PedroBMedeiros/P2-Anteaters/blob/83c12e225b090056899ee81687e0d2a0ce8d8cb5/client/src/members/BubbleSort.jsx#L9-L40)

[Cherry](https://p2anteaters-todos.tk/member/Cherry)
- [Multiplication Formula]()
- [Bubble Sort](https://github.com/PedroBMedeiros/P2-Anteaters/blob/83c12e225b090056899ee81687e0d2a0ce8d8cb5/client/src/members/BubbleSort.jsx#L9-L40)

# Roles

``Anthony`` He is going to handle all the SQLalchemey and python mechanics as he is going to create the database, create a rest api, and handle the backend with the planner.

``Mackenzie`` She is going to work with Naweid on handling all the HTML and CSS aspects in making the project look nice and formating the planner to function better.

``Pedro`` He is going to create the sign up system/login system and deploy our project as well as create a domain for our website.

``Naweid`` He is going to work with Kenzie on handling the HTML and CSS aspects and he is going to help Pedro with the login system.


## Links for Initial Crossover

|  |  | |  
| :---: | :---: | :---: | 
|[Project Plan](https://docs.google.com/document/d/11LWZ9hyue_IkX8C8bp0Zeuk3ExlGAliwQJ50faWWa-A/edit) | [Scrum Board](https://github.com/PedroBMedeiros/P2-Anteaters/projects/1)| [BluePrints](https://github.com/PedroBMedeiros/P2-Anteaters/tree/main/blueprint)
| [runtime link](http://75.6.165.166:5000/)| [Lions Github](https://github.com/MaxVukovich/P2Lions) | [Lions Crossover](https://docs.google.com/document/d/1duoyskf4muDNbS6AEM72v9KyWRofymjHcliAa2HA2Go/edit)| 

## [Mini Lab Write up](https://docs.google.com/document/d/1bvwxZ3gezqBtiqN9OtmYs8lHBbSVsHPukqHPYjIpmyM/edit?usp=sharing)
``Kenzie``: 

For point 1 I created my new class with the corresponding objects inside of my personal route. For the second point I defined a class on line 5 name "Intro", I am using this route to store information about my name and also any other data I might want to add in the future. I also created an object out of this class for the third point. This object was created on line 8. For the fourth point I display the data by passing my object in as a jinja variable so that I can display it on my page. For the final point, one thing that I became aware of when doing this was the flexibility of classes, I found it really interesting, easy and important that I could quickly add new data whilst also staying very organized.

``Anthony``: [Commit](https://github.com/PedroBMedeiros/P2-Anteaters/commit/5d118ec501ffdb1e1a44c4a9b8cabc5a0d740239)

For the first task, I created a personal blueprint under /Anthony. I then proceeded to create a class called Info, which allowed me to complete my next task in creating an object as I was able to convert my class into an object. I finished this off by making the object into a jinja variable and rendering it. I would say the thing I am most proud of is the simplicity of it all as I was able to answer all of the requirements and create a functioning system with only a few lines of code. 

``Pedro``: [Commit](https://github.com/PedroBMedeiros/P2-Anteaters/commit/25d000ebbcc0a873786496ccd679c14615de1b45#diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959)

For the **first binary point**, I built a new class with the associated objects within my personal route -- For the **second binary point**, on line 6, I defined a class called *Intro*. I'm using this route to store information about my name as well as any other information I may want to add in the future -- For the **third stage**, I made an object out of this class. Line 8 is where this object was made -- For the **fourth point**, I show the data by making my object a jinja variable, which allows me to show it on my page -- My **WOW** for this check-in was that I was able to add a real time clock to the navbar on the website. -- [Practice Test](https://docs.google.com/document/d/1iRuTxr_HcBfSpD-JJubtWPwv1-Jk5tKrxsIrzKTXIqY/edit). Since we now have tranferred to using react, me and Anthony have each created a route to simplify the crossover's experience when creting their connection to our project and vice versa.
Now working on deploying to Mr. Mortensen's hardware.

``Naweid``: [Commit](https://github.com/PedroBMedeiros/P2-Anteaters/commit/0d6076d1f8b38a3fe1132bc776d27234df28e879#diff-912f2989dafca53eafd7e883ae77456faaef67846d74dd560016ff15b9ccf709R2-R12)

For the first point, I created a new class in my blueprent under routes.py. For the second point, I was able to define/enhance this class by naming it intro, which I can use to create an object out of. Forthe third point, I was able to create the object out of the class "intro" on line 8 where it states "intro=Intro()." For the fourth point, I was able to display the data by making it a jinja variable. For the last and final point, my wow factor is that I was able to concise my code in order to make the code simple, efficent, and get the points needed.
# Delivery of Running Code and Big Ticket Items: [Scrum Board](https://github.com/PedroBMedeiros/P2-Anteaters/projects/1)
Here you will find our progress throughout this project. We use tickets to track our goals, items that needs to be done, items in progress, and items that are finished and deployed.

### [Contributes](https://github.com/PedroBMedeiros/P2-Anteaters/graphs/contributors)
Here you will find each contributors' progress, commit history, and amount of commits

## Big Ideas

```Big Idea 1: Creative Development```    
```10–13%```

```Big Idea 2: Data ```   
```17–22%```

```Big Idea 3: Algorithms and Programming ```  
```30–35%```

```Big Idea 4: Computer Systems and Networks```   
``` 11–15%```

```Big Idea 5: Impact of Computing```      
```21–26%```

## Contact
[MACKENZIE A](https://github.com/kenzie-rylie)

[ANTHONY G](https://github.com/Giustanthony)

[PEDRO M](https://github.com/PedroBMedeiros)

[NAWEID H](https://github.com/Naweid)
