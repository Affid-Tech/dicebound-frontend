import './LandingPage.css';
import {useEffect} from 'react';

import {registerIconLibrary} from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import {SlButton, SlCard, SlDetails, SlIcon} from "@shoelace-style/shoelace/dist/react";

const reviews = [
    {
        "name": "Иван",
        "dm": true,
        "content": (<>
            <p>Digital Dicebound — ламповое коммьюнити, где приятно играть и мастерить. Получаю большое удовольствие от участия в его развитии!</p>
            <div className="spacer"></div>
            <p>FoundryVTT — пожалуй, лучшая платформа для D&D в онлайне, которую я видел. Во многом лучше популярного Roll20.</p>
            <p>Приятный дизайн, много возможностей, стабильная работа, видеочат. Рад, что на Digital Dicebound можно играть именно в ней.</p>
            <div className="spacer"></div>
            <p>Призываю всех начинающих и уже опытных приключенцев присоединяться к нам! Здесь весело :)</p>
        </>),

        "picture": "/assets/profiles/pic_1.png"
    },
    {
        "name": "Андрей",
        "dm": true,
        "content": (<>
            <p>Мне очень нравятся люди в нашем сообществе - позитивные, открытые и добрые. Игроки инициативные, мастера харизматичные.</p>
            <p>Приятно быть частью этого коммьюнити!</p>
            <div className="spacer"></div>
            <p>Водить на Foundry - это что-то...</p>
            <p>Столько фич, и кастомизации на любой вкус. А главное - без подписок. Круто!</p>
        </>),
        "picture": "/assets/profiles/pic_2.png"
    },
    {
        "name": "Георгий",
        "dm": false,
        "content": (<>
            <p>Впервые попробовал поиграть онлайн — сначала было непонятно, но в целом разобраться можно, плюс админы помогли и отвечали на вопросы.</p>
            <div className="spacer"></div>
            <p>Взаимодействие с мастером было на высоте, ну сам Саня в лице мастера!</p>
            <div className="spacer"></div>
            <p>Вообще было все круто мне понравилось, по возможности будем еще играть</p>
        </>),
        "picture": "/assets/profiles/pic_3.png"
    }
]

const LandingPage = () => {
    useEffect(() => {
        registerIconLibrary('dnd-icons', {
            resolver: name => `/assets/icons/${name}.svg`,
            mutator: svg => svg.setAttribute('fill', 'currentColor')
        });
    }, []);


    return (
        <div className="landing-page">
            <div className="gradient-background"></div>
            <div className="paper-overlay"></div>

            <div className="main-container">
                {/* HERO SECTION */}
                <header id="hero">
                    <div className="hero-section">
                        <div className="container">
                            <h1>Онлайн-приключения в D&D на русском языке</h1>
                            <p className="subtitle">
                                Комьюнити игроков и мастеров с собственным сервером Foundry.<br/>
                                Новичкам рады. Мастерам поможем.
                            </p>
                            <div className="hero-buttons">
                                <SlButton variant="primary" className="tg-button" size="large" href="https://t.me/games_dnd" target="_blank">
                                    <SlIcon src="https://telegram.org/img/t_logo.svg" aria-hidden="true" slot="prefix" style={{fontSize: "1.2rem"}}></SlIcon>
                                    Присоединиться в Telegram
                                </SlButton>
                                <SlButton variant="default" size="large" href="#for-dms">
                                    🎲 Хочу провести игру
                                </SlButton>
                                <SlButton variant="default" size="large" href="#schedule">
                                    📅 Смотреть расписание
                                </SlButton>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ABOUT SECTION */}
                <section id="about">
                    <section className="about-section">
                        <div className="container glass-section">
                            <h2>О нашем сообществе</h2>
                            <p>Камерное русскоязычное комьюнити, созданное с душой и вниманием к деталям.</p>
                            <p>Играем онлайн со всего мира, собираемся у виртуального стола, общаемся и растём вместе.</p>
                            <p>Уют, поддержка и дружелюбие — вот что мы ценим. Сейчас нас уже 5 мастеров и 60+ участников, и это только начало!</p>
                        </div>
                    </section>
                </section>


                <section id="features">

                    <section className="features-section">
                        <div className="container">
                            <h2>Что делает нас особенными</h2>
                            <div className="cards-grid col-md-4 col-sm-1">
                                <SlCard className="card">
                                    <strong>✅ Свой сервер FoundryVTT</strong><br/>
                                    Мастера получают доступ без оплаты
                                </SlCard>
                                <SlCard className="card">
                                    <strong>🧩 Помощь и шаблоны</strong><br/>
                                    Помогаем с подготовкой, делимся ассетами
                                </SlCard>
                                <SlCard className="card">
                                    <strong>👶 Поддержка новичков</strong><br/>
                                    Всё объясним и поможем начать
                                </SlCard>
                                <SlCard className="card">
                                    <strong>💬 Живое сообщество</strong><br/>
                                    Активное, дружелюбное и без токсичности
                                </SlCard>
                                <SlCard className="card">
                                    <strong>🎭 Гибкие форматы</strong><br/>
                                    Ваншоты, кампании, бесплатные и платные игры
                                </SlCard>
                                <SlCard className="card">
                                    <strong>⚙️ Цифровая поддержка</strong><br/>
                                    В будущем — ещё больше автоматизации
                                </SlCard>
                            </div>
                        </div>
                    </section>

                </section>

                <section id="how-it-works">
                    <section className="how-it-works-section">
                        <div className="container glass-section">
                            <h2>Как это работает</h2>
                            <div className="roles-grid">
                                <SlDetails className="role-card chest-icons" summary="🎮 Я — игрок">
                                    <SlIcon className="big" name="chest" slot="expand-icon" library="dnd-icons"></SlIcon>
                                    <SlIcon className="big" name="mimic-chest" slot="collapse-icon" library="dnd-icons"></SlIcon>
                                    <ol>
                                        <li>Входишь в Telegram</li>
                                        <li>Читаешь анонсы игр</li>
                                        <li>Пишешь мастеру</li>
                                        <li>Играешь!</li>
                                    </ol>
                                </SlDetails>
                                <SlDetails className="role-card chest-icons" summary="🧙 Я — мастер">
                                    <SlIcon className="big" name="chest" slot="expand-icon" library="dnd-icons"></SlIcon>
                                    <SlIcon className="big" name="mimic-chest" slot="collapse-icon" library="dnd-icons"></SlIcon>
                                    <ol>
                                        <li>Пишешь админу идею</li>
                                        <li>Получаешь поддержку, Foundry-доступ</li>
                                        <li>Ведёшь игру — в удовольствие (и, возможно, за оплату)</li>
                                    </ol>
                                </SlDetails>
                            </div>
                        </div>
                    </section>
                </section>

                <section id="for-dms">

                    <section className="for-dms-section">
                        <div className="container">
                            <h2>Для мастеров</h2>
                            <p className="lead">Мы поддержим тебя на каждом шагу — от идеи до полноценной игры</p>
                            <div className="cards-grid col-md-3 col-sm-1">
                                <SlCard className="card">🧠 Обратная связь по идеям</SlCard>
                                <SlCard className="card">🎲 Доступ к Foundry без оплаты</SlCard>
                                <SlCard className="card">🛠️ Техподдержка от админов</SlCard>
                                <SlCard className="card">📦 Готовые шаблоны и ассеты</SlCard>
                                <SlCard className="card">💸 Возможность вести платные игры</SlCard>
                            </div>
                            <div className="cta">
                                <SlButton variant="default" size="large"
                                          href="https://t.me/Affid_fedorov?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B8%20%D0%B8%D0%B3%D1%80%D1%83%20%3A%29">🎲
                                    Стать мастером
                                </SlButton>
                            </div>
                        </div>
                    </section>

                </section>

                <section id="why-paid">

                    <section className="why-paid-section">
                        <div className="container glass-section">
                            <h2>Почему платно?</h2>
                            <p className="intro">
                                Мы покрываем расходы на инфраструктуру и развиваем платформу. Оплата:
                            </p>
                            <ul className="reasons">
                                <li>💡 Помогает мастерам делать больше интересных игр</li>
                                <li>🛠️ Поддерживает сервер Foundry</li>
                                <li>🚀 Идёт на развитие новых инструментов</li>
                            </ul>
                            <p className="note">💬 Часть игр остаётся бесплатной — чтобы каждый мог попробовать.</p>
                        </div>
                    </section>

                </section>

                <section id="schedule">

                    <section className="schedule-section">
                        <div className="container glass-section">
                            <h2>Расписание игр</h2>
                            <p className="lead">
                                Мы играем почти каждую неделю — ваншоты и кампании от наших мастеров.
                            </p>
                            <SlButton variant="default" size="large" href="/schedule">
                                📅 Смотреть расписание
                            </SlButton>
                        </div>
                    </section>

                </section>

                <section id="testimonials">
                    <section className="testimonials-section">
                        <div className="container">
                            <h2>Отзывы</h2>
                            <div className="testimonials-grid">
                                {reviews.map((review) => (
                                    <div key={review.name}>
                                        <SlCard className="testimonial-card">
                                            <img
                                                src={review.picture}
                                                alt={review.name}
                                                className="testimonial-avatar"
                                            />
                                            <div className="author">— {review.name}, {review.dm ? "мастер" : "игрок"}</div>
                                            <div className="testimonial-text">
                                                {review.content}
                                            </div>
                                        </SlCard>
                                    </div>
                                ))}
                            </div>

                            <div className="cta">
                                <SlButton variant="default" size="large" href="https://t.me/Affid_fedorov">Оставить отзыв</SlButton>
                            </div>
                        </div>
                    </section>
                </section>

                <section id="faq">

                    <section className="faq-section">
                        <div className="container">
                            <h2>Частые вопросы</h2>
                            <div className="faq-list">
                                <SlDetails summary="Я новичок — меня возьмут?" className="chest-icons">
                                    <SlIcon className="big" name="chest" slot="expand-icon" library="dnd-icons"></SlIcon>
                                    <SlIcon className="big" name="mimic-chest" slot="collapse-icon" library="dnd-icons"></SlIcon>
                                    Конечно! Мы с радостью принимаем новичков и всё объясняем.
                                </SlDetails>
                                <SlDetails summary="Что нужно для участия?" className="chest-icons">
                                    <SlIcon className="big" name="chest" slot="expand-icon" library="dnd-icons"></SlIcon>
                                    <SlIcon className="big" name="mimic-chest" slot="collapse-icon" library="dnd-icons"></SlIcon>
                                    Компьютер, микрофон, интернет и Telegram. Всё остальное — покажем!
                                </SlDetails>
                                <SlDetails summary="Это платно?" className="chest-icons">
                                    <SlIcon className="big" name="chest" slot="expand-icon" library="dnd-icons"></SlIcon>
                                    <SlIcon className="big" name="mimic-chest" slot="collapse-icon" library="dnd-icons"></SlIcon>
                                    Часть игр бесплатная, часть — платная (например, кампании). Это поддерживает сервер и мастеров.
                                </SlDetails>
                                <SlDetails summary="Как стать мастером?" className="chest-icons">
                                    <SlIcon className="big" name="chest" slot="expand-icon" library="dnd-icons"></SlIcon>
                                    <SlIcon className="big" name="mimic-chest" slot="collapse-icon" library="dnd-icons"></SlIcon>
                                    Просто напиши админу — поможем с подготовкой, оформлением и доступом к Foundry.
                                </SlDetails>
                                <SlDetails summary="На чём вы играете?" className="chest-icons">
                                    <SlIcon className="big" name="chest" slot="expand-icon" library="dnd-icons"></SlIcon>
                                    <SlIcon className="big" name="mimic-chest" slot="collapse-icon" library="dnd-icons"></SlIcon>
                                    Мы используем Foundry VTT — современную и мощную платформу для онлайн-игр.
                                </SlDetails>
                            </div>
                        </div>
                    </section>

                </section>

                <section id="final-cta">

                    <section className="final-cta-section">
                        <div className="container glass-section">
                            <h2>Присоединяйся к нам и начинай приключение уже сегодня!</h2>
                            <div className="final-buttons">
                                <SlButton variant="primary" className="tg-button" size="large" href="https://t.me/games_dnd" target="_blank">
                                    <SlIcon src="https://telegram.org/img/t_logo.svg" aria-hidden="true" slot="prefix" style={{fontSize: "1.2rem"}}></SlIcon>
                                    Присоединиться в Telegram
                                </SlButton>
                                <SlButton variant="default" size="large" href="#for-dms">
                                    🎲 Хочу провести игру
                                </SlButton>
                                <SlButton variant="default" size="large" href="/schedule">
                                    📅 Смотреть расписание
                                </SlButton>
                            </div>
                        </div>
                    </section>

                </section>

                <footer id="footer">

                    <footer className="footer">
                        <div className="container">
                            <p className="footer-links">
                                <a href="https://t.me/games_dnd" target="_blank">Telegram</a> | <a href="/schedule">Расписание</a>
                            </p>
                            <p className="footer-tagline">© Digital Dicebound — 2025</p>
                        </div>
                    </footer>

                </footer>
            </div>
        </div>
    );
}

export default LandingPage;