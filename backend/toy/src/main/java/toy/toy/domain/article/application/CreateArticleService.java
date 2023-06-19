package toy.toy.domain.article.application;

import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import toy.toy.domain.article.dao.ArticleRepository;
import toy.toy.domain.article.domain.Article;
import toy.toy.domain.article.dto.CreateArticleRequest;

@Service
@RequiredArgsConstructor
public class CreateArticleService {

    private final ArticleRepository articleRepository;

    @Transactional
    public Long create(CreateArticleRequest request) {
        Article article = Article.createArticle(request);
        Article createdarticle = articleRepository.save(article);
        return createdarticle.getId();
    }
}