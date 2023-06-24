package toy.toy.domain.article.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.toy.domain.article.dao.ArticleMapper;
import toy.toy.domain.article.dao.ArticleRepository;
import toy.toy.domain.article.domain.Article;
import toy.toy.global.error.exception.NotExistsException;

@Service
@RequiredArgsConstructor
public class ChangeArticleService {

    private final ArticleMapper articleMapper;

    private final ArticleRepository articleRepository;

    //DB접근은 1회, DB에서 쿼리 날리는 것 1회
    @Transactional
    public void delete(Long articleId) {
        int deleted = articleMapper.deleteById(articleId);
        if (deleted <= 0) {
            throw new NotExistsException("해당하는 게시글이 존재하지 않음.");
        }
    }

    //DB접근은 1회, DB에서 쿼리 날리는 것 2회
    @Transactional
    public void edit(Long articleId, String newContent) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new NotExistsException("해당하는 게시글이 존재하지 않습니다."));
        article.updateContent(newContent);
    }
}