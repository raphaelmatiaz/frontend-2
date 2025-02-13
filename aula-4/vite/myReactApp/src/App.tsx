import './App.css'
import Card from './components/Card/Card.tsx'
import Greeting from './components/Greeting.tsx'
import AccountBalance from './components/AccountBalance.tsx'

const cardA = {
  title: "Very Fancy Card",
  imgUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJpMTFtODhzNzJudmIyeXljNXdqc21wam45cHd4YXhiNmt1Z2duZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minus dignissimos corporis, eum odit, ut maxime nobis amet fuga deleniti magni eveniet, quis ducimus praesentium. Accusamus dicta animi hic. Rerum debitis delectus maxime odit, ex molestiae commodi illo doloribus eaque.",
  ctaText: "Click Me!",
}

const cardB = {
  title: "Cool Animated Card",
  imgUrl:
    "https://media2.giphy.com/media/l0HlMROGbUjFjv8GA/giphy.gif",
  text: "This card is really cool and has animations! It's a fantastic addition to your collection. Enjoy the smooth motion and dynamic energy!",
  ctaText: "Discover More",
};

const cardC = {
  title: "Mysterious Card",
  imgUrl:
    "https://media3.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
  text: "No one truly knows where this card came from. It appeared one day, carrying an air of mystery and intrigue. What secrets does it hold?",
  ctaText: "Uncover the Secret",
};

function App() {

  return (
    <>
      <AccountBalance balance={1000}></AccountBalance>
      <Greeting name="Rafael"></Greeting>
      <Card title={cardA.title} imgUrl={cardA.imgUrl} text={cardA.text} ctaText={cardA.ctaText}></Card>
      <Card title={cardB.title} imgUrl={cardB.imgUrl} text={cardB.text} ctaText={cardB.ctaText}></Card>
      <Card title={cardC.title} imgUrl={cardC.imgUrl} text={cardC.text} ctaText={cardC.ctaText}></Card>
    </>
  )
}

export default App
