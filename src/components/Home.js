import React from 'react';
import '../styles/Home.scss';

const Home = () => {
    return (
        <>
            <div><h1 className='has-text-centered has-text-black has-text-weight-bold is-size-1'>JORDAN SMYTH - SOFTWARE DEVELOPER</h1></div>
            <div className="columns is-mobile">
                <div className='column is-2' id='sidebar'>
                    <div>
                        <h1 className='has-text-white has-text-centered is-size-1 has-text-weight-bold'>SKILLS</h1>
                        <ul className='ml-2 has-text-white skills-list'>
                            <li>HTML
                                <i class="devicon-html5-plain"></i>
                            </li>
                            <li>CSS
                                <i class="devicon-css3-plain"></i>
                            </li>
                            <li>JavaScript
                                <i class="devicon-javascript-plain"></i>
                            </li>
                            <li>SASS
                                <i class="devicon-sass-original"></i>
                            </li>
                            <li>React
                                <i class="devicon-react-original"></i>
                            </li>
                            <li>Bulma
                                <i class="devicon-bulma-plain"></i>
                            </li>
                            <li>MongoDB
                                <i class="devicon-mongodb-plain"></i>
                            </li>
                            <li>Express
                                <i class="devicon-express-original"></i>
                            </li>
                            <li>Python
                                <i class="devicon-python-plain"></i>
                            </li>
                            <li>Django
                                <i class="devicon-django-plain"></i>
                            </li>
                            <li>PostgreSQL
                                <i class="devicon-postgresql-plain"></i>
                            </li>
                            <li>npm
                                <i class="devicon-npm-original-wordmark"></i>
                            </li>
                            <li>git
                                <i class="devicon-git-plain"></i>
                            </li>
                            <li>GitHub
                                <i class="devicon-github-original"></i>
                            </li>
                            <li>Trello
                                <i class="devicon-trello-plain"></i>
                            </li>
                            <li>Heroku
                                <i class="devicon-heroku-original"></i>
                            </li>
                            <li>TablePlus</li>
                            <li>pip(env)</li>
                            <li>Postman</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                </div>
                <div className="column is-3 has-text-white" id='projects-bar'>
                    <div>
                        <h1 className='has-text-centered has-text-weight-bold is-size-1'>PROJECTS</h1>
                        <div className='has-text-centered is-size-4'>
                            <a href="https://www.linkedin.com/in/jordan-a-smyth/" target='_blank' rel='noreferrer noopener'>LinkedIn | </a>
                            <a href="https://github.com/jsmyth1423" target='_blank' rel='noreferrer noopener'> GitHub</a>
                        </div>
                        <ul>
                            <hr />
                            <li className='is-size-5 has-text-weight-bold'>JavaScript Grid Based Game</li>
                            <p className='ml-2 is-size-6'>Space Invaders</p>
                            <p className='ml-2'>Tools:
                                <i class="devicon-html5-plain"></i>
                                <i class="devicon-css3-plain"></i>
                                <i class="devicon-javascript-plain"></i>
                            </p>
                            <p className='ml-2'>
                                <a href="https://jsmyth1423.github.io/ga-project-1/" target='_blank' rel='noreferrer noopener'>Live</a> |
                                <a href="https://github.com/jsmyth1423/ga-project-1" target='_blank' rel='noreferrer noopener'> GitHub</a></p>
                            <hr />
                            <li className='is-size-5 has-text-weight-bold' >Consuming a RESTful API with a React frontend</li>
                            <p className='ml-2 is-size-6'>Guessing Game</p>
                            <p className='ml-2'>Tools:
                                <i class="devicon-html5-plain"></i>
                                <i class="devicon-css3-plain"></i>
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-react-original"></i>
                                <i class="devicon-bulma-plain"></i>
                                <i class="devicon-git-plain"></i>
                                <i class="devicon-github-original"></i>

                            </p>

                            <p className='ml-2'>
                                <a href="https://bit.ly/3vjAqvG" target='_blank' rel='noreferrer noopener'>Live</a> |
                                <a href="https://github.com/jsmyth1423/project-2" target='_blank' rel='noreferrer noopener'> GitHub</a></p>
                            <hr />
                            <li className='is-size-5 has-text-weight-bold' >React frontend with MongoDB backend</li>
                            <p className='ml-2 is-size-6'>Podcast Discovery App</p>
                            <p className='ml-2'>Tools:
                                <i class="devicon-html5-plain"></i>
                                <i class="devicon-css3-plain"></i>
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-react-original"></i>
                                <i class="devicon-bulma-plain"></i>
                                <i class="devicon-git-plain"></i>
                                <i class="devicon-github-original"></i>
                                <i class="devicon-mongodb-plain"></i>
                                <i class="devicon-trello-plain"></i>
                            </p>

                            <p className='ml-2'>
                                <a href="https://bit.ly/37S7lyu" target='_blank' rel='noreferrer noopener'>Live</a> |
                                <a href="https://github.com/jsmyth1423/GA-Client-Project-03/blob/main/README.md" target='_blank' rel='noreferrer noopener'> GitHub</a></p>
                            <hr />
                            <li className='is-size-5 has-text-weight-bold' >React frontend with Django PostgreSQL backend</li>
                            <p className='ml-2 is-size-6'>Tinder for Games</p>
                            <p className='ml-2'>Tools:
                                <i class="devicon-html5-plain"></i>
                                <i class="devicon-css3-plain"></i>
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-react-original"></i>
                                <i class="devicon-bulma-plain"></i>
                                <i class="devicon-git-plain"></i>
                                <i class="devicon-github-original"></i>
                                <i class="devicon-python-plain"></i>
                                <i class="devicon-django-plain"></i>
                                <i class="devicon-postgresql-plain"></i>
                                <i class="devicon-trello-plain"></i>
                            </p>

                            <p className='ml-2'>
                                <a href="https://tindergames.netlify.app/games" target='_blank' rel='noreferrer noopener'>Live</a> |
                                <a href="https://github.com/jsmyth1423/tinderbooks-project4-client/blob/main/readme.md" target='_blank' rel='noreferrer noopener'> GitHub</a></p>
                            <hr />
                        </ul>
                    </div>
                </div>
                <div className="column is-6 has-text-black" id='projects-preview'>
                    <div class="tile is-ancestor is-11">
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-warning">
                                <p class="title">Space Invaders</p>
                                {/*! add links to projects below when clicking */}
                                <a href="https://jsmyth1423.github.io/ga-project-1/"><img className='project-images' src="https://media.discordapp.net/attachments/490194540129681408/974286189165174834/unknown.png?width=1330&height=701" alt="" /></a>
                                <p class="subtitle">Grid Based JavaScript</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-warning">
                                <p class="title">Guessing Game</p>
                                <a href="https://bit.ly/3vjAqvG"><img className='project-images' src="https://media.discordapp.net/attachments/490194540129681408/974285901326868510/unknown.png?width=1337&height=701" alt="" /></a>
                                <p class="subtitle">Consuming a RESTful API with a React frontend</p>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-ancestor is-11">
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-warning">
                                <p class="title">Podcast Discovery App</p>
                                <a href="https://bit.ly/37S7lyu"><img className='project-images' src="https://media.discordapp.net/attachments/490194540129681408/974286047448014878/unknown.png?width=1368&height=701" alt="" /></a>
                                <p class="subtitle">React frontend with MongoDB backend</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-warning">
                                <p class="title">Tinder for Games</p>
                                <a href="https://tindergames.netlify.app/games"><img className='project-images' src="https://media.discordapp.net/attachments/490194540129681408/974283551300268062/Screenshot_2022-05-12_at_13.14.38.png?width=1288&height=701" alt="" /></a>
                                <p class="subtitle">React frontend with Django PostgreSQL backend</p>
                            </article>

                        </div>
                    </div>
                    <p className='has-text-white'>The above projects gave me a wide overview on many different technologies and a lot of insight into how products I use every day work. It also gave me a chance to work on things I cared about and may even use myself. Next on the list is a tool to help me keep track of my characters in a new game I've started. </p>
                </div>
            </div>
            <div className='has-text-white columns is-mobile' id='personals'>
                <div className='ml-4 column is-5 bottom-columns'>
                    <h1 className='is-size-1 has-text-weight-bold'>ABOUT ME</h1>
                    <p>I took a course in software development to kickstart my learning and now I feel I'm ready for the next step, entering the working world! I'm proficient in both front and back-end development and looking for a role in which I can continue to learn and work with a great team in order to solve interesting problems. If you're interested, contact me!</p>
                    <p className='mt-4'><a href='mailto:jsmyth1423@gmail.com'>jsmyth1423@gmail.com</a>
                        <br />
                        <a href="https://www.linkedin.com/in/jordan-a-smyth/" target='_blank' rel='noreferrer noopener'>LinkedIn</a> </p>
                </div>
                <div className='column is-1' id='gap'></div>
                <div className='column is-5 bottom-columns'>
                    <h1 className='is-size-1 has-text-weight-bold'>INTERESTS</h1>
                    <p><ul className='real-list'>
                        <li>Min-maxing video games, trying to get the most possible out of my time spent, especially in competitive formats to climb the ranks.</li>
                        <li>Reading, especially fantasy and science-fiction but also some occasional reminisce of my university days through revisiting the literary canon.</li>
                        <li>Travelling, my next stop is South Korea. I love to visit other cultures and experience everything they have to offer.</li>
                    </ul></p>
                </div>
            </div>
        </>
    );
};


export default Home;
