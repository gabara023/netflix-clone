import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie/';
import Header from './components/Header/';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista 
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque

      let originals = list.filter(i=>i.slug === 'originals');

      //Pegando um aleatorio

      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(choseInfo);


    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
        if(window.scrollY > 10){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
      }

      window.addEventListener('scroll', scrollListener);

      return() => {
        window.removeEventListener('scroll', scrollListener);

    }
  }, []);
  return(
    <div className="page">

      <Header black={blackHeader}/>
      
      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }


      <section className="lists">
        {movieList.map((item, key)=>(
         <MovieRow key={key} title={item.title} items={item.items}/>


        ))}
      </section>
      <footer>
    <p>Feito por Gabriel Júnior</p>
    <p>Direitos de Imagem Para a Netflix</p>
    <p>Api utlizada do site da <a target="_blank" href="https://www.themoviedb.org/">The Movie DB</a> </p>
    <p>Projeto desenvolvido junto com <a target="_blank" href="https://b7web.com.br/fullstack/">B7WEB</a></p>

  </footer>

  {movieList.length <= 0 &&

  <div className='loading'>
    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"  />
 
  </div>
   }
    </div>
 
  )
}