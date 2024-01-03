import './styleHome.css';


export function Home() {
    return (
        <section class = "home">
            <div class="home-content">
                    <div class="left-box">
                        <h1>Hi, I'm Maxence Habar</h1>
                        <h3>Developer for 6+ years</h3>
                        <p>I discovered Python when I was 14. Since then, It's been a long but awesome journey.
                        </p>
                        <p>I started with Python, with simple programs and automations. Since then, I've been exploring from server development,
                            to app development, but with still a lot of automations.
                        </p>
                        <div class="btn-box">
                            <a href="/">Contact me</a>
                            <a href="/">My projects</a>
                            </div>
                        
                        <div class="logos">
                            <a href='/'><i class='bx bxl-github' ></i></a>
                            <a href='https://www.linkedin.com/in/maxence-habar-259542231/'><i class='bx bxl-linkedin'></i></a>
                        </div>
                    </div>
                    <div class="photo">
                        
                    </div>
            </div>
        </section>
    )
}