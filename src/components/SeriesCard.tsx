import { dataTypes } from "../views/NetflixSeries";
import styles from "../style/Netfilx.module.css"

interface SeriesCardProps{
  key:string;
  data:dataTypes
}

export const SeriesCard = ({ data }:SeriesCardProps) => {

  const { img_url, name, rating, description, cast, genre, watch_url } = data;


  const btn_style = (rating:string) => ({
    padding: "1rem 2rem",
    border: "none",
    fontSize: "1rem",
    backgroundColor: Number(rating) >= 8.5 ? "#7dcea0" : "#f7dc6f",
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
 
  });

  


  const ratingClass = Number(rating) >= 8.5 ? styles['super_hit'] : styles['average'];

  return (
    <li className={`flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] min-w-[250px] max-w-[400px] ${styles['card']}`}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
     
      <div className={styles['card-content']}>
        <h2>Name: {name} </h2>
        <h3>
          Rating:
          <span className={`${styles['rating']} ${ratingClass}`}>{rating}</span>
        </h3>
        <p >
          Summary: {description}{" "}
        </p>
        <p>Genre: {genre.join(", ")} </p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" 
        style={{
             marginTop:"2rem",
        }}>
          <span style={btn_style(data.rating)}>Watch Now</span>
         
        </a>
      </div>
    </li>
  );
};