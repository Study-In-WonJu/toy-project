package toy.toy.domain.comment.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.toy.domain.comment.dao.CommentMapper;
import toy.toy.domain.comment.dao.CommentRepository;
import toy.toy.domain.comment.domain.Comment;
import toy.toy.global.error.exception.NotExistsException;

@Service
@RequiredArgsConstructor
public class ChangeCommentService {

    private final CommentRepository commentRepository;

    private final CommentMapper commentMapper;

    //DB접근은 1회, DB에서 쿼리 날리는 것 1회
    @Transactional
    public void delete(Long commentId) {
        int deleted = commentMapper.deleteById(commentId);
        if (deleted <= 0) {
            throw new NotExistsException("해당하는 댓글이 존재하지 않음.");
        }
    }

    //DB접근은 1회, DB에서 쿼리 날리는 것 2회
    @Transactional
    public void edit(Long commentId, String content) {
        Comment comment = commentRepository.findById(commentId)
            .orElseThrow(() -> new NotExistsException("해당하는 댓글이 존재하지 않음"));
        comment.updateContent(content);
    }
}