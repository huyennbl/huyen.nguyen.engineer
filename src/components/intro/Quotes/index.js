const Quote = ({ content, author }) => {
  return (
    <figure className='quote'>
      <blockquote className='quote__text'>
        {content}
      </blockquote>
      <figcaption className='quote__user'>
        <p className='quote__user-name'>{author}</p>
      </figcaption>
    </figure>
  )
}

const Quotes = ({ quotes }) => {
  return (
    <div className='quotes'>
      {quotes.map((data, i) => <Quote {...data} key={`quote${i}`} />)}
    </div>
  )
}
export default Quotes
