package toy.toy.domain.comment.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.toy.domain.article.dao.ArticleRepository;
import toy.toy.domain.article.domain.Article;
import toy.toy.domain.comment.dao.CommentRepository;
import toy.toy.domain.comment.domain.Comment;
import toy.toy.domain.comment.dto.CreateCommentRequest;
import toy.toy.global.error.exception.NotExistsException;

@Service
@RequiredArgsConstructor
public class CreateCommentService {

    private final ArticleRepository articleRepository;

    private final CommentRepository commentRepository;

    @Transactional
    public void create(CreateCommentRequest request, Long articleId) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new NotExistsException("해당하는 게시글이 존재하지 않습니다."));
        Comment comment = Comment.createComment(request, article);
        commentRepository.save(comment);
    }
}
