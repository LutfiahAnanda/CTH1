import React from 'react'

export default function Home() {
    return (
        <><div>
            <form className="form-search">
                <input type="text" placeholder="Search..." className="form-search__input" required />
                <button ype="submit" className="form-search__button">search</button>
            </form>

            <img className='image' src='https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b' alt='photo' />
        </div><div>
                <form className="form-search">
                    <input type="text" placeholder="Search..." className="form-search__input" required />
                    <button ype="submit" className="form-search__button">search</button>
                </form>

                <img className='image' src='https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b' alt='photo' />

                <p>Name: Bohemian Rhapsody (The Original Soundtrack)</p>
                <p>Release Date: 19-10-2018</p>
                <p>Release Date Precision: Day</p>
                <p>Album</p>
            </div></>
    )
}