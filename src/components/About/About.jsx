import React from 'react'
import Header from '../Header/Header'
import s from './About.module.scss'

const About = () => {
  return (
    <>
      <Header />
      <main className={s.about}>
          <div className={s.container}>
              <div className={s.text}>
                  <h1 className={s.title}>О компании</h1>
                  <div className={s.subtitles}>
                      <p className={s.subtitle}>Компания "Первый бетонный" - один из лидирующих девелоперов, специализирующийся на строительстве надежного и доступного жилья в Ярославской области.</p>
                      <p className={s.subtitle}>Многолетний опыт, инновационные технологии, внимательность к трендам и забота о своих клиентах — слагаемые успеха, компании, который можно измерить в цифрах.</p>
                      <p className={s.subtitle}>В настоящее время компания развивает 5 проектов на территории Ярославской области. 4 из которых находятся в Ярославле, а 1 в Рыбинске. На текущий момент момент строящийся дом в г. Рыбинск уже готов принять своих жителей, строительство завершено на 98%. Остальные же проекты будут готовы распахнуть свои двери перед жителями уже в первой декаде 2022 года.</p>
                  </div>
              </div>
          </div>
      </main>
    </>
  )
}

export default About