import { profileData } from '../../data/profileData';

export function About() {
  return (
    <section className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
        <p className="text-zinc-400 leading-relaxed">
          {profileData.about}
        </p>
      </div>
    </section>
  );
}

