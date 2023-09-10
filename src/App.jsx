import Header from "./components/Header";
import Joke from "./components/Joke";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="jokes">
        <Joke 
          joke="I got my daughter a fridge for her birthday"
          punchline="I can't wait to see her face light up when she opens it"
        />
        <Joke 
          joke="How did the hacker escape the police?"
          punchline="He just ransomware!"
        />
        <Joke 
          joke="Why don't pirates travel on mountain roads?"
          punchline="Scurvy"
        />
        <Joke 
          joke="Why do bees stay in the hive in the winter?"
          punchline="Swarm"
        />
        <Joke 
          joke="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
        />
        <Joke 
          joke="Why do we tell actors to break a leg?"
          punchline="Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor."
        />
        <Joke 
          joke="Why do not pirates take a shower before they walk the plank?"
          punchline="They just wash up on shore."
        />
        <Joke 
          joke="What kind of candy do astronauts like?"
          punchline="Mars bars."
        />
        <Joke 
          joke="I wanted to buy some camo pants"
          punchline="but couldn't find any"
        />
        <Joke 
          joke="What do you call a lazy kangaroo?"
          punchline=" A pouch potato."
        />
        <Joke 
          joke="What does a pig put on dry skin?"
          punchline="Oinkment."
        />
        <Joke 
          joke="How do you open a banana?"
          punchline="With a mon-key."
        />
        <Joke 
          joke="Which is faster, hot or cold?"
          punchline="Hot, because you can catch cold."
        />
      </div>
    </>
  );
}

export default App;
