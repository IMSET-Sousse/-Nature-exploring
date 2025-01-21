import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
export default function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur Nature Exploring</h1>
      <Image
        src="/images/nature.jpg" // Assurez-vous que l'image existe dans le dossier 'public'
        alt="Nature"
        width={500}
        height={300}
        priority
      />
    </div>
  );
}
export default function ContactPage() {
  return (
    <div className="p-6">
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

