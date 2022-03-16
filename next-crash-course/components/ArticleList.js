import ArticleItem from './ArticleItem';

import articleStyles from '../styles/Article.module.css';


const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((item) => (
        <ArticleItem article={item} key={item.id} />
      ))}
    </div>
  );
};

export default ArticleList;
