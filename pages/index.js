import { useRef, useMemo } from 'react'
import Ball from 'components/Ball'

export default function Home() {

  return <>
    <Ball />
    <main>
      <h1 className="logo">
        juji&nbsp;};
      </h1>

      <p><big>Hello, this site is under construction</big></p>
      <p>and i'm feeling lazy..</p>
      <p>Contact me anytime: <a rel="noreferrer noopener"
        target="_blank" href="mailto:dia@jujiyangasli.com">dia@jujiyangasli.com</a></p>

      <br />
      <br />
      <p className="checkout">
        <span className="wez">Checkout <a rel="noreferrer noopener" target="_blank"
          href="http://wheeleasy.org">WheelEasy</a>,</span> or my&nbsp;
          <a rel="noreferrer noopener" target="_blank" href="https://jujiplay.com">play</a> site.
      </p>
    </main>
  </>
}
