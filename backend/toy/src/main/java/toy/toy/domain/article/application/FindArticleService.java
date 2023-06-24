package toy.toy.domain.article.application;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.toy.domain.article.dao.ArticleRepository;
import toy.toy.domain.article.domain.Article;
import toy.toy.domain.article.dto.ArticleResponse;

@Service
@RequiredArgsConstructor
public class FindArticleService {

    private final ArticleRepository articleRepository;

    @Transactional(readOnly = true)
    public List<ArticleResponse> findArticles() {
        List<Article> articles = articleRepository.findAllByOrderByCreateDateDesc();
        return ArticleResponse.toResponses(articles);
    }
}