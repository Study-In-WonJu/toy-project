package toy.toy.domain.article.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.toy.domain.article.dao.ArticleMapper;
import toy.toy.global.error.exception.NotExistsException;

@Service
@RequiredArgsConstructor
public class ChangeArticleService {

    private final ArticleMapper articleMapper;

    @Transactional
    public void delete(Long articleId) {
        int deleted = articleMapper.deleteById(articleId);
        if (deleted <= 0) {
            throw new NotExistsException("해당하는 게시글이 존재하지 않음.");
        }
    }
}