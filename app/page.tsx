import Logo from "./components/Logo";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <span className="badge">ARAN Trading Collective</span>
        <h1>Elevating Business Exchange</h1>
        <p>
          The ARAN emblem blends precise geometry, upward momentum, and modern
          gradients to signal confidence in global trade, brokerage, and
          partnership.
        </p>
        <div className="logo-panel">
          <Logo />
          <div className="logo-footer">
            <span>Market Resilience</span>
            <span>Trade Velocity</span>
          </div>
        </div>
      </section>
    </main>
  );
}
