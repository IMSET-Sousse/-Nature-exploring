function About() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">À propos</h1>
      <p className="mt-4 text-lg">
        Bienvenue sur la page À propos de Nature Exploring. Nous explorons des lieux magnifiques en Tunisie et en Afrique du Nord.
      </p>
    </div>
  );
}

function Nav() {
  return (
    <nav className="bg-green-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white">Accueil</a>
        </li>
        <li>
          <a href="/about" className="text-white">À propos</a>
        </li>
      </ul>
    </nav>
  );
}


export default function App() {
  return (
    <div className="p-6">
      <Nav />
      <About />
      <h1 className="text-4xl font-bold">Contactez-nous</h1>
      <form className="mt-4">
        <div>
          <label htmlFor="name" className="block">Nom</label>
          <input type="text" id="name" className="border p-2 w-full" />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block">Email</label>
          <input type="email" id="email" className="border p-2 w-full" />
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="block">Message</label>
          <textarea id="message" className="border p-2 w-full" rows="4"></textarea>
        </div>
        <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2">
          Envoyer
        </button>
      </form>
    </div>
  );
}
