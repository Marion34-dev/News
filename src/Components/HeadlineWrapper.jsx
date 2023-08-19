import Article from './Article.jsx';
import propTypes from 'prop-types';

const HeadlineWrapper = ({ news }) => {

    // creating array with updated data
    const arrayOfArticles = news.map(currentArticle => <Article key={currentArticle.id} news={{ thumbnail: currentArticle.fields.thumbnail, title: currentArticle.fields.headline, body: currentArticle.fields.bodyText, webUrl: currentArticle.webUrl}} />);

    return (
        <>
            <article>
                {arrayOfArticles}
            </article>
        </>
    )
};

HeadlineWrapper.defaultProps = {
    news: []
}

HeadlineWrapper.propTypes = {
    news: propTypes.arrayOf(
        propTypes.object,
    ),
}

export default HeadlineWrapper;