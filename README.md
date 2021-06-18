# P2 Anteaters

Welcome to our Trimester 3 Night Hawk Planner Project. 

We are creating an online planner that consists of a to do list, a dynamic calendar, and a dynamic number that lists the amount of things that needs to be done. The user will be able to create an account. We will be pulling information that will be shown on specific dates on the calendar, like holidays or games in a specific sport.

## Commercial

This is the link to the Website [Commercial](https://www.youtube.com/watch?v=saeQ9iD25us)

## How its made

Our project is comprised of two standalone sections, the **server side** and the **client side**. We did this in order to use React on the frontend in order to make a beautiful & functional website in record time.

#### Server side (Flask)

The first section of our project is our main server written in Python with the Flask lightweight framework. Our server was built to be a complete API so all actions are handled remotely through API requests from the client. This approach allows us to use a javascript framework like react for the frontend, without this approach it wouldn't be efficient.

The base of our server has two database models which are the `User` and `Todos` models that are bound through a one-to-many relationship which means that a `User` may have many `Todos` but a `Todos` may not have many `User`. Below are the model snippets.

```py
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))
    todos = db.relationship('Todos', backref='author')


class Todos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    desc = db.Column(db.Text, nullable=False)
    completed = db.Column(db.Boolean)
    date_added = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
```

Although these models would be rendered useless without server functionality so we added some API routes so that the client side of the application could interact with relational database. Below are an explanation of just 2 of the 8 routes.

**Adding Todo**

A crucial part of our application was to allow the logged in user to add a "todo", otherwise we wouldn't have anything. Similar to all of the other routes in the `app.py` we accomplished this by creating an API route that can we requested through the client side.

```py
@app.route('/add_todo/<username>', methods=['POST'])
def add_todo(username):
    d = request.get_json()
    user = User.query.filter_by(username=username).first()
    todo = Todos(name=d['name'], desc=d['desc'], completed=d['completed'], author=user)
    db.session.add(todo)
    db.session.commit()
    return 'Added Todo', 201
```

This route in particular takes a `username` parameter as well as a JSON object from the incoming POST request. This incoming JSON is then deconstructed by the individual keys after the corresponding user object matching the `username` parameter is found, these deconstructed keys are then committed into the database through the current users corresponding Id.

**Users Todos**

In order to display all of the users individual "todos" onto the screen we first need the data to be accessed by the client side. This is why we have a route that returns all of a users "todos".

```py
@app.route('/todos/<username>', methods=['GET'])
def todos(username):
    for user in User.query.filter_by(username=username):
        todos = []
        for todo in user.todos:
            todos.append({'id':todo.id, 'name': todo.name, 'desc': todo.desc, 'completed': todo.completed, 'date_added': todo.date_added})
        response = jsonify({'todos': todos})
        return response
    return 'Request failed, make sure user exists (case sensitive).', 404
```

This route takes a single parameter which is the `username` parameter, similar to the `/add_todo` route. We then use the `username` string to find the users particular corresponding object in the database, this object contains all type of information about the user although through dot notation we can loop over all of the users todos. All of the todos are then appended to an array, converted to acceptable JSON then returned back to the client. In the case that the user doesn't exist there is a fallback return that simply lets the client know that the server couldn't find the entry.

#### Client side (React)

The client side (frontend) of the application was built entirely in React, and without the server is completely functionless although servable for frontend functionality. The biggest advantage that React provides as opposed to traditional front-end development is that you can build functional components which are practically snippets of the ui that can all be combined in order to build a faster and cleaner application. Another major advantage of using React for frontend development is the access to the massive ecosystem of libraries to help aid you in the development process, this project is no exception and is utilizing lots of libraries.

**Application Structure**

The client side is divided into 2 major sections, The "server-optional" and the "server-dependant" sections. As the names imply they both function as namely implied. For each section there will be a snippet and a more in depth look into the sub sections.

###### _Server dependant_

The server optional section of the client is the section of the application where the integrity and functionality of the Flask server really shines, these areas in the client are where data is relayed back and fourth between the server and the client in order to accomplish a full stack application.

The server dependant section is comprised of the auth and dashboard sub-sections. These two sub-sections interact with the server differently although interact regardless.

- [Auth section](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/client/src/Pages/Auth.jsx) - This section has all of the forms and on-demand request functions associated with the authentication process. This page in particular is a deeply nested tree of components which each serve their purpose. In the nested `Form.jsx` component there are clear server request functions, here are the signup and login functions. Each of these functions accept a deconstructed object with different required values, those values are then converted to JSON format and "posted" to the corresponding route for server validation.

```jsx
const handleSignup = async ({ username, email, password }) => {
  const data = {
    username,
    email,
    password,
  };
  const response = await axios({
    method: "post",
    url: "https://antsapi.nighthawkcodingsociety.com/signup",
    data,
  }).catch((error) => error.response);
  if (response.status === 201) {
    setLoggingIn(true);
  } else {
    console.log(response.status);
  }
};

const handleLogin = async ({ username, password, remember }) => {
  const data = {
    username,
    password,
    remember: remember === undefined ? false : remember,
  };
  console.log(data);
  setLoading(true);
  const response = await axios({
    method: "post",
    url: "https://antsapi.nighthawkcodingsociety.com/login",
    data,
  }).catch((error) => error.response);
  if (response.status === 200) {
    setUsername(username);
    logIn();
    history.push({
      pathname: "/dashboard",
      state: { username: username, loggedIn: true },
    });
  } else {
    console.log(response.status);
  }
  setLoading(false);
};
```

- [Dashboard section](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/client/src/Pages/Dashboard.jsx) - The dashboard is the meat of the project. This page has by far the most functionality as well as interaction with the server. To oversimplify things, there are two main things that are happening within this page, the first is the **fetching of the users todos** this functionality is handled by using the username of the user logged in stored by the state to get the corresponding todos by concatenating the username in the `/todos` route. The second major part of this page is the **adding of todos for a particular user**. This function simply gets the input data from the forms in the "adding" card in the dashboard then uses that data to make a post request through axios and adds an entry to the database for the current user.

```jsx
// fetching of the users todos
const { isLoading, isError, data, error, refetch } = useQuery("todos", () =>
  axios.get(
    `https:/https://antsapi.nighthawkcodingsociety.com/todos/${state.username}`
  )
);
```

```jsx
// adding of todos for a particular user
const addTodo = async ({ name, desc }) => {
  const data = {
    name,
    desc,
    completed: false,
  };
  console.log(data);
  const response = await axios({
    method: "post",
    url: `https://https://antsapi.nighthawkcodingsociety.com/add_todo/${state.username}`,
    data,
  }).catch((error) => error.response);
  if (response.status === 201) {
    console.log("todo added");
    refetch();
  } else {
    console.log(response.status);
  }
};
```

###### _Server optional_

The server optional section of the client is arguably the less important section of the two considering that it doesn't interact with the server in any fashion. The major sub-sections of this section include the home page as well as the members sections.

- [Home Page](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/client/src/Pages/Home.jsx) - By far the most style intensive, the home page has multiple intertwined components that are configured to display the different sections of the home page. Each "feature" section on the homepage is made up from a single component, this component takes multiple props to determine the variety in the particular section.

```jsx
// Home page jsx to pass props to Feature component
<Feature
  icon="easy"
  tag={["Fundamentally easy", 1, "text-green-400"]} //green
  header="We prioritize simplicity."
>
  Generally todo applications these days have very cluttered user interfaces and
  advertisements in every corner, we aim to change that. Our ui was built
  passion and the people in mind and makes everything from viewing your todos to
  adding new ones a breeze.
  <div className="text-gray-300 text-left mt-8">
    <Link to="/auth" className="inline-block text-center">
      <div className="h-36 w-52 group px-12 py-8 rounded-2xl border-2 bg-white hover:shadow-xl hover:text-green-500 hover:border-green-500 hover:border-4 duration-200">
        <FaRegIdBadge className="text-5xl mx-auto" />
        <h1 className="mt-2 font-semibold text-xl">Register</h1>
      </div>
    </Link>
    <div className="inline-block group px-6 py-8 text-3xl bg-white">
      <TiArrowRightThick />
    </div>
    <Link to="/auth" className="inline-block text-center">
      <div className="relative h-36 w-52 group px-12 py-8 rounded-2xl border-2 bg-white hover:shadow-xl hover:text-green-400 hover:border-green-400 hover:border-4 duration-200">
        <HiOutlineUser className="text-5xl mx-auto" />
        <h1 className="mt-2 font-semibold text-xl">Login</h1>
      </div>
    </Link>
    <div className="inline-block group px-6 py-8 text-3xl bg-white">
      <TiArrowRightThick />
    </div>
    <Link to="/dashboard" className="inline-block text-center">
      <div className="relative h-36 w-52 group px-12 py-8 rounded-2xl border-2 bg-white hover:shadow-xl hover:text-green-300 hover:border-green-300 hover:border-4 duration-200">
        <BsCardChecklist className="text-5xl mx-auto" />
        <h1 className="mt-2 font-semibold text-xl">Todos</h1>
      </div>
    </Link>
  </div>
</Feature>
```

```jsx
// Feature component that takes deconstructed props from parent
export const Feature = ({ icon, tag, header, children }) => {
  const getIcon = () => {
    switch (icon) {
      case "easy":
        return <BiAward />;
      case "speed":
        return <BsLightningFill />;
      case "team":
        return <RiTeamFill />;
    }
  };

  const primary =
    tag[1] === 1
      ? "from-green-400"
      : tag[1] === 2
      ? "from-yellow-400" //blue
      : "from-blue-400";
  const secondary =
    tag[1] === 1
      ? "to-green-600"
      : tag[1] === 2
      ? "to-yellow-600" //blue
      : "to-blue-600";

  return (
    <div className="mt-36">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center ${primary} ${secondary} text-2xl text-white`}
      >
        {getIcon()}
      </div>
      <h4 className={`mt-4 uppercase ${tag[2]} font-semibold text-lg`}>
        {tag[0]}
      </h4>
      <h3 className="text-6xl font-bold">{header}</h3>
      <p className="mt-2 max-w-4xl text-xl text-gray-600 font-medium leading-8 mb-6">
        {children[0]}
      </p>
      <div>{children[1]}</div>
    </div>
  );
};
```

- [Members sections](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/client/src/Pages/Members.jsx) - The members section is a very hard section to simply represent through 1 singular file, this is because the members section is comprised of many different components that conditionally render based on the name param. This works by having the initial button with the select options redirect the user to a route that checks the specific param, depending on the param a certain member-specific component will be rendered with their corresponding information.

```jsx
// Members select page
export const Members = () => {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{ member: "Mackenzie" }}
        onSubmit={(values) => {
          history.push(`/member/${values.member}`);
        }}
      >
        {() => (
          <Form>
            <FormWrapper>
              <Field
                name="member"
                component="select"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="Mackenzie">Mackenzie</option>
                <option value="Anthony">Anthony</option>
                <option value="Pedro">Pedro</option>
                <option value="Naweid">Naweid</option>
                <option value="Cherry">Cherry</option>
              </Field>
              <SubmitButton text="Go" />
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </div>
  );
};
```

```jsx
// Redirect page for specific component
export const MemberTemplate = () => {
  let { member } = useParams();
  return (
    <div>
      {member === "Mackenzie" ? (
        <Kenzie />
      ) : member === "Anthony" ? (
        <Anthony />
      ) : member === "Pedro" ? (
        <Pedro />
      ) : member === "Naweid" ? (
        <Naweid />
      ) : member === "Cherry" ? (
        <Cherry />
      ) : (
        <h1>member not found</h1>
      )}
      <BubbleSort />
    </div>
  );
};
```

```jsx
// Example of member component
export const Anthony = () => {
  const [res, setRes] = useState(cube(2));
  return (
    <div>
      <Heading name="Anthony" />
      <Label>Cube Formula:</Label>
      <Formik
        initialValues={{ x: "" }}
        onSubmit={(values) => {
          const { x } = values;
          setRes(cube(x));
        }}
      >
        {() => (
          <Form>
            <FormWrapper>
              <InputForm label="x" name="x" type="number" />
              <SubmitButton text="Submit" />
            </FormWrapper>
          </Form>
        )}
      </Formik>
      <Answer>{res}</Answer>
    </div>
  );
};
```

**Libraries**

As previously mentioned the client side uses lots of libraries, below is a list of the **_Major_** libraries and their purpose/contribution in the project.

- [Axios](https://axios-http.com/docs/intro) - Used to make HTTP requests to the server side of the application with ease.

- [React Query](https://react-query.tanstack.com/) - Responsible for managing state as well as caching data from server responses.

- [Tailwind CSS](https://tailwindcss.com/) - Ease of styling for full application.

**Deployment**

Our client side deployment was done on [Netlify](https://www.netlify.com/), this means that we have two different deployments with no strings attached. The reason we chose to deploy the client side on Netlify instead of the raspberry pi is because on Netlify everything is git-flow oriented which means that all you need to do to deploy a client application built on node is simply login and choose the repo.

## Technical Requirements

- Python
- SQLAlchemy
- Flask
- React
- Raspberry Pi
- HTML/CSS

## Bubble Sort Lab 

[Mackenzie](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/blueprint/kenzie/routes.py#L39-L55)
[Anthony](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/blueprint/anthony/routes.py#L21-L37)
[Pedro](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/blueprint/pedro/routes.py#L15-L31)
[Naweid](https://github.com/PedroBMedeiros/P2-Anteaters/blob/main/blueprint/naweid/routes.py#L13-L29)
[Cherry]()

## Links for Crossover

|  |  | |  
| :---: | :---: | :---: | 
|[Project Plan](https://docs.google.com/document/d/11LWZ9hyue_IkX8C8bp0Zeuk3ExlGAliwQJ50faWWa-A/edit) | [Scrum Board](https://github.com/PedroBMedeiros/P2-Anteaters/projects/1)| [BluePrints](https://github.com/PedroBMedeiros/P2-Anteaters/tree/main/blueprint)
| [runtime link](http://75.6.165.166:5000/)| [Lions Github](https://github.com/MaxVukovich/P2Lions) | [Lions Crossover](https://docs.google.com/document/d/1duoyskf4muDNbS6AEM72v9KyWRofymjHcliAa2HA2Go/edit)| 

## [Mini Lab Write up](https://docs.google.com/document/d/1bvwxZ3gezqBtiqN9OtmYs8lHBbSVsHPukqHPYjIpmyM/edit?usp=sharing)
``Kenzie``: [Commit](https://github.com/PedroBMedeiros/P2-Anteaters/commit/28c264e5d921c1bed5ed72bc7192a478d82515b3#diff-878936e3665e0b47f880076edd0a10f6fc5eb7a473927a0aa374c7e3b4384def)

For point 1 I created my new class with the corresponding objects inside of my personal route. For the second point I defined a class on line 5 name "Intro", I am using this route to store information about my name and also any other data I might want to add in the future. I also created an object out of this class for the third point. This object was created on line 8. For the fourth point I display the data by passing my object in as a jinja variable so that I can display it on my page. For the final point, one thing that I became aware of when doing this was the flexibility of classes, I found it really interesting, easy and important that I could quickly add new data whilst also staying very organized.

``Anthony``: [Commit](https://github.com/PedroBMedeiros/P2-Anteaters/commit/5d118ec501ffdb1e1a44c4a9b8cabc5a0d740239)

For the first task, I created a personal blueprint under /Anthony. I then proceeded to create a class called Info, which allowed me to complete my next task in creating an object as I was able to convert my class into an object. I finished this off by making the object into a jinja variable and rendering it. I would say the thing I am most proud of is the simplicity of it all as I was able to answer all of the requirements and create a functioning system with only a few lines of code. 

``Pedro``: [Commit]()

For the **first binary point**, I built a new class with the associated objects within my personal route -- For the **second binary point**, on line 6, I defined a class called *Intro*. I'm using this route to store information about my name as well as any other information I may want to add in the future -- For the **third stage**, I made an object out of this class. Line 8 is where this object was made -- For the **fourth point**, I show the data by making my object a jinja variable, which allows me to show it on my page -- My **WOW** for this check-in was that I was able to add a real time clock to the navbar on the website. -- [Practice Test](https://docs.google.com/document/d/1iRuTxr_HcBfSpD-JJubtWPwv1-Jk5tKrxsIrzKTXIqY/edit)

``Naweid``: [Commit](https://github.com/PedroBMedeiros/P2-Anteaters/commit/0d6076d1f8b38a3fe1132bc776d27234df28e879#diff-912f2989dafca53eafd7e883ae77456faaef67846d74dd560016ff15b9ccf709R2-R12)

For the first point, I created a new class in my blueprent under routes.py. For the second point, I was able to define/enhance this class by naming it intro, which I can use to create an object out of. Forthe third point, I was able to create the object out of the class "intro" on line 8 where it states "intro=Intro()." For the fourth point, I was able to display the data by making it a jinja variable. For the last and final point, my wow factor is that I was able to concise my code in order to make the code simple, efficent, and get the points needed.
# Delivery of Running Code and Big Ticket Items: [Scrum Board](https://github.com/PedroBMedeiros/P2-Anteaters/projects/1)
Here you will find our progress throughout this project. We use tickets to track our goals, items that needs to be done, items in progress, and items that are finished and deployed.

# Roles

``Anthony`` He is going to handle all the SQLalchemey and python mechanics as he is going to create the database, create a rest api, and handle the backend with the planner.

``Mackenzie`` She is going to work with Naweid on handling all the HTML and CSS aspects in making the project look nice and formating the planner to function better.

``Pedro`` He is going to create the sign up system/login system and deploy our project as well as create a domain for our website.

``Naweid`` He is going to work with Kenzie on handling the HTML and CSS aspects and he is going to help Pedro with the login system.

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
