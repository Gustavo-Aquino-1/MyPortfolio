import React, { useContext, useRef, useState } from 'react'
import { Context } from '../context/Context'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

function Contact() {
  const { isLight } = useContext(Context)
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
    <div id='contact' className='contact__area'>
      <div className='flex items-end gap-10 title__and__links__contact'>
        <h2 style={{ color: !isLight && 'white' }} className='section__title'>
          Contact
        </h2>
        <div className='flex gap-10'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/gustavo--aquino/'
            rel='noreferrer'
          >
            <FaLinkedin
              className='link__icon__contact'
              color={isLight ? 'blue' : 'lightblue'}
            />
          </a>

          <a
            target='_blank'
            href='https://www.youtube.com/channel/UCruhXYRSa7uuFe303GWOqIA'
            rel='noreferrer'
          >
            <FaYoutube className='link__icon__contact' color='red' />
          </a>

          <a
            href='https://github.com/Gustavo-Aquino-1'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub
              className='link__icon__contact'
              color={isLight ? 'black' : 'white'}
            />
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
          style={{ color: !isLight && 'black' }}
          required
        />
        <input
          type='text'
          value={context}
          onChange={(e) => setContext(e.target.value)}
          name='subject'
          placeholder='Assunto'
          minLength={1}
          style={{ color: !isLight && 'black' }}
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name='message'
          placeholder='Conteúdo'
          rows='5'
          minLength={1}
          style={{ color: !isLight && 'black' }}
          required
        />
        <div className='flex gap-5'>
          <button
            style={{
              background: !isLight && '#10283f',
              border: !isLight && '1px solid #244a6d',
            }}
            className='submit__button'
            type='submit'
          >
            Enviar
          </button>
          <button
            style={{
              background: !isLight && '#10283f',
              border: !isLight && '1px solid #244a6d',
              color: !isLight && 'white',
            }}
            className='clean__button'
            type='reset'
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
