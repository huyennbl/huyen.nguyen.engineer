const React = window.React
import Quotes from '../../components/intro/Quotes'
import HistoryLogos from '../../components/intro/HistoryLogos'
import avatar from './avatar.jpg'
import cloudfx from './cloudfx.png'
import elsevier from './elsevier.png'
import element from './element.png'
import flood from './flood.svg'
import HostYourPage from '../HostYourPage'
const quotes = [
  {
    content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler'
  }, {
    content: 'It\'s not a bug. It\'s a feature.',
    author: 'Developers'
  }, {
    content: 'I don\'t like pink.',
    author: 'huyennbl'
  }
]

const logos = [
  {
    logo: elsevier,
    url: 'https://www.elsevier.com'
  },
  {
    logo: cloudfx,
    url: 'https://www.cloudfx.com'
  },
  {
    logo: flood,
    url: 'https://www.flood.io'
  },
  {
    logo: element,
    url: 'https://element.flood.io'
  }
]

const Intro = () => {
  return (
    <>
      <div className='description'>
        <div className='paragraph intro'>
          <div className='intro__text'>
            ✌️ It’s me, Huyên
          </div>
          <div className='intro__avatar'>
            <img src={avatar} />
          </div>
        </div>
        <p className='paragraph'>
          A full-stackoverflow software engineer from Vietnam
          <svg className='paragraph__icon' style={{ marginLeft: '0.2rem', marginRight: '0.2rem' }}>
            <use xlinkHref='/sprite.svg#icon-vietnam' />
          </svg>
          who is also keen on testing.
        </p>
        <p className='paragraph'>
          The world can be an overwhelming place if everything is operated manually. So I build things
          that make people’s lives easier using
          <svg className='paragraph__icon'>
            <use xlinkHref='/sprite.svg#icon-java' />
          </svg>
          <svg className='paragraph__icon'>
            <use xlinkHref='/sprite.svg#icon-ruby' />
          </svg>
          <svg className='paragraph__icon'>
            <use xlinkHref='/sprite.svg#icon-javascript' />
          </svg>.
        </p>
        <p className='paragraph'>
          Contact me:
          <a target='_blank' rel='noreferrer' href='https://github.com/huyennbl'>
            <svg className='contact-me__icon'>
              <use xlinkHref='./sprite.svg#icon-github' />
            </svg>
          </a>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/huyennbl/'>
            <svg className='contact-me__icon'>
              <use xlinkHref='/sprite.svg#icon-linkedin' />
            </svg>
          </a>
        </p>
        <div className='history'>
          I left some bugs in:
          <HistoryLogos logos={logos} />
        </div>
        <HostYourPage />
      </div>

      <Quotes quotes={quotes} />
    </>
  )
}

export default Intro
