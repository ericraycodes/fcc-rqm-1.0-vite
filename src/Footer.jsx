function Footer() {
  window.console.log('<Footer /> RENDER')
  return (
    <footer tabIndex='1'>
      <p>This app is for <a
          id='freeCodeCamp'
          rel='noreferrer'
          href='https://www.freecodecamp.org/learn/'
          target='_blank'
        ><u>freeCodeCamp</u></a> certification purposes only. By <a
          id='developer'
          rel='noreferrer'
          href='https://github.com/ericraycodes/fcc-rqm-1.0-vite'
          target='_blank'
        ><u>Eric Ray Saladar</u></a>. 2024.</p>
    </footer>
  );
}

export default Footer;