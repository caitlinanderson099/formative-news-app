import { useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useArticlesContext } from '../hooks/useArticlesContext';
import { Newspaper } from 'react-bootstrap-icons';

// API KEY
const apiKey = import.meta.env.VITE_NEWS_API_KEY


const Home = () => {

  // state for the selects
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');

  // State for loading
  const [loading, SetLoading] = useState(true);

  // initiate usenavigate
  const navigate = useNavigate();

  // bring in state and dispatch functions
  const {articles, dispatch} = useArticlesContext();

  useEffect(() => {
    // set loading to true:
    SetLoading(true);

    //  fetch function
    const fetchArticles = async() => {
      await axios.get(`https://newsapi.org/v2/top-headlines?language=en&country=${country}&category=${category}&apiKey=${apiKey}`)
      .then(response => {
        console.log(response.data.articles)
        // setArticles(response.data.articles)
        dispatch({type: 'GET_ARTICLES', payload: response.data.articles})
        SetLoading(false)
      })
      .catch(error => {
        console.log(error);
        SetLoading(true);
      })
    }
    fetchArticles();
  }, [country, category]);

  // handle country change
  const handleCountryChange = (event) => {
    let newCountry = event.target.value
    // console.log(newCountry);
    setCountry(newCountry);
  }

  // handle category change
  const handleCategoryChange = (event) => {
    let newCategory = event.target.value
    setCategory(newCategory);
  }

  // handle query change
  const handleQueryChange = (event) => {
    let newQuery = event.target.value
    setQuery(newQuery);
  }

  const handleReadMoreClick = (index) => {
    console.log(index);
    navigate(`/article/${index}`)
  }

  // mapped articles component
  const Articles = ({articles}) => {
    const mappedArticles = articles.map((article, index) => {
      // map return
      return (
        <div key={index} className='article-card'>
        <h3> {article.title} </h3>
        <h4> {article.author} </h4>
        <button onClick={() => handleReadMoreClick(index)}> Read More </button>
        </div>
      )
    })

    

    // articles component return
    return (
      <>
       {mappedArticles}
      </>
    )
  }

  return (
    <div className='home-container'>

      <h2 id='title'> <Newspaper/>  Your One Stop News Hub </h2>
      <h3 id='subtitle'> Get All The Latest News Right Here </h3>

      <div className='filter-container'>

        
      {/* COUNTRY FILTERS */}
      <div className='filter-flex-container'>
          <label htmlFor='country-select'> Country: </label>
          <select name='country-select' id='country-select' onChange={handleCountryChange}>
          <option value=''> Any </option>
            <option value='us'> USA </option>
            <option value='gb'> Britain </option>
            <option value='au'> Australia </option>
            <option value='nz'> New Zealand </option>
          </select>
        </div>
    
        {/* CATEGORY FILTERS */}
        <div className='filter-flex-container'>
          <label htmlFor='category-select'> Category: </label>
          <select name='category-select' id='category-select' onChange={handleCategoryChange}>
          <option value=''> All </option>
            <option value='business'> Business </option>
            <option value='entertainment'> Entertainment </option>
            <option value='health'> Health </option>
            <option value='science'> Science </option>
            <option value='sports'> Sports </option>
            <option value='technology'> Technology </option>
          </select>
        </div>
       
      {/* end of filter container */}
      </div>

      <div className='article-container'>
          {loading ? (
            <div>Loading... </div>
          ) : (
            <Articles articles={articles}/>
          )}
      </div>

    {/* end of home container */}
    </div>
  )
}

export default Home