package toy.toy.domain.comment.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentMapper {

    @Delete("DELETE FROM comment WHERE id=#{commentId}")
    int deleteById(Long commentId);
}