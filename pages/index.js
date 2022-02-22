
import Ball from 'components/Ball'

export default function Home() {

  return <>
    <Ball />
    <main>
      <h1 className="logo">
        juji&nbsp;};
      </h1>

      <h3>Hello, this site is under construction</h3>
      <p className="lazy">and i'm feeling lazy..</p>
      { Math.random()<0.5?<p>Contact me anytime: <a rel="noreferrer noopener"
        target="_blank" href="mailto:dia@jujiyangasli.com">dia@jujiyangasli.com</a></p>:
        <p>Contact me anytime: <a rel="noreferrer noopener"
          target="_blank" href="mailto:him@jujiyangasli.com">him@jujiyangasli.com</a></p>}


      <br />
      <br />
      <p className="checkout">
        <span className="wez">Meanwhile, checkout <a rel="noreferrer noopener" target="_blank"
          href="https://wheeleasy.org">WheelEasy</a>, because they're awesome!!</span>

        <br /><br />Or, my&nbsp;
          <a rel="noreferrer noopener" target="_blank" href="https://jujiplay.com">play</a> site.
      </p>
    </main>
  </>
}
