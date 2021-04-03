const React = window.React
const Logo = ({ logo, url }) => {
  return (
    <a target='_blank' rel='noreferrer' href={url} className='history__logo-link'>
      <img src={logo} alt={`logo ${url}`} height='40px' />
    </a>
  )
}

const HistoryLogos = ({ logos }) => {
  return (
    <div className='history__logos'>
      {logos.map((data, i) => <Logo {...data} key={`logo${i}`} />)}
    </div>
  )
}

export default HistoryLogos
