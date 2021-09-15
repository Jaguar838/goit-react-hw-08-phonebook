import React from 'react';
import { Link } from 'react-router-dom';
import { SectionWrap } from 'UI';

const HomePage = () => {
    return (
        <SectionWrap title="Welcome to Phonebook 👋">
            <Link to="/register">
                <img
                    src="https://cdn-0.emojis.wiki/emoji-pics-lf/facebook/green-book-facebook.png"
                    alt="📗 Green Book Emoji"
                ></img>
            </Link>
        </SectionWrap>
    );
};
export default HomePage;
