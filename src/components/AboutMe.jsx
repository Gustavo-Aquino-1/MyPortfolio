import React, { useContext } from 'react'
import gstmd2 from '../img/picme_circle.png'
import { Context } from '../context/Context'

function AboutMe() {
  const { isLight } = useContext(Context)
  return (
    <>
      <div className='aboutme__icon__container'>
        <h2 style={{ color: !isLight && 'white' }} className='section__title'>
          About me
        </h2>
        <img
          src={gstmd2}
          alt='Gustavo Aquino'
          width={150}
          height={100}
          className='rounded-[50%] aboutme__img'
          style={{ background: !isLight && 'lightblue' }}
        />
      </div>
      <div className='info__container'>
        <p className='me__description'>
          Prazer meu nome é Gustavo Aquino e sou Desenvolvedor Fullstack Jr.
          Essa é uma frase clássica, porém não diz nada sobre mim, por isso vou
          te explicar como eu cheguei até aqui! Meu primeiro contato com a
          programação foi quando estava pesquisando e decidindo qual seria a
          melhor profissão para mim, vi sobre muitas delas, mas nenhuma
          realmente me interessava, quando vi a programação me despertou uma
          curiosidade, então comecei a fazer alguns cursos introdutórios para
          decidir se era aquilo que eu queria, até que eu fui fazendo, 1, 2, 3 e
          quando percebi já havia decidido que eu seria um programador, cheguei
          a fazer o primeiro de semestre da faculdade ADS (Análise e
          Desenvolvimento de Sistemas) porém não gostei do ensino, sempre achei
          algo bastante superficial, não se aprofundava, logo eu acabei saindo
          da minha faculdade e entrei na Trybe, lá eu consegui aprofundar muito
          bem meus conhecimentos na programação, hoje com o curso de
          Desenvolvimento Web Fullstack da Trybe já completo, continuo buscando
          mais conhecimento, inclusive estou fazendo um curso de Desenvolvedor
          Fullstack Java! Também estou a procura de um emprego para exercer tudo
          que aprendi!
        </p>
      </div>
    </>
  )
}

export default AboutMe
