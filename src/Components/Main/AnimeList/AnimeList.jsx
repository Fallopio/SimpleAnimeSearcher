import React from 'react'
import AnimeCard from './AnimeCard'

export function AnimeList(props) {
    return(
        <AnimeCard>
            <div>
            <div>
                {props.animeArr.map((item) =>
                    <AnimeCard key={item.attributes.canonicalTitle}>
                        <h3>
                            Title: {item.attributes.canonicalTitle}
                        </h3>
                        <p>
                            Avrage Rating:   {item.attributes.averageRating}
                        </p>
                        <p>
                            Age rating: {item.attributes.ageRating}
                        </p>
                        <p>
                            Number of episodes: {item.attributes.episodeCount}
                        </p>
                        <p>
                            Status: {item.attributes.status}
                        </p>
                        <p>
                            Synopsis: {item.attributes.synopsis}
                        </p>
                    </AnimeCard>
                )}
            </div>
            <button onClick={props.more}>Show more</button>
        </div>
        </AnimeCard>
    )
}