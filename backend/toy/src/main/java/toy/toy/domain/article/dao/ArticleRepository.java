package toy.toy.domain.article.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import toy.toy.domain.article.domain.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findAllByOrderByCreateDateDesc();

    @Override
    @Query("select distinct article from Article article "
        + "left join fetch article.comments comments "
        + "where article.id = :articleId")
    Optional<Article> findById(Long articleId);
}