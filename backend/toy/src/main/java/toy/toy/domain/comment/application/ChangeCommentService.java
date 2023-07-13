package toy.toy.domain.comment.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.toy.domain.comment.dao.CommentMapper;
import toy.toy.domain.comment.dao.CommentRepository;
import toy.toy.global.error.exception.NotExistsException;

@Service
@RequiredArgsConstructor
public class ChangeCommentService {

    private final CommentRepository commentRepository;

    private final CommentMapper commentMapper;

    @Transactional
    public void delete(Long commentId) {
        int deleted = commentMapper.deleteById(commentId);
        if (deleted <= 0) {
            throw new NotExistsException("해당하는 게시글이 존재하지 않음.");
        }
    }
}