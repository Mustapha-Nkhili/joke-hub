import funnyImg2 from "../assets/3d-render-of-emoji-icon.webp";

export default function Joke({joke, punchline}) {
  return (
    <div className="joke">
      <header>cool</header>
      <main>
        <h2>{joke}</h2>
        <p>{punchline}</p>
      </main>
      <img
        src={funnyImg2}
        alt="this is an image which expresses funny moments"
      />
    </div>
  );
}
