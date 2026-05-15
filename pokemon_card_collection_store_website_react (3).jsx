export default function PokemonCardWebsite() {
  const particles = Array.from({ length: 28 }, (_, i) => i);

  const featuredCards = [
    {
      name: 'Premium PSA Collection',
      price: 'RM 8,500',
      image:
        'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'RAW CARD',
      price: 'RM 4,200',
      image:
        'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Sealed ETB Collection',
      price: 'From RM 399',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes particleMove {
          0% { transform: translateY(0) scale(1); opacity: 0.25; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-120px) scale(1.4); opacity: 0; }
        }
        @keyframes shine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes vaultPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.18); }
          50% { box-shadow: 0 0 55px rgba(250, 204, 21, 0.38); }
        }
        .floating-card { animation: floatCard 5s ease-in-out infinite; }
        .vault-glow { animation: vaultPulse 3.5s ease-in-out infinite; }
        .shine-line { animation: shine 3s ease-in-out infinite; }
        .particle { animation: particleMove 7s linear infinite; }
      `}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => (
          <span
            key={particle}
            className="particle absolute w-1.5 h-1.5 rounded-full bg-yellow-300/40"
            style={{
              left: `${(particle * 37) % 100}%`,
              top: `${20 + ((particle * 19) % 80)}%`,
              animationDelay: `${(particle % 9) * 0.7}s`,
              animationDuration: `${5 + (particle % 6)}s`,
            }}
          />
        ))}
      </div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="flex items-center gap-4">
          <div className="vault-glow relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 via-white to-black border-4 border-black shadow-2xl" />
            <div className="relative text-2xl font-black tracking-tight">
              <span className="text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">P</span>
              <span className="text-blue-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">V</span>
            </div>
            <div className="absolute -top-2 left-1 w-5 h-8 bg-yellow-300 border-4 border-black rounded-t-full rotate-[-20deg]" />
            <div className="absolute -top-2 right-1 w-5 h-8 bg-yellow-300 border-4 border-black rounded-t-full rotate-[20deg]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-widest">POKÉVAULT</h1>
            <p className="text-xs text-zinc-400">Premium Pokémon Collection</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#collection" className="hover:text-yellow-400 transition">
            Collection
          </a>
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#member" className="hover:text-yellow-400 transition">
            Member Register
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-blue-500/20" />

        <div className="max-w-7xl mx-auto px-8 py-28 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm mb-6">
              Trusted Collector & Trading Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Collect.
              <br />
              Invest.
              <br />
              Trade.
            </h1>

            <p className="text-zinc-400 text-lg max-w-xl mb-8 leading-relaxed">
              Premium Pokémon card collection, PSA graded cards,
              sealed products, Japanese exclusives, and high-value
              collectibles for serious collectors.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                Explore Collection
              </button>

              <button className="border border-zinc-700 px-7 py-4 rounded-2xl hover:bg-zinc-900 transition">
                View PSA Cards
              </button>
            </div>
          </div>

          <div className="relative min-h-[520px] flex items-center justify-center">
            <div className="absolute inset-0 blur-3xl bg-yellow-400/20 rounded-full" />
            <div className="absolute inset-8 rounded-full border border-yellow-400/20" />
            <div className="absolute inset-16 rounded-full border border-yellow-400/10" />

            <div className="relative vault-glow w-full max-w-md rounded-[36px] bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-yellow-400/30 p-8 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.22),transparent_45%)]" />
              <div className="shine-line absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12" />

              <div className="relative z-10 text-center mb-6">
                <div className="mx-auto w-20 h-20 rounded-full bg-yellow-400 text-black flex items-center justify-center text-4xl font-black mb-4">
                  ⚡
                </div>
                <p className="text-yellow-300 uppercase tracking-[0.35em] text-xs mb-2">
                  Luxury Vault
                </p>
                <h3 className="text-3xl font-black">Sealed Product + PSA</h3>
              </div>

              <div className="relative h-72">
                <div className="floating-card absolute left-4 top-8 w-40 h-56 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-700 border-4 border-white/80 shadow-2xl p-3">
                  <div className="bg-white text-black text-xs font-black rounded-md px-2 py-1 mb-3">
                    PSA 10 GEM MINT
                  </div>
                  <div className="h-32 rounded-xl bg-black/30 flex items-center justify-center text-5xl">
                    🌙
                  </div>
                  <p className="mt-3 text-sm font-bold">Premium Showcase Card</p>
                </div>

                <div className="floating-card absolute right-4 top-14 w-40 h-52 rounded-2xl bg-gradient-to-br from-yellow-300 to-red-500 border border-yellow-100/60 shadow-2xl p-4" style={{ animationDelay: '1.2s' }}>
                  <div className="h-28 rounded-xl bg-black/20 flex items-center justify-center text-5xl">
                    📦
                  </div>
                  <p className="mt-4 text-black font-black text-sm">SEALED ETB</p>
                  <p className="text-black/70 text-xs">Collector Stock</p>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/70 border border-yellow-400/30 rounded-2xl px-5 py-3 backdrop-blur">
                  <p className="text-yellow-300 text-sm font-semibold">Authentic • Premium • Private Deal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">Sealed</h2>
            <p className="text-zinc-400 mt-2">Product</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">PSA 10</h2>
            <p className="text-zinc-400 mt-2">Premium Graded Cards</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">JP + ENG</h2>
            <p className="text-zinc-400 mt-2">Collections</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">Trusted</h2>
            <p className="text-zinc-400 mt-2">Collector Community</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-8 pt-24 relative z-10">
        <div className="bg-zinc-950 border border-yellow-400/20 rounded-[40px] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(250,204,21,0.16),transparent_35%)]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
                Animated PSA Showcase
              </p>
              <h2 className="text-4xl font-black mb-5">
                Premium Graded Card Display
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                A luxury PSA-style showcase to highlight your best cards, sealed products, and collector-grade items with a premium vault feeling.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="floating-card relative w-72 rounded-[32px] bg-white text-black p-4 shadow-2xl border-8 border-zinc-200">
                <div className="flex justify-between items-center border-b border-zinc-300 pb-3 mb-4">
                  <div>
                    <p className="text-xs font-black text-red-600">PSA</p>
                    <p className="text-[10px] text-zinc-500">CERTIFIED CARD</p>
                  </div>
                  <div className="bg-red-600 text-white text-2xl font-black px-4 py-2 rounded-xl">
                    10
                  </div>
                </div>
                <div className="h-80 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-700 to-black flex items-center justify-center text-8xl text-white">
                  🌙
                </div>
                <div className="mt-4">
                  <h3 className="font-black">Umbreon VMAX</h3>
                  <p className="text-xs text-zinc-600">Gem Mint • High Value Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="max-w-7xl mx-auto px-8 py-24 relative z-10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-yellow-400 mb-3 uppercase tracking-[0.3em] text-sm">
              Featured Collection
            </p>
            <h2 className="text-4xl font-bold">
              High Value Showcase
            </h2>
          </div>

          <button className="border border-zinc-700 px-5 py-3 rounded-xl hover:bg-zinc-900 transition">
            View All Cards
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCards.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-xl"
            >
              <img
                src={card.image}
                alt={card.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold">{card.name}</h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  Authentic collectible card with premium condition
                  and collector appeal.
                </p>

                <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-zinc-950 border-y border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
              Services
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Built for Collectors
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Helping collectors buy, sell, trade, and grow their
              collection with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'PSA Submission Help',
              'Collection Valuation',
              'Buy & Trade Cards',
              'Sealed Product Sourcing',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl mb-6">
                  ✦
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Professional collector-focused support for Pokémon
                  card enthusiasts.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1200&auto=format&fit=crop"
              alt="Collector"
              className="rounded-3xl border border-zinc-800 shadow-2xl"
            />
          </div>

          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
              About Us
            </p>

            <h2 className="text-4xl font-bold mb-6">
              More Than Just Cards
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              We are passionate Pokémon collectors focused on authentic,
              premium, and investment-worthy collectibles.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8">
              From PSA graded cards to rare Japanese releases and
              sealed products, our mission is to help collectors build
              collections they are proud of.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-zinc-950 border border-zinc-800 px-5 py-3 rounded-2xl">
                PSA Graded
              </div>
              <div className="bg-zinc-950 border border-zinc-800 px-5 py-3 rounded-2xl">
                Authentic Cards
              </div>
              <div className="bg-zinc-950 border border-zinc-800 px-5 py-3 rounded-2xl">
                Trusted Seller
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-xl">
              <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-4">
                Customer Feedback
              </p>

              <p className="text-zinc-300 leading-relaxed mb-6 italic">
                “Trusted seller, smooth dealing experience, and authentic cards. Thank you for helping collectors find valuable Pokémon collections.”
              </p>

              <a
                href="https://www.facebook.com/share/p/1aWBB9pvqq/?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                View Customer Feedback
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[40px] p-12 text-black text-center shadow-2xl">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Join The Collector Community
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Catch Rarity.
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-black/80 text-lg">
            Discover premium Pokémon cards, high-value collectibles,
            and exclusive collector opportunities.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://wa.me/60127787883"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition inline-block"
            >
              WhatsApp: 012-778 7883
            </a>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      {/* Member Register */}
      <section id="member" className="max-w-6xl mx-auto px-8 pb-24">
        <div className="bg-gradient-to-br from-zinc-950 via-black to-zinc-950 border border-yellow-400/20 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_35%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
                Member Register
              </p>

              <h2 className="text-4xl font-black mb-5">
                Join Our Collector Member List
              </h2>

              <p className="text-zinc-400 leading-relaxed mb-6">
                Register your interest to receive new arrivals, sealed product updates, PSA card availability, and private collector deals through WhatsApp.
              </p>

              <div className="space-y-4 text-sm text-zinc-300">
                <div className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <p>Early update for new Pokémon card arrivals</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <p>Private WhatsApp dealing for safer transactions</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <p>PSA graded, raw card, and sealed product updates</p>
                </div>
              </div>
            </div>

            <form className="bg-black/70 border border-zinc-800 rounded-3xl p-6 space-y-5">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="Example: 012-345 6789"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Collector Interest</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400">
                  <option>PSA Graded Cards</option>
                  <option>Raw Cards</option>
                  <option>Sealed Products</option>
                  <option>Buy / Sell / Trade</option>
                  <option>All Collections</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Message</label>
                <textarea
                  placeholder="Tell us what cards or products you are looking for"
                  rows="4"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
                />
              </div>

              <a
                href="https://wa.me/60127787883?text=Hi%20POK%C3%89VAULT%2C%20I%20would%20like%20to%20register%20as%20a%20member.%20My%20name%20is%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                Register Via WhatsApp
              </a>

              <p className="text-xs text-zinc-500 text-center leading-relaxed">
                For safety, we only confirm orders and payment details privately through WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="max-w-5xl mx-auto px-8 pb-24">
        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 shadow-2xl text-center">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Payment Method
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Safe & Secure Payment
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Due to increasing online scam cases nowadays, bank transfer details and DuitNow QR payment information will only be provided privately through WhatsApp after order confirmation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black border border-zinc-800 rounded-3xl p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3">
                WhatsApp Order
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Contact us directly to check card availability and confirm your order.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-6">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-3">
                Bank Transfer
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Payment details will be shared privately after successful order confirmation.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">
                DuitNow QR
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Secure DuitNow QR payment available via private WhatsApp inquiry.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/60127787883"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Contact For Payment Details
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-zinc-800 py-10 px-8 text-center text-zinc-500"
      >
        <h3 className="text-2xl font-bold text-white mb-3">
          POKÉVAULT
        </h3>

        <p className="mb-4">
          Premium Pokémon Card Collection & Trading
        </p>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <a href="#" className="hover:text-yellow-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            WhatsApp
          </a>
        </div>

        <p className="text-sm">
          © 2026 POKÉVAULT. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
