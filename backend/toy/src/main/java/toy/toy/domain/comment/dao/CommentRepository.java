package toy.toy.domain.comment.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import toy.toy.domain.comment.domain.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
