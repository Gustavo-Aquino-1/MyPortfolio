import React, { useState, useRef } from 'react'
import '../css/home.css'
import gstmd2 from '../img/picme_circle.png'
import SideMenu from '../components/SideMenu'
import Project from '../components/Project'
import Skills from '../components/Skills'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import emailjs from '@emailjs/browser'
// import nodemailer from 'nodemailer'

function Home() {
  const form = useRef()
  const [email, setEmail] = useState('')
  const [context, setContext] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await emailjs.sendForm(
      'service_g3kourn',
      'template_z1xp6z6',
      form.current,
      'XpxSptLTBEt72jWil',
    )
    setEmail('')
    setContext('')
    setContent('')
  }

  return (
    <>
      <SideMenu />
      <div id='home' className='home__container'>
        <div className='aboutme__icon__container'>
          <h2 className='section__title'>Sobre mim</h2>
          <img
            src={gstmd2}
            alt='Gustavo Aquino'
            width={150}
            height={100}
            className='rounded-[50%] aboutme__img'
          />
        </div>
        <div className='info__container'>
          <p className='me__description first-letter:text-3xl'>
            Prazer meu nome é Gustavo Aquino e sou Desenvolvedor Fullstack Jr.
            Essa é uma frase clássica, porém não diz nada sobre mim, por isso
            vou te explicar como eu cheguei até aqui! Meu primeiro contato com a
            programação foi quando estava pesquisando e decidindo qual seria a
            melhor profissão para mim, vi sobre muitas delas, mas nenhuma
            realmente me interessava, quando vi a programação me despertou uma
            curiosidade, então comecei a fazer alguns cursos introdutórios para
            decidir se era aquilo que eu queria, até que eu fui fazendo, 1, 2, 3
            e quando percebi já havia decidido que eu seria um programador,
            cheguei a fazer o primeiro de semestre da faculdade ADS (Análise e
            Desenvolvimento de Sistemas) porém não gostei do ensino, sempre
            achei algo bastante superficial, não se aprofundava, logo eu acabei
            saindo da minha faculdade e entrei na Trybe, lá eu consegui
            aprofundar muito bem meus conhecimentos na programação, hoje com o
            curso de Desenvolvimento Web Fullstack da Trybe já completo,
            continuo buscando mais conhecimento, inclusive estou fazendo um
            curso de Desenvolvedor Fullstack Java! Também estou a procura de um
            emprego para exercer tudo que aprendi!
          </p>
        </div>
        <div id='projects' className='projects__area mt-[100px]'>
          <h2 className='section__title'>Projects</h2>
          <Project />
        </div>
        <Skills />

        <div id='contact' className='contact__area'>
          <div className='flex items-end gap-10 title__and__links__contact'>
            <h1 className='section__title'>Contact</h1>
            <div className='flex gap-10'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/gustavo--aquino/'
                rel='noreferrer'
              >
                <FaLinkedin size={40} color='blue' />
              </a>

              <a
                target='_blank'
                href='https://www.youtube.com/channel/UCruhXYRSa7uuFe303GWOqIA'
                rel='noreferrer'
              >
                <FaYoutube size={40} color='red' />
              </a>

              <a
                href='https://w.app/GustavoAquino'
                target='_blank'
                rel='noreferrer'
              >
                <IoLogoWhatsapp size={40} color='green' />
              </a>
            </div>
          </div>

          <form
            ref={form}
            className='contact__form'
            onSubmit={handleSubmit}
            action='get'
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='from_name'
              placeholder='Seu email'
              required
            />
            <input
              type='text'
              value={context}
              onChange={(e) => setContext(e.target.value)}
              name='subject'
              placeholder='Assunto'
              minLength={1}
              required
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name='message'
              placeholder='Conteúdo'
              rows='5'
              minLength={1}
              required
            />
            <div className='flex gap-5'>
              <button className='submit__button' type='submit'>
                Enviar
              </button>
              <button className='clean__button' type='reset'>
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
