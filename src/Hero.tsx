import './Hero.css'

function Hero(){
    return(
        <body>
        <div className="hero" id='hero'>
            <p className="intro">Hi, my name is</p>
            <h1 className='name'>Ethan Trinh.</h1>
            <h2 className='tagline'>I build things.</h2>
            <p className='description'>
              I'm a software developer, computer science student, and innovator. I also have a love for cats!
            </p>

            <a href="files/Ethan and Kawi.pdf" id="kawi" target='_blank'>Meet my pal Kawi !</a>
        </div>
    </body>
    );
}
export default Hero;
