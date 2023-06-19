package toy.toy.domain.article.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import toy.toy.domain.article.domain.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {

}