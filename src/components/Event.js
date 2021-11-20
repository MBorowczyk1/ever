import React, { useEffect, useState } from "react";
import { Price } from "./Price";
import { Date } from './Date'
import { Host } from './Host'
import { TagPrimary, TagSecondary } from "./Tags";
import { ButtonTertiary } from './Buttons'
import axios from "axios";

export function Event({ db }) {
    const [imageUrl, setImgUrl] = useState('')
    const fetchImage = async () => {
        try {
            const data = await axios.get('https://newonce-api.herokuapp.com/releases/' + db.albumSlug)
            setImgUrl(data.data.image.url);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        fetchImage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="c-event_container">
            <div className='c-event_imageWrapper'>
                <img src={imageUrl.length > 0 ? imageUrl : ''} alt='event cover' />
            </div>
            <div className='c-event_contentWrapper'>
                <div className='c-event_tags -dl4'>
                    <TagPrimary>
                        {db.tags[0]}
                    </TagPrimary>
                    <TagSecondary>
                        {db.tags[1]}
                    </TagSecondary>
                </div>
                <h1 className='t-title -f24 c-event_title'>
                    {db.title}
                </h1>
                <div className='c-event_infoSec -mb20 -dt8 -mt16'>
                    <Price value='Free' comp='dla klubowiczów Newonce' />
                    <Date date={db.date} />
                    <Host name={db.host} />
                </div>
                <ButtonTertiary onClick={() => console.log('zobacz więcej')}>
                    Zobacz więcej
                </ButtonTertiary>
                <span className="c-event_extra">
                    z roczną subskrybcją {' '}
                    <span className="-cGrey">
                        albo wjazd za {db.price}zł
                    </span>
                </span>
            </div>
        </div>
    )
}