import { useNavigate, useParams } from "react-router-dom"
import { useArticlesContext } from "../hooks/useArticlesContext"
import { format } from "date-fns"
import { ArrowLeftShort } from "react-bootstrap-icons"

const SingleArticle = () => {
  const {id} = useParams()
  // bring in the context (global state)
  const {articles} = useArticlesContext()

  const article = articles[id]
  const formattedDate = format(new Date(article.publishedAt), "h:mm a  dd / MMMM / yyyy")

  // initialize useNavigate
  const navigate = useNavigate();


  return (
    <>
      <button id="back-button" onClick={() => navigate(-1)}>  <ArrowLeftShort/> Back </button>
      <div id="singlearticle-container">
        <div id="single-article-content">
          <img src={article.urlToImage} alt={article.title + " Image"} />
          <h2>{article.title}</h2>
          <h3> Published At: {formattedDate}</h3>
          <h3> Author: {article.author}</h3>
          <p>{article.content}</p>
          <a href={article.url} target="_blank">See Full Article</a>
        </div>
      </div>
    </>
  )
}

export default SingleArticle