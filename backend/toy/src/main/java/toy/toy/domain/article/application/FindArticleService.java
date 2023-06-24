package toy.toy.domain.article.application;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.toy.domain.article.dao.ArticleRepository;
import toy.toy.domain.article.domain.Article;
import toy.toy.domain.article.dto.ArticleDetailsResponse;
import toy.toy.domain.article.dto.ArticleResponse;
import toy.toy.global.error.exception.NotExistsException;

@Service
@RequiredArgsConstructor
public class FindArticleService {

    private final ArticleRepository articleRepository;

    @Transactional(readOnly = true)
    public List<ArticleResponse> findArticles() {
        List<Article> articles = articleRepository.findAllByOrderByCreateDateDesc();
        return ArticleResponse.toResponses(articles);
    }

    @Transactional(readOnly = true)
    public ArticleDetailsResponse findDetails(Long articleId) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new NotExistsException("해당하는 게시글이 존재하지 않습니다."));
        return ArticleDetailsResponse.toResponse(article);

    }
}